const schema = new DOMParser().parseFromString(
  await fetch("./scl-schema.xsd").then((r) => r.text()),
  "application/xml",
);

const elements = Array.from(schema.querySelectorAll("element[name]")).sort(
  (a, b) => a.getAttribute("name").localeCompare(b.getAttribute("name")),
);

export const defaults = {};
export const references = {};

for (const element of elements) {
  /** defaults **/
  const types = [];
  const type = element.getAttribute("type")?.replace(/^scl:/, "");
  let typeElement = schema.querySelector(`[name="${type}"]`);
  while (typeElement) {
    types.push(typeElement);
    const parentType = typeElement
      .querySelector("extension, restriction")
      ?.getAttribute("base");
    if (parentType) {
      typeElement = schema.querySelector(`[name="${parentType}"]`);
    } else {
      typeElement = null;
    }
  }

  const attributes = {};
  for (const type of types.reverse()) {
    const typeAttributes = Array.from(type.querySelectorAll("attribute"));
    const attributeGroups = Array.from(type.querySelectorAll("attributeGroup"));
    for (const attributeGroup of attributeGroups) {
      typeAttributes.push(
        ...Array.from(
          schema.querySelectorAll(
            `attributeGroup[name="${attributeGroup.getAttribute("ref")}"] attribute`,
          ),
        ),
      );
    }
    for (const attribute of typeAttributes) {
      if (attribute.hasAttribute("default"))
        attributes[attribute.getAttribute("name")] =
          attribute.getAttribute("default");
    }
  }
  if (Object.keys(attributes).length) {
    const name = element.getAttribute("name");
    if (name in defaults) {
      if (JSON.stringify(defaults[name]) !== JSON.stringify(attributes))
        throw new Error("Different defaults for same element");
    } else defaults[name] = attributes;
  }

  /** references **/
  const keyrefs = Array.from(element.children).filter(
    (e) => e.localName === "keyref",
  );
  const keys = Array.from(element.children).filter(
    (e) => e.localName === "key",
  );
  for (const keyref of keyrefs) {
    const keyname = keyref.getAttribute("refer").replace(/scl:/g, "");
    const refname = keyref.getAttribute("name");
    const key = keys.find((k) => k.getAttribute("name") === keyname);
    if (!key) throw new Error("Key " + keyname + " not found");
    const referrer = keyref
      .querySelector("selector")
      ?.getAttribute("xpath")
      .replace(/scl:/g, "");
    if (!referrer) throw new Error("No selector for keyref " + refname);
    const referent = key
      .querySelector("selector")
      ?.getAttribute("xpath")
      .replace(/scl:/g, "");
    if (!referent) throw new Error("No selector for key " + keyname);
    const referrerFields = Array.from(keyref.querySelectorAll("field")).map(
      (f) => f.getAttribute("xpath").replace(/^@/, ""),
    );
    if (!referrerFields.length)
      throw new Error("No fields for keyref " + refname);
    const referentFields = Array.from(key.querySelectorAll("field")).map((f) =>
      f.getAttribute("xpath").replace(/^@/, ""),
    );
    if (!referentFields.length) throw new Error("No fields for key " + keyname);
    if (referentFields.length !== referrerFields.length)
      throw new Error(
        "Different number of fields for key " +
          keyname +
          " and keyref " +
          refname,
      );
    const fields = referentFields.map((f, i) => ({
      referrer: referrerFields[i],
      referent: f,
    }));
    const ref = {
      referrer,
      within: element.getAttribute("name"),
      referent,
      fields,
    };
    const names = referrer
      .split("|")
      .map((s) => s.split("/").pop())
      .map((s) => s.trim().replace(/scl:/g, ""));
    for (const name of names) {
      if (!(name in references)) references[name] = [ref];
      else references[name].push(ref);
    }
  }
}

console.log(defaults);
console.log(references);
console.log(JSON.stringify(defaults, null, 2));
console.log(JSON.stringify(references, null, 2));
