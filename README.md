# Electron with Clojure

## Dev

    npm install
    gulp

To run tests:

    gulp test

To watch for changes:

    gulp watch

To run ui:

    cd ui
    gulp watch

To run clojure compiler:

    cd src/clojure
    lein cljsbuild auto

## Notes

Yes, that does mean you need three different watch tasks all running at the
same time; es6, clojure and electron.
