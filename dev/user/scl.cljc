(ns user.scl)

(declare scl)

(defn ln-fn
  [{:keys [tag attrs content]} root elements]
  (let [templates (first (:DataTypeTemplates elements))
        template (first (filter #(= (-> %
                                        :attrs
                                        :id)
                                    (:lnType attrs))
                          (:content templates)))]
    {:tag tag,
     :attrs attrs,
     :content (conj (map #(scl % root elements) content)
                    (scl template root elements))}))

(def spe-scl
  {:LN ln-fn,
   :LN0 ln-fn,
   :DO (fn [{:keys [tag attrs content]} root elements]
         (let [templates (first (filter #(= (:tag %) :DataTypeTemplates)
                                  (:content root)))
               template (first (filter #(= (get-in % [:attrs :id])
                                           (:type attrs))
                                 (:content templates)))]
           {:tag tag,
            :attrs attrs,
            :content (conj content (scl template root elements))})),
   :DA (fn [{:keys [tag attrs content]} root elements]
         {:tag tag,
          :attrs attrs,
          :content (if (#{"Enum" "Struct"} (:bType attrs))
                     (let [templates (first (filter #(= (:tag %)
                                                        :DataTypeTemplates)
                                              (:content root)))
                           template (first (filter #(= (get-in % [:attrs :id])
                                                       (:type attrs))
                                             (:content templates)))]
                       (conj content (scl template root elements)))
                     nil)}),
   :LNode (fn [{:keys [tag attrs content],
                {:keys [iedName ldInst lnClass lnInst lnType prefix]} :attrs}
               root elements]
            {:tag tag,
             :attrs attrs,
             :content
               (if (= "None" iedName)
                 (let [template (first (filter #(= (get-in % [:attrs :id])
                                                   lnType)
                                         (:LNodeType elements)))]
                   (conj content (scl template root elements)))
                 (let [ied (first (filter #(= (:name (:attrs %)) iedName)
                                    (:IED elements)))
                       aps (filter #(= (:tag %) :AccessPoint) (:content ied))
                       servers (mapcat (fn [content]
                                         (filter #(= (:tag %) :Server) content))
                                 (map :content aps))
                       lds (mapcat (fn [content]
                                     (filter #(= (:tag %) :LDevice) content))
                             (map :content servers))
                       ld (first (filter #(= (:inst (:attrs %)) ldInst) lds))
                       ln (first (filter #(and (#{:LN :LN0} (:tag %))
                                               (= (:lnClass (:attrs %)) lnClass)
                                               (= (:inst (:attrs %) lnInst))
                                               (= (get-in % [:attrs :prefix] "")
                                                  prefix))
                                   (:content ld)))]
                   (conj content (scl ln root elements))))}),
   :ConnectedAP
     (fn [{:keys [tag attrs content], {:keys [iedName apName]} :attrs} root
          elements]
       (let [ied (first (filter #(= (:name (:attrs %))) (:IED elements)))
             ap (first (filter #(= (:name (:attrs %))) (:content ied)))]
         {:tag tag,
          :attrs attrs,
          :content (conj content (scl ap root elements))}))})

(def scl
  (memoize (fn [xml root elements]
             (if (string? xml)
               xml
               (let [tag (:tag xml)
                     attrs (:attrs xml)
                     content (:content xml)
                     transform (get spe-scl tag (fn [x _ _] x))]
                 (transform {:tag tag,
                             :attrs attrs,
                             :content (if content
                                        (map #(scl % root elements) content)
                                        nil)}
                            root
                            elements))))))
