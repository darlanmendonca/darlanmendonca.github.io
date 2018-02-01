#!/bin/bash

set -e

./node_modules/.bin/node-sass sources/styles/app.scss public/styles/app.css -q \
--output-style compressed \
--source-map true \
--error-bell && \

./node_modules/.bin/node-sass sources/styles/app.scss public/styles/app.css -q \
--output-style compressed \
--source-map true \
--error-bell \
--watch
