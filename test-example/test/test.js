const assert = require('assert');
const threeShape = require('./three-shape-test-code.js');

describe('The THREE scene', function() {
  it('should contain a Mesh object', function() {
    assert.equal(threeShape.detectObject(), true);
  })
})

