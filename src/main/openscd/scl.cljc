(ns openscd.scl
  (:require ["@openenergytools/scl-lib/dist/tBaseElement/identity.js" :rename
             {identity id}]
            [fipp.edn :refer [pprint]]
            [clojure.string :refer [blank? trim]]
            [clojure.set :refer [difference]]
            [clojure.edn :refer [read-string]]))

(defn after-next-paint [f] (js/requestAnimationFrame (fn [] (js/setTimeout f))))

(def references
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
  (assoc element :attrs (dissoc attrs :id)))

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

(defn with-references
  [{:keys [tag content], :as element}]
  (let [refs (get references (keyword tag))
        referents (map domToEdn
                    (filter (complement nil?)
                      (flatten
                        (map tos refs (repeat (::element (meta element)))))))]
    (assoc element
      :content (if (or content referents) (into content referents)))))

(defrecord Elm [^js/String tag ^PersistentTreeMap attrs
                ^PersistentHashSet content])

(def ^:export domToEdn
  (memoize
    (fn [dom]
      (condp = (.-nodeType dom)
        3 (trim (.-textContent dom)) ; text
        4 (.-data dom) ; CDATA
        9 (recur (.-documentElement dom)) ; document
        1 (when (not= (.-tagName dom) "DataTypeTemplates")
            (-> (Elm. (.-tagName dom)
                      (apply sorted-map
                        (mapcat (fn [a] [(keyword (.-name a)) (.-value a)])
                          (.-attributes dom)))
                      (set (filter #(not (or (nil? %) (blank? %)))
                             (map domToEdn (.-childNodes dom))))
                      {::element dom}
                      nil)
                with-defaults
                with-references)) ; element
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
  ([data target] (render-node data target 1))
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
       (.addEventListener
         summary
         "contextmenu"
         (fn [e] (.append summary (str " " (hash data))) (.preventDefault e)))
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
         (fn [e]
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
                   (do (run! (fn [node]
                               (render-node node details child-count (not odd)))
                             (sort-by tag-and-id (:content data)))
                       (.removeChild details span))))))))
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
  ([ours theirs target] (render-node-diff ours theirs target 1))
  ([ours theirs target sibling-count]
   (render-node-diff ours theirs target sibling-count false))
  ([ours theirs target sibling-count odd]
   (when-not (= ours theirs)
     (if (string? ours)
       (when-not (and (blank? ours) (blank? theirs))
         (let [span (js/document.createElement "span")]
           (set! (.-textContent span) (str ours " -> " theirs))
           (.append target span)))
       (let [details (js/document.createElement "details")
             summary (js/document.createElement "summary")
             title (id (or (::element (meta ours)) (::element (meta theirs))))]
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
           (fn [e]
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
                     (let [node-pairs (filter #(= (count %) 2)
                                        (vals (merge-with
                                                concat
                                                (group-by
                                                  #(str (:tag %)
                                                        (id (::element (meta
                                                                         %))))
                                                  (into (:content ours)
                                                        (:content theirs))))))
                           their-identified-nodes
                             (group-by #(str (:tag %) (id (::element (meta %))))
                                       (:content theirs))
                           our-identified-nodes
                             (group-by #(str (:tag %) (id (::element (meta %))))
                                       (:content ours))
                           their-identities (set (keys their-identified-nodes))
                           our-identities (set (keys our-identified-nodes))
                           their-nodes (map #(first (their-identified-nodes %))
                                         (difference their-identities
                                                     our-identities))
                           our-nodes (map #(first (our-identified-nodes %))
                                       (difference our-identities
                                                   their-identities))
                           child-count (+ (count (filter #(:tag (first %))
                                                   node-pairs))
                                          (count their-nodes)
                                          (count our-nodes))
                           nodes (sort-by
                                   #(or (tag-and-id %) (tag-and-id (first %)))
                                   (concat node-pairs their-nodes our-nodes))]
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
         (when (< sibling-count 2) (set! (.-open details) true)))))))

(defn show-diff
  [edn1 edn2]
  (when-not (= edn1 edn2) (render-node-diff edn1 edn2 js/document.body)))

(defn ^:export sclDomDiff
  [dom1 dom2]
  (let [edn1 (domToEdn dom1) edn2 (domToEdn dom2)] (show-diff edn1 edn2)))

(defn ^:export sclDomToEdn
  [dom]
  (-> dom
      domToEdn
      show-data))
