const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

// verificar si path es absoluto
const isAbsolute = (route) => path.isAbsolute(route);
// resolver a ruta absoluta
const transformRelative = (route) => path.resolve(route);
// verificar si extensión es .md
const isMdFile = (route) => (path.extname(route) === '.md');
// verificar si es file
const isFile = (route) => fs.lstatSync(route).isFile();
// verificar si es directorio
const isDirectory = (route) => fs.statSync(route).isDirectory();
// verificar si directorio o documento existe
const routeExists = (route) => fs.existsSync(route);
// extraer el array todos lo contenido en primer nivel
const readDir = (route) => fs.readdirSync(route);
// extraer el array todos lo contenido en primer nivel
const readFile = (route) => fs.readFileSync(route, 'utf8');
// convertir .md a html
const transformHtml = (file) => marked(file);
// convertir a DOM
const transformDOM = (fileHtml) => new JSDOM(fileHtml);
// extraer links de dom (nodelist)
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
    .catch(() => ({ status: '500', message: 'Internal Server Error', ...obj })));
  return Promise.all(arr);
};

module.exports = {
  isAbsolute,
  isFile,
  isDirectory,
  routeExists,
  isMdFile,
  readDir,
  readFile,
  transformRelative,
  transformHtml,
  transformDOM,
  getLinks,
  validateLinks,
};
