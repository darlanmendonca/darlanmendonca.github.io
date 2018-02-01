#!/bin/bash

set -e

port=3000

./scripts/pug.sh &

./node_modules/.bin/browser-sync start \
--server '.' 'public' \
--files 'public/*.*' '*.html' \
--no-ui \
--no-notify
