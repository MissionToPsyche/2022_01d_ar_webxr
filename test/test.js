const sourceAR = require('./../src/sourceAR.js');

const THREE = require('./../js/three.js');
const assert = require('assert');


describe('The THREE object', function() {
    it('should have a defined BasicShadowMap constant', function() {
      assert.notEqual('undefined', THREE.BasicShadowMap);
    }),
  
    it('should be able to construct a Vector3 with default of x=0', function() {
      const vec3 = new THREE.Vector3();
      assert.equal(0, vec3.x);
    })
  })

  describe('Setup XR', () => {
    it('should return true if XR setup is success', () => {
      assert.equal(sourceAR.initialize(), true);
    });
   })