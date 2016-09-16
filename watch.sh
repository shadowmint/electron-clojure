#!/bin/sh
tmux new-session -d 'cd src/clojure && lein repl'
tmux split-window -v 'gulp watch; bash -i'
tmux split-window -h 'cd ui && gulp watch; bash -i'
tmux split-window -h 'cd src/clojure && lein cljsbuild auto'
tmux -2 attach-session -d
