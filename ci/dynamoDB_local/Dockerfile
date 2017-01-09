# nagware-dynamodb
# version tag: 0.1

FROM java:8-jre-alpine

WORKDIR /root
RUN apk --update add --no-cache curl unzip \
    && cd /root \
    && curl -L -O  http://dynamodb-local.s3-website-us-west-2.amazonaws.com/dynamodb_local_latest.zip \
    && unzip dynamodb_local_latest.zip\
    && rm dynamodb_local_latest.zip \
    && apk del curl unzip \
    && rm -rf /var/cache/apk/*

ENTRYPOINT ["/usr/bin/java", "-Djava.library.path=./DynamoDBLocal_lib", "-jar", "DynamoDBLocal.jar"]
