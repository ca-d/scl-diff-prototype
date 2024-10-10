(ns openscd.scl
  (:require ["@openenergytools/scl-lib/dist/tBaseElement/identity.js" :rename
             {identity id}]
            [clojure.string :refer [blank? trim split replace join]]
            [clojure.data :refer [diff]]
            [clojure.set :refer [difference]]))

(defn after-next-paint [f] (js/requestAnimationFrame (fn [] (js/setTimeout f))))

(def identifier-attributes
  {:Association [:iedName :ldInst :prefix :lnClass :lnInst :lnType],
   :ClientLN [:apRef :iedName :ldInst :prefix :lnClass :lnInst],
   :ConnectedAP [:iedName :apName],
   :DAI [:name :ix],
   :ExtRef [:iedName :intAddr :ldInst :prefix :lnClass :lnInst :doName :daName
            :serviceType :srcLDInst :srcPrefix :srcLNClass :srcLNInst
            :srcCBName],
   ; :FCDA [:ldInst :prefix :lnClass :lnInst :doName :daName :fc :ix],
   :GSE [:ldInst :cbName],
   :Hitem [:version :revision],
   :IEDName [:apRef :ldInst :prefix :lnClass :lnInst],
   :KDC [:iedName :apName],
   :LDevice [:IED :inst],
   :LN [:prefix :lnClass :inst],
   :LN0 [:prefix :lnClass :inst],
   :LNode [:iedName :ldInst :prefix :lnClass :lnInst :lnType],
   :PhysConn [:type],
   :SDI [:name :ix],
   :SMV [:ldInst :cbName],
   :Terminal [:connectivityNode]})

(def schema-references
  {:ServerAt [{:fields [{:to "name", :from "apName"}],
               :to ":scope>AccessPoint",
               :from ":scope>AccessPoint>ServerAt",
               :scope "IED"}],
   :LogControl [{:fields [{:to "name", :from "datSet"}],
                 :to ":scope>DataSet",
                 :from ":scope>LogControl",
                 :scope "LN"}
                {:fields [{:to "name", :from "datSet"}],
                 :to ":scope>DataSet",
                 :from ":scope>LogControl",
                 :scope "LN0"}],
   ;   :FCDA [{:fields [{:to "inst", :from "ldInst"}],
   ;           :to ":scope>AccessPoint>Server>LDevice", :from
   ;           ":scope>AccessPoint>Server>LDevice>LN>DataSet>FCDA",
   ;           :scope "IED"}
   ;          {:fields [{:to "inst", :from "ldInst"}],
   ;           :to ":scope>AccessPoint>Server>LDevice", :from
   ;           ":scope>AccessPoint>Server>LDevice>LN0>DataSet>FCDA",
   ;           :scope "IED"}],
   ; :ConnectedAP [{:fields [{:to "name", :from "iedName"}],
   ;                :to ":scope>IED", :from
   ;                ":scope>Communication>SubNetwork>ConnectedAP", :scope
   ;                "SCL"}],
   :DO [{:fields [{:to "id", :from "type"}],
         :to ":scope>DOType",
         :from ":scope>LNodeType>DO",
         :scope "DataTypeTemplates"}],
   :SDO [{:fields [{:to "id", :from "type"}],
          :to ":scope>DOType",
          :from ":scope>DOType>SDO",
          :scope "DataTypeTemplates"}],
   :BDA [{:fields [{:to "id", :from "type"}],
          :to ":scope>DAType, :scope>EnumType",
          :from ":scope>DOType>DA,
          :scope>DAType>BDA",
          :scope "DataTypeTemplates"}],
   ;   :Terminal [{:fields [{:to "name", :from "substationName"}],
   ;               :to ":scope>Substation, :scope>Process,
   ;               :scope>Line", :from ":scope Terminal", :scope
   ;               "SCL"}],
   ; :LN0 [{:fields [{:to "id", :from "lnType"} {:to "lnClass", :from
   ; "lnClass"}],
   ;        :to ":scope>DataTypeTemplates>LNodeType",
   ;        :from ":scope>IED>AccessPoint>Server>LDevice>LN0",
   ;        :scope "SCL"}],
   :SampledValueControl [{:fields [{:to "name", :from "datSet"}],
                          :to ":scope>DataSet",
                          :from ":scope>SampledValueControl",
                          :scope "LN0"}],
   :GSEControl [{:fields [{:to "name", :from "datSet"}],
                 :to ":scope>DataSet",
                 :from ":scope>GSEControl",
                 :scope "LN0"}],
   :DA [{:fields [{:to "id", :from "type"}],
         :to ":scope>DAType, :scope>EnumType",
         :from ":scope>DOType>DA, :scope>DAType>BDA",
         :scope "DataTypeTemplates"}],
   :ReportControl [{:fields [{:to "name", :from "datSet"}],
                    :to ":scope>DataSet",
                    :from ":scope>ReportControl",
                    :scope "LN"}
                   {:fields [{:to "name", :from "datSet"}],
                    :to ":scope>DataSet",
                    :from ":scope>ReportControl",
                    :scope "LN0"}]
   ; :LN [{:fields [{:to "id", :from "lnType"} {:to "lnClass", :from
   ; "lnClass"}],
   ;       :to ":scope>DataTypeTemplates>LNodeType",
   ;       :from ":scope>IED>AccessPoint>LN",
   ;       :scope "SCL"}
   ;      {:fields [{:to "id", :from "lnType"} {:to "lnClass", :from
   ;      "lnClass"}],
   ;       :to ":scope>DataTypeTemplates>LNodeType", :from
   ;       ":scope>IED>AccessPoint>Server>LDevice>LN",
   ;       :scope "SCL"}]})
  })

(def defaults
  {:AccessPoint {:clock "false", :desc "", :kdc "false", :router "false"},
   :Association {:prefix ""},
   :BDA {:count "0", :desc "", :valImport "false", :valKind "Set"},
   :Bay {:desc ""},
   :ClientLN {:prefix ""},
   :ClientServices {:bufReport "false",
                    :goose "false",
                    :gsse "false",
                    :noIctBinding "false",
                    :rGOOSE "false",
                    :rSV "false",
                    :readLog "false",
                    :supportsLdName "false",
                    :sv "false",
                    :unbufReport "false"},
   :CommProt {:ipv6 "false"},
   :Communication {:desc ""},
   :ConductingEquipment {:desc "", :virtual "false"},
   :ConfDataSet {:modify "true"},
   :ConfLNs {:fixLnInst "false", :fixPrefix "false"},
   :ConfReportControl {:bufConf "false", :bufMode "both"},
   :ConnectedAP {:desc ""},
   :ConnectivityNode {:desc ""},
   :DA {:count "0",
        :dchg "false",
        :desc "",
        :dupd "false",
        :qchg "false",
        :valImport "false",
        :valKind "Set"},
   :DAI {:desc ""},
   :DAType {:desc "", :iedType ""},
   :DO {:desc "", :transient "false"},
   :DOI {:desc ""},
   :DOType {:desc "", :iedType ""},
   :DataSet {:desc ""},
   :EnumType {:desc ""},
   :EnumVal {:desc ""},
   :EqFunction {:desc ""},
   :EqSubFunction {:desc ""},
   :FCDA {:prefix ""},
   :FileHandling {:ftp "false", :ftps "false", :mms "true"},
   :Function {:desc ""},
   :GOOSE {:fixedOffs "false", :goose "true", :rGOOSE "false"},
   :GOOSESecurity {:desc ""},
   :GSE {:desc ""},
   :GSEControl
     {:desc "", :fixedOffs "false", :securityEnable "None", :type "GOOSE"},
   :GSESettings {:appID "Fix",
                 :cbName "Fix",
                 :datSet "Fix",
                 :dataLabel "Fix",
                 :kdaParticipant "false"},
   :GeneralEquipment {:desc "", :virtual "false"},
   :Header {:nameStructure "IEDName", :revision ""},
   :IED {:desc "",
         :engRight "full",
         :originalSclRelease "1",
         :originalSclRevision "A",
         :originalSclVersion "2003"},
   :Inputs {:desc ""},
   :LDevice {:desc ""},
   :LN {:desc "", :prefix ""},
   :LNode {:desc "", :iedName "None", :ldInst "", :lnInst "", :prefix ""},
   :LNodeType {:desc "", :iedType ""},
   :Line {:desc ""},
   :Log {:desc ""},
   :LogControl {:bufTime "0",
                :desc "",
                :intgPd "0",
                :lnClass "LLN0",
                :logEna "true",
                :prefix "",
                :reasonCode "true"},
   :LogSettings {:cbName "Fix",
                 :datSet "Fix",
                 :intgPd "Fix",
                 :logEna "Fix",
                 :trgOps "Fix"},
   :McSecurity {:encryption "false", :signature "false"},
   :NeutralPoint {:desc "", :name ""},
   :PhysConn {:desc ""},
   :PowerTransformer {:desc "", :virtual "false"},
   :Process {:desc ""},
   :ProtNs {:type "8-MMS"},
   :RedProt {:hsr "false", :prp "false", :rstp "false"},
   :ReportControl {:bufOvfl "true",
                   :bufTime "0",
                   :buffered "false",
                   :configRef "false",
                   :dataRef "false",
                   :dataSet "false",
                   :desc "",
                   :entryID "false",
                   :indexed "true",
                   :intgPd "0",
                   :reasonCode "false",
                   :seqNum "false",
                   :timeStamp "false"},
   :ReportSettings {:bufTime "Fix",
                    :cbName "Fix",
                    :datSet "Fix",
                    :intgPd "Fix",
                    :optFields "Fix",
                    :owner "false",
                    :resvTms "false",
                    :rptID "Fix",
                    :trgOps "Fix"},
   :RptEnabled {:desc "", :max "1"},
   :SDI {:desc ""},
   :SDO {:count "0", :desc ""},
   :SMV {:desc ""},
   :SMVSecurity {:desc ""},
   :SMVSettings {:cbName "Fix",
                 :datSet "Fix",
                 :kdaParticipant "false",
                 :nofASDU "Fix",
                 :optFields "Fix",
                 :pdcTimeStamp "false",
                 :samplesPerSec "false",
                 :smpRate "Fix",
                 :svID "Fix",
                 :synchSrcId "false"},
   :SMVsc
     {:delivery "multicast", :deliveryConf "false", :rSV "false", :sv "true"},
   :SampledValueControl {:dataSet "false",
                         :desc "",
                         :multicast "true",
                         :refreshTime "false",
                         :sampleRate "false",
                         :security "false",
                         :securityEnable "None",
                         :smpMod "SmpPerPeriod",
                         :synchSourceId "false",
                         :timestamp "false"},
   :Server {:certificate "false",
            :desc "",
            :none "true",
            :password "false",
            :strong "false",
            :timeout "30",
            :weak "false"},
   :ServerAt {:desc ""},
   :Services {:nameLength "32"},
   :SettingControl {:actSG "1", :desc ""},
   :SettingGroups {:resvTms "false"},
   :SubEquipment {:desc "", :phase "none", :virtual "false"},
   :SubFunction {:desc ""},
   :SubNetwork {:desc ""},
   :Substation {:desc ""},
   :TapChanger {:desc "", :virtual "false"},
   :Terminal {:desc "", :name ""},
   :TimeSyncProt
     {:c37_238 "false", :iec61850_9_3 "false", :other "false", :sntp "true"},
   :TransformerWinding {:desc "", :virtual "false"},
   :TrgOps
     {:dchg "false", :dupd "false", :gi "true", :period "false", :qchg "false"},
   :ValueHandling {:setToRO "false"},
   :Voltage {:multiplier ""},
   :VoltageLevel {:desc ""}})

(declare scl)
(declare domToEdn)

(defn with-defaults
  [{:keys [attrs tag], :as element}]
  (let [default-attrs (get defaults (keyword tag))]
    (assoc element
      :attrs (if default-attrs (merge default-attrs attrs) attrs))))

(defn without-identifiers
  [{:keys [attrs], :as element}]
  (assoc element
    :attrs (apply dissoc
             attrs
             :name
             :id
             (identifier-attributes (keyword (:tag element))))))

(defn tos
  [{:keys [fields to from scope]} elm]
  (let [ancestor (.closest elm scope)]
    (if (and ancestor (some #(= elm %) (vec (.querySelectorAll ancestor from))))
      (let [referents (filter (fn [target]
                                (every? (fn [{:keys [from to]}]
                                          (= (.getAttribute target to)
                                             (.getAttribute elm from)))
                                        fields))
                        (vec (.querySelectorAll ancestor to)))]
        referents)
      nil)))

(defn with-schema-references
  [{:keys [tag content], :as element}]
  (let [refs (get schema-references (keyword tag))
        referents (map domToEdn
                    (filter (complement nil?)
                      (flatten
                        (map tos refs (repeat (::element (meta element)))))))]
    (assoc element
      :content (when (or content referents) (into content referents)))))

(def fcda-references
  (fn [{:keys [content],
        {:keys [ldInst prefix lnClass lnInst doName daName]} :attrs,
        ; TODO(ca-d): add fc and ix?
        :as description}]
    (let [element (::element (meta description))
          SCL (.closest element "SCL")
          IED (.closest element "IED")
          prefix-selector (when-not (blank? prefix)
                            (str "[prefix='" prefix "']"))
          selector (if (= lnClass "LLN0")
                     (str "LDevice[inst='" ldInst "'] LN0[inst='" lnInst "']")
                     (str "LDevice[inst='"
                          ldInst
                          "'] LN"
                          prefix-selector
                          "[inst='"
                          lnInst
                          "'][lnClass='"
                          lnClass
                          "']"))
          LN (.querySelector IED selector)
          lnType (.getAttribute LN "lnType")
          LNType (.querySelector
                   SCL
                   (str "DataTypeTemplates LNodeType[id='" lnType "']"))
          do-name-segments (map #(replace % #"\\(\\d+\\)" "")
                             (split doName #"\."))
          DO (.querySelector LNType
                             (str "DO[name='" (first do-name-segments) "']"))
          DOI (when DO
                (.querySelector
                  LN
                  (str ":scope > DOI[name='" (first do-name-segments) "']")))
          DOType (when DO
                   (.querySelector SCL
                                   (str "DataTypeTemplates DOType[id='"
                                        (.getAttribute DO "type")
                                        "']")))
          sdo-type (:sdo-type
                     ((fn [{:keys [sdo-type names]}]
                        (when-not (nil? sdo-type)
                          (let [sdo (.querySelector
                                      sdo-type
                                      (str "SDO[name='" (first names) "']"))]
                            (if (nil? sdo)
                              {:sdo-type sdo-type, :names (rest names)}
                              (recur {:sdo-type
                                        (.querySelector
                                          SCL
                                          (str "DataTypeTemplates DOType[id='"
                                               (.getAttribute sdo "type")
                                               "'] SDO")),
                                      :names (rest names)})))))
                       {:sdo-type DOType, :names (rest do-name-segments)}))
          da-name-segments (map #(replace % #"\\(\\d+\\)" "")
                             (split daName #"\\."))
          DA (when sdo-type
               (.querySelector sdo-type
                               (str "DA[name='" (first da-name-segments) "']")))
          DAType (when DA
                   (.querySelector SCL
                                   (str "DataTypeTemplates DAType[id='"
                                        (.getAttribute DA "type")
                                        "']")))
          bda-type (:bda-type
                     ((fn [{:keys [bda-type names]}]
                        (when-not (nil? bda-type)
                          (let [bda (.querySelector
                                      bda-type
                                      (str "BDA[name='" (first names) "']"))]
                            (if (nil? bda)
                              {:bda-type bda-type, :names (rest names)}
                              (recur {:bda-type
                                        (.querySelector
                                          SCL
                                          (str "DataTypeTemplates DAType[id='"
                                               (.getAttribute bda "type")
                                               "'] BDA")),
                                      :names (rest names)})))))
                       {:bda-type DAType, :names (rest da-name-segments)}))
          child (first (filter identity
                         [bda-type DAType sdo-type DOType LNType]))]
      (if child
        (assoc description
          :content (conj content (domToEdn child) (domToEdn DOI)))
        description))))

(def special-references {:FCDA fcda-references})

(defn with-references
  [element]
  (if (contains? special-references (keyword (:tag element)))
    ((get special-references (keyword (:tag element))) element)
    (if (contains? schema-references (keyword (:tag element)))
      (with-schema-references element)
      element)))

(defrecord Elm [^js/String tag ^PersistentTreeMap attrs
                ^PersistentHashSet content])

(def ^:export domToEdn
  (memoize
    (fn [dom]
      (if dom
        (condp = (.-nodeType dom)
          3 (trim (.-textContent dom)) ; text
          4 (.-data dom) ; CDATA
          9 (recur (.-documentElement dom)) ; document
          1 (when (not= (.-tagName dom) "DataTypeTemplates")
              (-> ^{::element dom}
                  {:tag (.-tagName dom),
                   :attrs (apply sorted-map ; FIXME: Do we need to sort?
                                 (mapcat (fn [a] [(keyword (.-name a))
                                                  (.-value a)])
                                   (.-attributes dom))),
                   :content (set (filter #(not (or (nil? %) (blank? %)))
                                   (map domToEdn (.-childNodes dom))))}
                  with-defaults
                  without-identifiers
                  with-references)) ; element
          nil)
        nil))))

(defn render-attributes
  [attrs target]
  (let [table (js/document.createElement "table")]
    (doseq [[k v] attrs]
      (let [tr (js/document.createElement "tr")
            th (js/document.createElement "th")
            td (js/document.createElement "td")
            ns-th (js/document.createElement "th")
            components (clojure.string/split (name k) #":" 2)
            anm (last components)
            ans-component (first components)
            ans (if (= anm ans-component) "" ans-component)]
        (set! (.-textContent ns-th) ans)
        (set! (.-textContent th) anm)
        (if (nil? v)
          (set! (.-innerHTML td) "<i>(missing)</i>")
          (if (blank? v)
            (set! (.-innerHTML td) "<i>(empty)</i>")
            (set! (.-textContent td) v)))
        (.appendChild tr ns-th)
        (.appendChild tr th)
        (.appendChild tr td)
        (.appendChild table tr)))
    (.appendChild target table)))

(defn tag-and-id
  [node]
  (if (and (:tag node) (::element (meta node)))
    (let [elm-id (id (::element (meta node)))]
      [(:tag node) (if (string? elm-id) elm-id nil)])
    nil))

(defn render-node
  ([data target] (render-node data target 2))
  ([data target sibling-count] (render-node data target sibling-count false))
  ([data target sibling-count odd]
   (render-node data target sibling-count odd nil))
  ([data target sibling-count odd old-or-new]
   (if (string? data)
     (when (not (clojure.string/blank? data))
       (let [span (js/document.createElement "span")]
         (set! (.-textContent span) data)
         (.append target span)))
     (let [details (js/document.createElement "details")
           summary (js/document.createElement "summary")
           child-count (count (filter :tag (:content data)))
           title (id (::element (meta data)))]
       (when odd (set! (.-className details) "odd"))
       (when old-or-new
         (-> summary
             .-classList
             (.add (name old-or-new))))
       (set! (.-textContent summary) (str (:tag data) " " title " "))
       (.appendChild details summary)
       (.appendChild target details)
       (.addEventListener summary
                          "contextmenu"
                          (fn [e]
                            (.preventDefault e)
                            (.append summary (str " " (hash data)))
                            (.preventDefault e)))
       (.addEventListener summary
                          "mousedown"
                          (fn [e]
                            (when (= (.-button e) 1)
                              (.preventDefault e)
                              (run! #(when (= (.-tagName %) "DETAILS")
                                       (set! (.-open %) (not (.-open %))))
                                    (array-seq (.-children details))))))
       (.addEventListener
         details
         "toggle"
         (fn []
           (when (and (.-open details)
                      (-> details
                          .-classList
                          (.contains "rendered")
                          not))
             (-> details
                 .-classList
                 (.add "rendered"))
             (render-attributes (:attrs data) details)
             (let [span (js/document.createElement "span")]
               (set! (.-textContent span) "Loading...")
               (.appendChild details span)
               (after-next-paint
                 (fn []
                   (run! (fn [node]
                           (render-node node details child-count (not odd)))
                         (sort-by tag-and-id (:content data)))
                   (.removeChild details span)))))))
       (when (< sibling-count 2) (set! (.-open details) true))))))

(defn show-data [data] (render-node data js/document.body) data)

(defn render-attribute-diff
  [ours theirs target]
  (when-not (= ours theirs)
    (let [table (js/document.createElement "table")
          ks (apply sorted-set (into (keys theirs) (keys ours)))]
      (doseq [k ks]
        (let [tr (js/document.createElement "tr")
              th (js/document.createElement "th")
              td-ours (js/document.createElement "td")
              td-arrow (js/document.createElement "td")
              td-theirs (js/document.createElement "td")
              ns-th (js/document.createElement "th")
              components (clojure.string/split (name k) #":" 2)
              anm (last components)
              ans-component (first components)
              ans (if (= anm ans-component) "" ans-component)
              v-ours (ours k)
              v-theirs (theirs k)]
          (when-not (= v-ours v-theirs)
            (set! (.-textContent ns-th) ans)
            (set! (.-textContent th) anm)
            (if (nil? v-ours)
              (set! (.-innerHTML td-ours) "<i>(missing)</i>")
              (if (blank? v-ours)
                (set! (.-innerHTML td-ours) "<i>(empty)</i>")
                (set! (.-textContent td-ours) v-ours)))
            (-> td-arrow
                .-classList
                (.add "arrow"))
            (set! (.-textContent td-arrow) "->")
            (if (nil? v-theirs)
              (set! (.-innerHTML td-theirs) "<i>(missing)</i>")
              (if (blank? v-theirs)
                (set! (.-innerHTML td-theirs) "<i>(empty)</i>")
                (set! (.-textContent td-theirs) v-theirs)))
            (.appendChild tr ns-th)
            (.appendChild tr th)
            (.appendChild tr td-ours)
            (.appendChild tr td-arrow)
            (.appendChild tr td-theirs)
            (.appendChild table tr))))
      (.appendChild target table))))

(defn render-node-diff
  ([ours theirs target] (render-node-diff ours theirs target 2))
  ([ours theirs target sibling-count]
   (render-node-diff ours theirs target sibling-count false))
  ([ours theirs target sibling-count odd]
   (when-not (= ours theirs)
     (if (nil? theirs)
       (render-node ours target sibling-count odd :old)
       (if (nil? ours)
         (render-node theirs target sibling-count odd :new)
         (if (string? ours)
           (when-not (and (blank? ours) (blank? theirs))
             (let [span (js/document.createElement "span")]
               (set! (.-textContent span) (str ours " -> " theirs))
               (.append target span)))
           (let [details (js/document.createElement "details")
                 summary (js/document.createElement "summary")
                 title (id (or (::element (meta ours))
                               (::element (meta theirs))))]
             (when odd (set! (.-className details) "odd"))
             (-> details
                 .-classList
                 (.add "diff"))
             (set! (.-textContent summary) (str (:tag ours) " " title " "))
             (.appendChild details summary)
             (.appendChild target details)
             (.addEventListener
               summary
               "contextmenu"
               (fn [e]
                 (.append summary (str " " (hash ours) " -> " (hash theirs)))
                 (.preventDefault e)))
             (.addEventListener summary
                                "auxclick"
                                (fn [e]
                                  (when (= (.-button e) 1)
                                    (.preventDefault e)
                                    (run! #(when (= (.-tagName %) "DETAILS")
                                             (set! (.-open %) (not (.-open %))))
                                          (array-seq (.-children details))))))
             (.addEventListener
               details
               "toggle"
               (fn []
                 (when (and (.-open details)
                            (-> details
                                .-classList
                                (.contains "rendered")
                                not))
                   (-> details
                       .-classList
                       (.add "rendered"))
                   (render-attribute-diff (:attrs ours) (:attrs theirs) details)
                   (let [span (js/document.createElement "span")]
                     (set! (.-textContent span) "Loading...")
                     (.appendChild details span)
                     (after-next-paint
                       (fn []
                         (let [their-identified-elements
                                 (group-by tag-and-id
                                           (filter :tag (:content theirs)))
                               our-identified-elements
                                 (group-by tag-and-id
                                           (filter :tag (:content ours)))
                               element-pairs
                                 (filter #(and (= (count %) 2)
                                               (not= (first %) (second %)))
                                   (vals (merge-with concat
                                                     their-identified-elements
                                                     our-identified-elements)))
                               their-identities
                                 (set (keys their-identified-elements))
                               our-identities (set (keys
                                                     our-identified-elements))
                               their-elements
                                 (map #(first (their-identified-elements %))
                                   (difference their-identities our-identities))
                               our-elements
                                 (map #(first (our-identified-elements %))
                                   (difference our-identities their-identities))
                               child-count (+ (count element-pairs)
                                              (count their-elements)
                                              (count our-elements))
                               elements (sort-by #(or (tag-and-id %)
                                                      (tag-and-id (first %)))
                                                 (concat element-pairs
                                                         their-elements
                                                         our-elements))
                               nodes
                                 (conj
                                   elements
                                   [(join " " (filter string? (:content ours)))
                                    (join " "
                                          (filter string? (:content theirs)))])]
                           (run! (fn [node-or-pair]
                                   (if (:tag node-or-pair)
                                     (render-node node-or-pair
                                                  details
                                                  child-count
                                                  (not odd)
                                                  :new)
                                     (let [[ours theirs] node-or-pair]
                                       (render-node-diff ours
                                                         theirs
                                                         details
                                                         child-count
                                                         (not odd)))))
                                 nodes)
                           (.removeChild details span))))))))
             (when (< sibling-count 2) (set! (.-open details) true)))))))))

(defn show-diff
  [edn1 edn2 target]
  (when-not (= edn1 edn2) (render-node-diff edn1 edn2 target)))

(defn ^:export sclDomDiff
  [dom1 dom2 target]
  (let [edn1 (domToEdn dom1)
        edn2 (domToEdn dom2)]
    (show-diff edn1 edn2 target)))

(defn ^:export sclDomToEdn
  [dom]
  (-> dom
      domToEdn
      show-data))
