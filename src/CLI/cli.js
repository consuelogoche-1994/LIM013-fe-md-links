#!/usr/bin/env node

const md = require('../API/md-links.js');
const utils = require('./utilsCLI.js');

const path = process.argv[2];
const arrOpts = process.argv.slice(3, 5);

const opts = utils.extractOptions(arrOpts);
switch (opts) {
  case 'noOpts':
    md.mdLinks(path)
      .then((arr) => utils.joinResult(arr));
    break;
  case 'validate':
    md.mdLinks(path, { validate: true })
      .then((arr) => utils.joinResult(arr));
    break;
  case 'stats':
    md.mdLinks(path, { validate: true })
      .then((arr) => utils.stats(arr));
    break;
  case 'validateAndStats':
    md.mdLinks(path, { validate: true })
      .then((arr) => utils.stastValidate(arr));
    break;
  default:
    console.log('A valid option was not entered');
    break;
}
