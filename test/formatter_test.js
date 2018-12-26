const assert = require('assert');
const { format, getFormatter } = require('../src/io/formatter');

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

describe('getFormatter', function() {
  it('should return default formatter for no option specified', function() {
    const defaultFormatter = getFormatter('');
    const dataToFormat = {
      filename: 'file',
      lineCount: 4,
      wordCount: 9,
      charCount: 20
    };
    const actual = defaultFormatter(dataToFormat);
    const expected = '\t4\t9\t20 file';

    assert.equal(actual, expected);
  });

  it('should return line count formatter for line option', function() {
    const singleOptionFormatter = getFormatter('lineCount');
    const dataToFormat = {
      filename: 'file',
      lineCount: 4
    };
    const actual = singleOptionFormatter(dataToFormat);
    const expected = '\t4 file';

    assert.equal(actual, expected);
  });
});
