const assert = require('assert');
const { isNotEmpty } = require('../src/utils/string');

describe('isNotEmpty', function() {
  it('should return false for empty string', function() {
    assert.equal(isNotEmpty(''), false);
  });

  it('should return true for non-empty string', function() {
    assert.equal(isNotEmpty('non'), true);
  });
});
