(ns user
  (:require [clojure.xml :as xml]
            [user.scl :refer [scl]]))

(time (do (println "timing XML tree parsing and hashing:")
          (def xml-tree (xml/parse "sample.scd"))
          (println (hash xml-tree))))

(time (do (println "timing XML element indexing:")
          (def elements (group-by :tag (xml-seq xml-tree)))
          (println (hash xml-tree))))

(time (do (println "timing SCL tree generation and hashing:")
          (def scl-tree (scl xml-tree xml-tree elements))
          (println (hash scl-tree))))
