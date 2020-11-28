const path = require('path');
const fs = require('fs');
const marked = require('marked');

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
};
