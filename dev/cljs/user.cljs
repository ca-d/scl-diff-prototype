(ns cljs.user
  (:require [tubax.core :refer [xml->clj]]
            [user.scl :refer [scl]])
  (:require-macros [user.macros :refer [inline-file]]))

(defn xml-seq
  "A tree seq on the xml elements as per xml/parse"
  {:added "1.0", :static true}
  [root]
  (tree-seq (complement string?) (comp seq :content) root))

(time (do (println "timing XML tree parsing and hashing:")
          (def xml-tree (xml->clj (inline-file "sample.scd")))
          (println (hash xml-tree))))

(time (do (println "timing XML element indexing:")
          (def elements (group-by :tag (xml-seq xml-tree)))
          (println (hash xml-tree))))

(time (do (println "timing SCL tree generation and hashing:")
          (def scl-tree (scl xml-tree xml-tree))
          (println (hash scl-tree))))
