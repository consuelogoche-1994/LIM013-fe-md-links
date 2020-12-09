const md = require('../src/API/utils.js');

const arraylinkValid = [{
  text: 'npm',
  href: 'https://www.npmjs.com/',
  file: 'D:\\BootCamp-Laboratoria\\LIM013-fe-md-links\\test\\prueba\\README.md',
}];
const arraylinkInValid = [{
  text: 'npm',
  href: 'https://ww.ns.com/',
  file: 'D:\\BootCamp-Laboratoria\\LIM013-fe-md-links\\test\\prueba\\README.md',
}];

describe('normalize to path', () => {
  it('is a function', () => {
    expect(typeof md.normalizePath).toBe('function');
  });
  it('return "prueba/md-prueba"', () => {
    expect(md.normalizePath('prueba\\md-prueba')).toBe('prueba\\md-prueba');
  });
});

describe('Solve to path absolute', () => {
  it('is a function', () => {
    expect(typeof md.solveToAbsolute).toBe('function');
  });
  it('return "D:/md-raiz/prueba"', () => {
    expect(md.solveToAbsolute('D:/md-raiz/prueba')).toBe('D:/md-raiz/prueba');
  });
  it('return "D:/md-raiz/prueba"', () => {
    const pathresult = 'D:\\BootCamp-Laboratoria\\LIM013-fe-md-links\\test\\prueba\\README.md';
    expect(md.solveToAbsolute('test/prueba/README.md')).toBe(pathresult);
  });
});

describe('Check if its a file', () => {
  it('is a function', () => {
    expect(typeof md.isFile).toBe('function');
  });
  it('return "true" ', () => {
    expect(md.isFile(md.solveToAbsolute('README.md'))).toBe(true);
  });
});
describe('Check if extension is .md', () => {
  it('is a function', () => {
    expect(typeof md.isMdFile).toBe('function');
  });
  it('return "true" ', () => {
    expect(md.isMdFile(md.solveToAbsolute('README.md'))).toBe(true);
  });
});

describe('Check if its a directory', () => {
  it('is a function', () => {
    expect(typeof md.isDirectory).toBe('function');
  });
  it('return "true" ', () => {
    expect(md.isDirectory(md.solveToAbsolute('test/prueba/'))).toBe(true);
  });
  it('return "false" ', () => {
    expect(md.isDirectory(md.solveToAbsolute('README.md'))).toBe(false);
  });
});

describe('check if path exists', () => {
  it('is a function', () => {
    expect(typeof md.pathExists).toBe('function');
  });
  it('return "true" ', () => {
    expect(md.pathExists(md.solveToAbsolute('test/prueba/'))).toBe(true);
  });
});

describe('Extract directory content', () => {
  it('is a function', () => {
    expect(typeof md.readDir).toBe('function');
  });
  it('return "README.md" ', () => {
    expect(md.readDir(md.solveToAbsolute('test/prueba/'))).toHaveLength(2);
  });
});

describe('Transform .md file to html with manageable DOM', () => {
  it('is a function', () => {
    expect(typeof md.transformToHtml).toBe('function');
  });
  it('return "https://www.npmjs.com/" ', () => {
    const dom = md.transformToHtml(md.solveToAbsolute('test/prueba/README.md'));
    const textcontent = dom.window.document.querySelector('a').getAttribute('href');
    expect(textcontent).toBe('https://www.npmjs.com/');
  });
});

describe('Extract and save links from .md file in an array', () => {
  it('is a function', () => {
    expect(typeof md.getLinks).toBe('function');
  });
  it('return obj.href https://www.npmjs.com/ ', () => {
    const path = md.solveToAbsolute('test/prueba/README.md');
    const htmlfile = md.transformToHtml(path);
    const elementDom = htmlfile.window.document.querySelectorAll('a');
    expect(md.getLinks(elementDom, path)[0].href).toEqual('https://www.npmjs.com/');
  });
});

describe('validar links de array', () => {
  it('is a function', () => {
    expect(typeof md.validateLinks).toBe('function');
  });
  it('return status "Internal Server Error"', (done) => {
    md.validateLinks(arraylinkInValid)
      .then((element) => {
        expect(element[0].message).toBe('Internal Server Error');
        done();
      });
  });
  it('return status 200', (done) => {
    md.validateLinks(arraylinkValid)
      .then((element) => {
        expect(element[0].status).toEqual(200);
        done();
      });
  });
});
