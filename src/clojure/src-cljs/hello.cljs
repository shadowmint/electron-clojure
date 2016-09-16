(ns example.hello (:require
    [dommy.core :as dommy]))

(js/console.log "Hello from ClojureScript 3!")
(js/console.log "Hello from ClojureScript 4!")

(dommy/add-class! (dommy/sel1 :body) "hello")
