(defproject clojure-simple "1.1.4"
  :description ""
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [prismatic/dommy "1.1.0"]
                 [org.clojure/clojurescript "1.9.229"
                  :exclusions [org.apache.ant/ant]]]
  :plugins [[lein-cljsbuild "1.1.4"]]
  :cljsbuild {
    :builds [{:source-paths ["src-cljs"]
              :compiler {:output-to "resources/public/main.js"
                         :optimizations :advanced
                         :pretty-print true}}]})
