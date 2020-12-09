const chalk = require('chalk');

// solve entered options
const extractOptions = (opts) => {
  const optsValidate = opts.includes('--validate') || opts.includes('--v') || opts.includes('--V');
  const optsStats = opts.includes('--stats') || opts.includes('--s') || opts.includes('--S');
  let result;
  if (opts.length === 0) { result = 'noOpts'; }
  if (opts.length === 1) {
    if (optsValidate) { result = 'validate'; }
    if (optsStats) { result = 'stats'; }
  }
  if (opts.length === 2 && optsValidate && optsStats) { result = 'validateAndStats'; }
  return result;
};
// Join array of results with or without validating
const joinResult = (arrResult) => {
  arrResult.forEach((obj) => {
    const file = chalk.hex('#045280')(obj.file);
    const href = chalk.hex('#ADB70C')(obj.href);
    const text = chalk.hex('#0099A1')(obj.text.substr(0, 50));
    if (obj.status) {
      const message = (obj.status >= 400) ? 'fail' : 'ok';
      const color = (message === 'ok') ? chalk.bgGreen : chalk.bgRed;
      const status = chalk.hex('#C71AB7')(obj.status);
      const messageColor = color(message);
      return console.log(`${file} ${href} ${messageColor} ${status} ${text}`);
    }
    return console.log(`${file} ${href} ${text}`);
  });
};
// count total of links and unique links
const stats = (arr) => {
  const arlinks = arr.reduce((acum, el) => acum.concat(el.href), []);
  const unique = arlinks.reduce((acum, el, i) => (arlinks.indexOf(el) === i ? acum + 1 : acum), 0);
  return console.log(`Total: ${arlinks.length}\nUnique: ${unique}`);
};
// hhhh
const stastValidate = (arr) => {
  const arrStats = arr.reduce((acum, el) => acum.concat(el.status), []);
  const broken = arrStats.reduce((acum, el) => ((el >= 400) ? acum + 1 : acum), 0);
  stats(arr);
  return console.log(chalk.redBright(`Broken: ${broken}`));
};
module.exports = {
  extractOptions, joinResult, stats, stastValidate,
};
