/*
Copyright 2018 VMware, Inc.
SPDX-License-Identifier: MIT
*/

const SQSsample = () => ({
  Records: [{
    messageId: '059f36b4-87a3-44ab-83d2-661975830a7d',
    receiptHandle: 'AQEBwJnKyrHigUMZj6rYigCgxlaS3SLy0a...',
    body: 'This is first message',
    attributes: {
      ApproximateReceiveCount: '1',
      SentTimestamp: '1545082649183',
      SenderId: 'AIDAIENQZJOLO23YVJ4VO',
      ApproximateFirstReceiveTimestamp: '1545082649185'
    },
    messageAttributes: {},
    md5OfBody: '098f6bcd4621d373cade4e832627b4f6',
    eventSource: 'aws:sqs',
    eventSourceARN: 'arn:aws:sqs:us-east-2:123456789012:my-queue',
    awsRegion: 'us-east-2'
  },
  {
    messageId: '2e1424d4-f796-459a-8184-9c92662be6da',
    receiptHandle: 'AQEBzWwaftRI0KuVm4tP+/7q1rGgNqicHq...',
    body: 'This is second message',
    attributes: {
      ApproximateReceiveCount: '1',
      SentTimestamp: '1545082650636',
      SenderId: 'AIDAIENQZJOLO23YVJ4VO',
      ApproximateFirstReceiveTimestamp: '1545082650649'
    },
    messageAttributes: {},
    md5OfBody: '098f6bcd4621d373cade4e832627b4f6',
    eventSource: 'aws:sqs',
    eventSourceARN: 'arn:aws:sqs:us-east-2:123456789012:my-queue',
    awsRegion: 'us-east-2'
  },
  ]
});

module.exports = {
  SQSsample,
};
