const chalk = require('chalk');
const utils = require('./utilsCLI.js');

// Join result and give color to display in console
const joinResult = (arrResult) => {
  arrResult.forEach((obj) => {
    const file = chalk.hex('#045280')(obj.file);
    const href = chalk.hex('#ADB70C')(obj.href);
    const text = chalk.hex('#0099A1')(obj.text.substr(0, 50));
    if (obj.status) {
      const message = (obj.status >= 400) ? 'fail' : 'ok';
      const color = (message === 'ok') ? chalk.bgGreen : chalk.bgRed;
      const status = chalk.hex('#C71AB7')(obj.status);
      return console.log(`${file} ${href} ${color(message)} ${status} ${text}`);
    }
    return console.log(`${file} ${href} ${text}`);
  });
};
// Show statistics in console with color according to the options
const showstats = (arr) => {
  const total = `${chalk.bgBlue(`Total: ${utils.stats(arr).total}`)}`;
  const unique = `${chalk.bgGreen(`Unique: ${utils.stats(arr).unique}`)}`;
  if (arr[0].status) {
    const broken = `${chalk.bgRed(`Broken: ${utils.statsValidate(arr).broken}`)}`;
    return console.log(`${total}\n${unique}\n${broken}`);
  }
  return console.log(`${total}\n${unique}`);
};

module.exports = {
  joinResult, showstats,
};
