const md = require('../src/md-links.js');

describe('TEST API MD-LINKS', () => {
  it('is a function', () => {
    expect(typeof md.mdLinks).toBe('function');
  });
  it('return "learnyounode" ', (done) => {
    md.mdLinks('test/prueba')
      .then((element) => {
        expect(element[0].text).toBe('learnyounode');
        done();
      });
  });
  it('return "learnyounode" ', (done) => {
    md.mdLinks('test/prueba', { validate: true })
      .then((element) => {
        expect(element[0].message).toBe('OK');
        done();
      });
  });
  it('return "The path entered is not found" ', (done) => {
    md.mdLinks('test/pruebafalse')
      .catch((err) => {
        expect(err).toBe('The path entered is not found');
        done();
      });
  });
  it('return "The second argument only allows an object with true or false property value" ',
    (done) => {
      md.mdLinks('test/prueba', { validate: 'error' })
        .catch((err) => {
          const message = 'The second argument only allows an object with true or false property value';
          expect(err).toBe(message);
          done();
        });
    });
});
