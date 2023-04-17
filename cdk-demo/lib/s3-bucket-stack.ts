import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import { Construct } from 'constructs';
import { RemovalPolicy } from 'aws-cdk-lib';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class S3BucketStack extends cdk.Stack {
  public readonly bucket: s3.Bucket;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.bucket = new s3.Bucket(this, "demobucket", {
      versioned: false,
      bucketName: "cdk-demo",
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkDemoQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}