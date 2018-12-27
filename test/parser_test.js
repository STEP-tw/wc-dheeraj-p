const assert = require('assert');
const { parse } = require('../src/io/parser');

describe('parse', function() {
  it('should parse arguments with only single file', function() {
    const args = ['file'];
    const actual = parse(args);
    const expected = {
      filenames: ['file'],
      options: ['lineCount', 'wordCount', 'charCount']
    };

    assert.deepEqual(actual, expected);
  });

  it('should parse arguments with only single file and single option', function() {
    const args = ['-l', 'file'];
    const actual = parse(args);
    const expected = { filenames: ['file'], options: ['lineCount'] };

    assert.deepEqual(actual, expected);
  });

  it('should parse arguments with only single file and two options together', function() {
    const args = ['-lw', 'file'];
    const actual = parse(args);
    const expected = { filenames: ['file'], options: ['lineCount', 'wordCount'] };

    assert.deepEqual(actual, expected);
  });

  it('should parse arguments with only single file and three options together', function() {
    const args = ['-lwc', 'file'];
    const actual = parse(args);
    const expected = {
      filenames: ['file'],
      options: ['lineCount', 'wordCount', 'charCount']
    };

    assert.deepEqual(actual, expected);
  });

  it('should parse arguments with only single file and two option separated with space', function() {
    const args = ['-l', '-w', 'file'];
    const actual = parse(args);
    const expected = {
      filenames: ['file'],
      options: ['lineCount', 'wordCount']
    };

    assert.deepEqual(actual, expected);
  });

  it('should parse arguments with only single file and three options separated with space', function() {
    const args = ['-l', '-w', '-c', 'file'];
    const actual = parse(args);
    const expected = {
      filenames: ['file'],
      options: ['lineCount', 'wordCount', 'charCount']
    };

    assert.deepEqual(actual, expected);
  });

  it('should parse arguments with multiple files and no option specified', function() {
    const args = ['file', 'file2', 'file3'];
    const actual = parse(args);
    const expected = {
      filenames: ['file', 'file2', 'file3'],
      options: ['lineCount', 'wordCount', 'charCount']
    };

    assert.deepEqual(actual, expected);
  });
});
