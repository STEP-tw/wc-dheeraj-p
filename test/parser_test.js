const assert = require('assert');
const { parse } = require('../src/io/parser');

describe('parse', function() {
  it('should parse arguments with only single file', function() {
    const args = ['file'];
    const actual = parse(args);
    const expected = { filename: 'file', option: '' };

    assert.deepEqual(actual, expected);
  });

  it('should parse arguments with only single file and single option', function() {
    const args = ['-l', 'file'];
    const actual = parse(args);
    const expected = { filename: 'file', option: 'line' };

    assert.deepEqual(actual, expected);
  });
});
