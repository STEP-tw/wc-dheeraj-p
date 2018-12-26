const assert = require('assert');
const { getFormatter } = require('../src/io/formatter');

describe('getFormatter', function() {
  it('should return default formatter for no option specified', function() {
    const defaultFormatter = getFormatter([
      'lineCount',
      'wordCount',
      'charCount'
    ]);
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

  it('should return single option formatter formatter for line option', function() {
    const singleOptionFormatter = getFormatter(['lineCount']);
    const dataToFormat = {
      filename: 'file',
      lineCount: 4
    };
    const actual = singleOptionFormatter(dataToFormat);
    const expected = '\t4 file';

    assert.equal(actual, expected);
  });

  it('should return two options formatter for line and word option together', function() {
    const singleOptionFormatter = getFormatter(['lineCount', 'wordCount']);
    const dataToFormat = {
      filename: 'file',
      lineCount: 4,
      wordCount: 10
    };
    const actual = singleOptionFormatter(dataToFormat);
    const expected = '\t4\t10 file';

    assert.equal(actual, expected);
  });
});
