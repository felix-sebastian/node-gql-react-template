"use strict";

const aws = require("aws-sdk");
const env = require("../env");
const s3 = new aws.S3();

module.exports = (request, responder) => {
  aws.config.update({
    accessKeyId: env.awsAccessKeyId,
    secretAccessKey: env.awsAccessKeySecret
  });

  let bucket = null;

  switch (request.type) {
    case "avatar":
      bucket = "ento-avatars";
      break;
    default:
      responder.send({ status: "Failed" });
      return;
  }

  const url = s3.getSignedUrl("getObject", {
    Bucket: bucket,
    Key: request.filename,
    Expires: 60 * 5
  });

  responder.send({
    status: "Success",
    url
  });
};
