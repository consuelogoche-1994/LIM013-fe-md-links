const md = require('./app.js');

// *******************Extract and validate links from markdown files********************
const mdLinks = (path, opts = { validate: false }) => new Promise((resolve, reject) => {
  const pathValid = md.validatePath(path);
  if (pathValid) {
    if (opts.validate === true) { resolve(md.mdlinksValidate(pathValid)); }
    if (opts.validate === false) { resolve(md.getMdlinks(pathValid)); }
  }
  let err = '';
  if (pathValid === false) { err = 'The path entered is not found'; reject(err); }
  if (opts.validate !== true || opts.validate !== false) {
    err = 'The second argument only allows an object with true or false property value';
    reject(err);
  }
});
// ************************************ Export module **********************************
module.exports = { mdLinks };
mdLinks('D:/md-raiz', { validate: true })
  .then((err) => { console.log(err); })
  .catch((error) => { console.log(error); });
