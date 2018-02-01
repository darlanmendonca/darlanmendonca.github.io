#!/bin/bash

set -e

port=3000

./scripts/pug.sh &
./scripts/sass.sh &

./node_modules/.bin/browser-sync start \
--server '.' 'public' \
--files 'public/*.*' '*.html' \
--no-ui \
--no-notify
