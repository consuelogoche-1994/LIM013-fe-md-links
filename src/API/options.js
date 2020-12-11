const md = require('./utils.js');

// Validate Path
const validatePath = (path) => {
  const pathNormalize = md.normalizePath(path);
  const existingpath = md.pathExists(pathNormalize) ? md.solveToAbsolute(pathNormalize) : false;
  return existingpath;
};
// Extract and save links from all .md files to an array (RECURSIVE)
const getMdlinks = (path) => {
  let arrayResult = [];
  if (md.isFile(path) && md.isMdFile(path)) {
    const nodelistLinks = md.transformToHtml(path).window.document.querySelectorAll('a');
    return md.getLinks(nodelistLinks, path);
  }
  if (md.isDirectory(path)) {
    md.readDir(path).forEach((element) => {
      const mdfile = getMdlinks(`${path}/${element}`);
      arrayResult = arrayResult.concat(mdfile);
    });
  }
  return arrayResult;
};
// Validate the links of all markdown files
const mdlinksValidate = (path) => {
  const arrayLinks = getMdlinks(path);
  return md.validateLinks(arrayLinks);
};
module.exports = { validatePath, getMdlinks, mdlinksValidate };
