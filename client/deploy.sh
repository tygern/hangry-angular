#!/bin/sh

grunt build
cf push hangry -m 64M -b https://github.com/cloudfoundry-community/staticfile-buildpack.git