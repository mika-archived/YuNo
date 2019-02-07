#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { YuNoStack } from '../lib/yuno-stack';

const app = new cdk.App();
new YuNoStack(app, 'YuNoStack');
app.run();
