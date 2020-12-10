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
// count total of links and unique links
const stats = (arr) => {
  const arlinks = arr.reduce((acum, el) => acum.concat(el.href), []);
  const unique = arlinks.reduce((acum, el, i) => (arlinks.indexOf(el) === i ? acum + 1 : acum), 0);
  const total = arlinks.length;
  return { total, unique };
};
// count total of links broken
const statsValidate = (arr) => {
  const arrStats = arr.reduce((acum, el) => acum.concat(el.status), []);
  const broken = arrStats.reduce((acum, el) => ((el >= 400) ? acum + 1 : acum), 0);
  return { broken };
};
module.exports = {
  extractOptions, stats, statsValidate,
};
