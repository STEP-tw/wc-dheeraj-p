const assert = require('assert');
const { format } = require('../src/io/formatter');

describe('format', function() {
  it('should format counts for default options and three options', function() {
    const defaultOptions = ['lineCount', 'wordCount', 'charCount'];
    const dataToFormat = {
      filename: 'file',
      lineCount: 4,
      wordCount: 9,
      charCount: 20
    };
    const actual = format(dataToFormat, defaultOptions);
    const expected = '\t4\t9\t20 file';

    assert.equal(actual, expected);
  });

  it('should format one count for only one specified options', function() {
    const singleOption = ['lineCount'];
    const dataToFormat = {
      filename: 'file',
      lineCount: 4
    };
    const actual = format(dataToFormat, singleOption);
    const expected = '\t4 file';

    assert.equal(actual, expected);
  });

  it('should format two counts for two options specified', function() {
    const twoOptions = ['lineCount', 'wordCount'];
    const dataToFormat = {
      filename: 'file',
      lineCount: 4,
      wordCount: 10
    };
    const actual = format(dataToFormat, twoOptions);
    const expected = '\t4\t10 file';

    assert.equal(actual, expected);
  });

  it('should maintain the specific order of count for given two options together', function() {
    const twoOptions = ['wordCount', 'lineCount'];
    const dataToFormat = {
      filename: 'file',
      lineCount: 4,
      wordCount: 10
    };
    const actual = format(dataToFormat, twoOptions);
    const expected = '\t4\t10 file';

    assert.equal(actual, expected);
  });

  it('should maintain the specific order of count for given three options together', function() {
    const twoOptions = ['wordCount', 'charCount', 'lineCount'];
    const dataToFormat = {
      filename: 'file',
      lineCount: 4,
      wordCount: 10,
      charCount: 20
    };
    const actual = format(dataToFormat, twoOptions);
    const expected = '\t4\t10\t20 file';

    assert.equal(actual, expected);
  });
});
