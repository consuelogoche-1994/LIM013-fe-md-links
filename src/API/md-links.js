const md = require('./options.js');

// *******************Extract and validate links from markdown files********************
const mdLinks = (path, opts = { validate: false }) => new Promise((resolve, reject) => {
  const pathValid = md.validatePath(path);
  if (pathValid) {
    if (opts.validate === false) { resolve(md.getMdlinks(pathValid)); }
    if (opts.validate === true) { resolve(md.mdlinksValidate(pathValid)); }
  }
  let err = '';
  if (pathValid === false) { err = 'The path entered is not found'; reject(err); }
  err = 'The second argument only allows an object with true or false property value';
  reject(err);
});
// ************************************ Export module **********************************
module.exports = { mdLinks };

// mdLinks('D:\\BootCamp-Laboratoria\\LIM013-fe-md-links\\test\\prueba', { validate: true })
//   .then((err) => { console.log(err); })
//   .catch((error) => { console.log(error); });
