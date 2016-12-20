#!/bin/sh

case $1 in
    "production")
        echo "mode: production"
        NAGWARE_REPO_PATH=/root/nagware
        GIT_BRANCH=master
        NAGWARE_NPM_PROJECT_PATH=/root/nagware/app
        S3_PATH=nagware-prod
        ;;
    *)
        echo "mode: development"
        NAGWARE_REPO_PATH=/root/nagware
        GIT_BRANCH=develop
        NAGWARE_NPM_PROJECT_PATH=/root/nagware/app
        S3_PATH=nagware-dev
        ;;
esac

cd $NAGWARE_WORKDIR                                         \
&& git clone https://github.com/tottokotkd/nagware.git      \
&& cd $NAGWARE_REPO_PATH                                    \
&& git fetch                                                \
&& git checkout -b $GIT_BRANCH remotes/origin/$GIT_BRANCH   \
&& cd $NAGWARE_NPM_PROJECT_PATH                             \
&& npm install                                              \
&& node_modules/.bin/gulp build                             \
&& aws s3 sync ./build s3://$S3_PATH
