const path = require('path');

// verificar si path es absoluto
const isAbsolute = (route) => path.isAbsolute(route);
// resolver a ruta absoluta
const transformRelative = (route) => path.resolve(route);
// verificar si extensión es .md
const isMdFile = (route) => (path.extname(route) === '.md');

module.exports = {
  isAbsolute,
  isMdFile,
  transformRelative,
};
