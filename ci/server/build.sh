#!/bin/sh

NAGWARE_REPO_PATH=/root/nagware
NAGWARE_LAMBDA_PROJECT_PATH=/root/nagware/server

case $1 in
    "production")
        echo "mode: production"
        GIT_BRANCH=master
        ;;
    *)
        echo "mode: development"
        GIT_BRANCH=develop
        ;;
esac

cd $NAGWARE_WORKDIR                                         \
&& git clone https://github.com/tottokotkd/nagware.git      \
&& cd $NAGWARE_REPO_PATH                                    \
&& git fetch                                                \
&& git checkout -b $GIT_BRANCH remotes/origin/$GIT_BRANCH   \
&& cd NAGWARE_LAMBDA_PROJECT_PATH                           \
&& npm install                                              \
&& node_modules/.bin/gulp build                             \
&& aws s3 sync ./build s3://$S3_PATH
