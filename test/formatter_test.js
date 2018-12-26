const assert = require('assert');
const { format } = require('../src/output/formatter');

describe('format', function() {
  it('should return formatted output for given chars, lines, words count and filename', function() {
    const dataToFormat = {
      filename: 'file',
      lineCount: 4,
      wordCount: 9,
      charCount: 20
    };
    const actual = format(dataToFormat);
    const expected = '\t4\t9\t20 file';

    assert.equal(actual, expected);
  });
});
