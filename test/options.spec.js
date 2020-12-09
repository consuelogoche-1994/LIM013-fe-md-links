const md = require('../src/API/options.js');

describe('the path is validated and verifies if it exists', () => {
  it('is a function', () => {
    expect(typeof md.validatePath).toBe('function');
  });
  it('return Path Absolute', () => {
    const pathabsolute = 'D:\\BootCamp-Laboratoria\\LIM013-fe-md-links\\README.md';
    expect(md.validatePath('README.md')).toBe(pathabsolute);
  });
  it('return False', () => {
    expect(md.validatePath('READMEFALSE.md')).toBe(false);
  });
});

describe('Extract and save links from all .md (RECURSIVE)', () => {
  it('is a function', () => {
    expect(typeof md.getMdlinks).toBe('function');
  });
  it('return array 13 elements', () => {
    expect(md.getMdlinks('test/')).toHaveLength(13);
  });
});

describe('Extract and save links from all .md (RECURSIVE)', () => {
  it('is a function', () => {
    expect(typeof md.mdlinksValidate).toBe('function');
  });
  it('return status element [0] = 200', (done) => {
    md.mdlinksValidate('test/prueba')
      .then((arr) => {
        expect(arr[0].status).toBe(200);
        done();
      });
  });
});
