const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

// Solve to path absolute
const solveToAbsolute = (route) => (path.isAbsolute(route) ? route : path.resolve(route));
// Check if it's a file
const isFile = (route) => fs.lstatSync(route).isFile();
// Check if extension is .md
const isMdFile = (route) => (path.extname(route) === '.md');
// Check if it's a directory
const isDirectory = (route) => fs.statSync(route).isDirectory();
// check if path exists
const pathExists = (route) => fs.existsSync(route);
// Extract directory content
const readDir = (route) => fs.readdirSync(route);
// Transform .md file to html with manageable DOM
const transformToHtml = (fileMd) => {
  const htmlFile = marked(fs.readFileSync(fileMd, 'utf8'));
  const dom = new JSDOM(htmlFile);
  return dom;
};
// Extract and save links from .md file in an array
const getLinks = (nodelist, file) => {
  const arrLikns = Array.from(nodelist).map((element) => {
    const obj = {};
    if (element.getAttribute('href').indexOf('http') === 0) {
      obj.text = element.textContent;
      obj.href = element.getAttribute('href');
      obj.file = file;
    }
    return obj;
  });
  return arrLikns.filter((element) => element.text !== undefined);
};
// validar links de array
const validateLinks = (arrLikns) => {
  const arr = arrLikns.map((obj) => fetch(obj.href)
    .then((url) => ({ status: url.status, message: url.statusText, ...obj }))
    .catch(() => ({ status: 500, message: 'Internal Server Error', ...obj })));
  return Promise.all(arr);
};

module.exports = {
  solveToAbsolute,
  isFile,
  isMdFile,
  isDirectory,
  pathExists,
  readDir,
  transformToHtml,
  getLinks,
  validateLinks,
};
