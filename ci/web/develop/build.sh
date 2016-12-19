#!/bin/sh
# docker run -v ~/.aws:~/.aws testi

cd $NAGWARE_REPO_PATH \
&& git pull \
&& cd $NAGWARE_NPM_PROJECT_PATH \
&& npm install \
&& node_modules/.bin/gulp build \
&& aws s3 sync ./build s3://$S3_PATH
