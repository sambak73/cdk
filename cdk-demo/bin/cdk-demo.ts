#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
//import { CdkDemoStack } from '../lib/cdk-demo-stack';
import { S3BucketStack } from '../lib/s3-bucket-stack';

const app = new cdk.App();
//new CdkDemoStack(app, 'CdkDemoStack', {
const s3_bucket_stack = new S3BucketStack(app, 's3BucketStack');

const bucket = s3_bucket_stack.bucket;
