const assert = require('assert');
const { wc } = require('../src/libs/wc');

const createFileSystem = function(files, actualEncoding) {
  return {
    readFileSync: function(filename, expectedEncoding) {
      if (actualEncoding == expectedEncoding) {
        return files[filename];
      }
    }
  };
};

describe('wc', function() {
  const files = { file: 'some file', emptyFile: '' };
  const fs = createFileSystem(files, 'utf-8');

  it('should return line,  word and character count with filename for single file', function() {
    const actual = wc('file', fs);
    const expected = '\t0\t2\t9 file';

    assert.equal(actual, expected);
  });

  it('should return line, word and character count as 0 for single empty file', function() {
    const actual = wc('emptyFile', fs);
    const expected = '\t0\t0\t0 emptyFile';

    assert.equal(actual, expected);
  });
});
