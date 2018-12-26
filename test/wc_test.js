const assert = require('assert');
const { wc } = require('../src/libs/wc');

const createFileSystem = function(files) {
  return {
    readFileSync: function(filename, encoding) {
      return files[filename];
    }
  };
};

describe('wc', function() {
  it('should return line,  word and character count with filename for single file', function() {
    const files = { file: 'some file' };
    const fs = createFileSystem(files);

    const actual = wc('file', fs);
    const expected = '\t0\t2\t9 file';

    assert.equal(actual, expected);
  });

  it('should return line, word and character count as 0 for single empty file', function() {
    const files = { emptyFile: '' };
    const fs = createFileSystem(files);

    const actual = wc('emptyFile', fs);
    const expected = '\t0\t0\t0 emptyFile';

    assert.equal(actual, expected);
  });
});
