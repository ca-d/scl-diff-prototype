(ns user.macros)

(defmacro inline-file [path] (slurp path))
