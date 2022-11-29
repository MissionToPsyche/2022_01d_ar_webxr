AFRAME.registerComponent('manager', {
    init: function() {
       // grab the boxes
       let first = document.querySelector("#impact")
       let second = document.querySelector("#explosion")
  
       // play the first sound
       first.components.sound.playSound();
  
       // wait for it to end
       first.addEventListener("sound-ended", function() {
         // play the second one     
         second.components.sound.playSound();
       })
    }
  });