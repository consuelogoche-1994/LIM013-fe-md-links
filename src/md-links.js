const md = require('./index.js');

console.log(`isAbsolute ${md.isAbsolute('D:/BootCamp-Laboratoria/LIM013-fe-md-links/README.md')}`);
console.log(`es un file ${md.isFile('C:/Users/Estudiante/Desktop/mdlink.docx')}`);
console.log(`path es un directorio ${md.isDirectory('C:/Users/Estudiante/Desktop/mdlink.docx')}`);
// console.log(md.isDirectory('C:/Users/Estudiante/Desktop'));
// console.log(`path existe ${md.routeExists('D:/BootCamp-Laboratoria/LIM013-fe-md-links/')}`);
// console.log(`path es un file ${md.isMdFile('D:/LIM013-fe-md-links/README.md')}`);
// console.log(md.readDir('D:/BootCamp-Laboratoria/LIM013-fe-md-links/'));
// // console.log(md.readFile('D:/BootCamp-Laboratoria/LIM013-fe-md-links/README.md'));
// // md.LinksValidate('https://www.npmjs.com/package/node-fetch')
// //   .then((res) => { console.log(res); })
// //   .catch((err) => { console.log(err); });
// console.log(`transformar en absoluto ${md.transformRelative('README.md')}`);
const file = 'D:/BootCamp-Laboratoria/LIM013-fe-md-links/README.md';
const dom = md.transformHtml(md.readFile(file));
const link = md.transformDOM(dom).window.document.querySelectorAll('a');
// console.log(md.getLinks(link, file));
const arraylinks = md.getLinks(link, file);

md.validateLinks(arraylinks)
  .then((val) => console.log(val));
