// if ( location.protocol != "https:" ) {
//     location.href = "https:" + window.location.href.substring( window.location.protocol.length );
// }

// function permission(sceneEl){
//     if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
//         DeviceMotionEvent.requestPermission()
//             .then( response => {
//             // (optional) Do something after API prompt dismissed.
//             // if ( response == "granted" ) {
//             //     window.addEventListener( "devicemotion", (e) => {
//             //         // do something for 'e' here.
//             //     })
//             //     alert("Device Motion Granted");
//             //     window.location.href = "pages/launch.html";
//             // }
//             if(response == "granted"){
//                 // document.querySelector('a-scene').emit('deviceorientationpermissiongranted');
//                 var event = new CustomEvent('deviceorientationpermissiongranted');
//                 sceneEl.dispatchEvent(event);
//             }

//         }).catch( console.error )
//         // (optional) Do something before API request prompt.
//     } 
// }

// AFRAME.registerComponent('custom-orientation-permission', {
//     init: function () {
//       var sceneEl = this.el.sceneEl;

//     //   if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
//     //       DeviceMotionEvent.requestPermission()
//     //           .then( response => {
//     //           if(response == "granted"){
//     //               var event = new CustomEvent('deviceorientationpermissiongranted');
//     //               sceneEl.dispatchEvent(event);
//     //           }
  
//     //       }).catch( console.error )
//     //   } 
//     //   // Wait for the 'request-permission' button to be clicked.
//     //   var button = document.getElementById('startMission');
//     //   button.addEventListener('click', function() {
//     //   });
      
//       // Listen for the 'deviceorientationpermissiongranted' event and log a message when it is fired.
//       sceneEl.addEventListener('deviceorientationpermissiongranted', function () {
//         console.log('Device orientation permission granted!');
//         window.location.href = "pages/welcome.html";
//       });
//     }
//   });
  
//   // Add the 'custom-orientation-permission' component to the 'a-scene' element.
//   document.querySelector('a-scene').setAttribute('custom-orientation-permission', '');