
AFRAME.registerComponent('begin', {
    init: function() {
        let el = this.el;
        this.beginExperience = function() {

            //Add background
            var newBG = document.createElement('a-sky');
            newBG.setAttribute('src','../src/img/space.jpg');
            newBG.setAttribute('id','background');
            document.querySelector('a-scene').appendChild(newBG);

            //Add central asset
            var newEl = document.createElement('a-box');
            newEl.setAttribute('position',{x:0,y:1,z:-10});
            newEl.setAttribute('rotation','0 0 0');
            newEl.setAttribute('animation','property: rotation; to: 360 360 0; loop: true; dur: 7500; easing: linear');
            document.querySelector('a-scene').appendChild(newEl);

            //Remove button
            var buttonEl = document.querySelector('a-entity');
            buttonEl.parentNode.removeChild(buttonEl);

        }
        this.el.addEventListener('click',this.beginExperience);
    },
    remove: function() {
        this.el.removeEventListener('click',this.beginExperience);
    }
}) 