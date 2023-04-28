if ( location.protocol != "https:" ) {
  location.href = "https:" + window.location.href.substring( window.location.protocol.length );
}

AFRAME.registerComponent('custom-orientation-permission', {
  init: function () {
    var sceneEl = this.el.sceneEl;

    // Wait for the 'request-permission' button to be clicked.
    var button = document.getElementById('psycheBtn');
    button.addEventListener('click', function() {
      if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
          DeviceMotionEvent.requestPermission()
              .then( response => {
              if(response == "granted"){
                  var event = new CustomEvent('deviceorientationpermissiongranted');
                  sceneEl.dispatchEvent(event);
              }
  
          }).catch( console.error )
      } 
    });
    
    // Listen for the 'deviceorientationpermissiongranted' event and log a message when it is fired.
    sceneEl.addEventListener('deviceorientationpermissiongranted', function () {
      console.log('Device orientation permission granted!');
      window.location.href = "pages/launch.html";
    });
  }
});

// Add the 'custom-orientation-permission' component to the 'a-scene' element.
document.querySelector('a-scene').setAttribute('custom-orientation-permission', '');