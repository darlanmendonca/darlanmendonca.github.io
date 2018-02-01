#!/bin/bash

set -e

./node_modules/.bin/pug sources/views/*.pug \
--out ./ \
--silent \
--watch sources/views/*.pug
