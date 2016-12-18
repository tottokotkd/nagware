# version 0.1

FROM node:7.2.1-alpine

ENV NAGWARE_WORKDIR /root
WORKDIR $NAGWARE_WORKDIR
RUN apk update \
    && apk add --no-cache curl git openssh python \
    && curl https://bootstrap.pypa.io/get-pip.py -o pip.py \
    && python pip.py \
    && pip install awscli \
    && rm pip.py

ENV NAGWARE_REPO_PATH /root/nagware
WORKDIR ${NAGWARE_REPO_PATH}/..
RUN git clone https://github.com/tottokotkd/nagware.git

ENV GIT_BRANCH feature/test_docker
WORKDIR $NAGWARE_REPO_PATH
RUN git fetch && git checkout -b $GIT_BRANCH remotes/origin/$GIT_BRANCH

ENV NAGWARE_NPM_PROJECT_PATH /root/nagware/app
WORKDIR $NAGWARE_NPM_PROJECT_PATH
RUN npm install

ENV S3_PATH nagware-dev
COPY build.sh $NAGWARE_WORKDIR

CMD ${NAGWARE_WORKDIR}/build.sh
