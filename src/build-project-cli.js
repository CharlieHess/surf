import './babel-maybefill';

import _ from 'lodash';
import crypto from 'crypto';
import path from 'path';
import pify from 'pify';
import {Repository, FetchOptions, Clone, CloneOptions} from 'nodegit';

const [rimraf, mkdirp] = _.map(['rimraf', 'mkdirp'], (x) => pify(require(x)));

const d = require('debug')('serf:serf-build');
const argv = require('yargs').argv;

async function main() {
  // Checkout a bare repo to $SECRET_DIR if necessary
  // Clone a new copy to a work dir
  // Find a builder, run that shit
  // Copy artifacts to $ARTIFACTS_DIR
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(`Fatal Error: ${e.message}`);
    d(e.stack);
    process.exit(-1);
  });
