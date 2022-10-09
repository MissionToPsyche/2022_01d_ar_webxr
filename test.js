
const assert = require('assert');
const threeLight = require('./src/main');

describe('THREE scene', function() {

    it('should contain light object', function() {
        assert.equal(threeLight.detectObject(), true);
  })
})

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});