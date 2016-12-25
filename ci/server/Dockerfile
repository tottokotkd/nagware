# nagware-server-deploy
# version tag: 0.1

FROM node:7.2.1-alpine

ENV NAGWARE_WORKDIR /root
WORKDIR $NAGWARE_WORKDIR
RUN apk --update add --no-cache curl git python \
    && curl https://bootstrap.pypa.io/get-pip.py -o pip.py \
    && python pip.py \
    && pip --no-cache-dir install awscli \
    && npm install -g serverless \
    && apk del curl \
    && rm pip.py \
    && rm -rf /var/cache/apk/*

COPY build.sh /

ENTRYPOINT ["/build.sh"]
CMD ["development"]
