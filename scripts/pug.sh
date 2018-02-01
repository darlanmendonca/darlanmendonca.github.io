#!/bin/bash

set -e

./node_modules/.bin/pug sources/*.pug \
--out ./ \
--silent \
--watch sources/*.pug
