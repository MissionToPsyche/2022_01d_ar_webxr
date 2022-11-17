
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
            newEl.setAttribute('position',{x:0,y:0,z:-15});
            newEl.setAttribute('rotation','0 0 0');
            newEl.setAttribute('animation','property: rotation; to: 360 360 0; loop: true; dur: 7500; easing: linear');
            document.querySelector('a-scene').appendChild(newEl);

            //Add spacecraft
            var spacecraftEl = document.createElement('a-image');
            spacecraftEl.setAttribute('src','../src/img/spacecraft.png');
            spacecraftEl.setAttribute('position',{x:10, y:0, z:-15});
            spacecraftEl.setAttribute('animation','property: position; to: 1.5 0 -15; loop: false; dur: 10000; easing: linear');
            document.querySelector('a-scene').appendChild(spacecraftEl);

            //Add information planes and text after ship arrives
            var instructionElplane = document.createElement('a-plane');
            instructionElplane.setAttribute('position',{x:0, y:2.5, z:-15});
            instructionElplane.setAttribute('height','1');
            instructionElplane.setAttribute('width','2.5');
            instructionElplane.setAttribute('color','#ffffff');
            var instructionEltext = document.createElement('a-text');
            instructionEltext.setAttribute('value','Choose your adventure.');
            instructionEltext.setAttribute('position',{x:-1.15, y:2.5, z:-14.8});

            var factElplane = document.createElement('a-plane');
            factElplane.setAttribute('position',{x:-2.95, y:-3, z:-15});
            factElplane.setAttribute('height','1');
            factElplane.setAttribute('width','2');
            factElplane.setAttribute('color','#ffffff');
            var factEltext = document.createElement('a-text');
            factEltext.setAttribute('value','How heavy is it?');
            factEltext.setAttribute('position',{x:-3.75, y:-3, z:-14.8});

            var factElplane2 = document.createElement('a-plane');
            factElplane2.setAttribute('position',{x:0, y:-3, z:-15});
            factElplane2.setAttribute('height','1');
            factElplane2.setAttribute('width','2');
            factElplane2.setAttribute('color','#ffffff');
            var factEltext2 = document.createElement('a-text');
            factEltext2.setAttribute('value','Where is it at?');
            factEltext2.setAttribute('position',{x:-0.75, y:-3, z:-14.8});

            var factElplane3 = document.createElement('a-plane');
            factElplane3.setAttribute('position',{x:2.95, y:-3, z:-15});
            factElplane3.setAttribute('height','1');
            factElplane3.setAttribute('width','2');
            factElplane3.setAttribute('color','#ffffff');
            var factEltext3 = document.createElement('a-text');
            factEltext3.setAttribute('value','How big is it?');
            factEltext3.setAttribute('position',{x:2.25, y:-3, z:-14.8});

            setTimeout(() => {
                document.querySelector('a-scene').appendChild(instructionElplane);
                document.querySelector('a-scene').appendChild(instructionEltext);
                document.querySelector('a-scene').appendChild(factElplane);
                document.querySelector('a-scene').appendChild(factEltext);
                document.querySelector('a-scene').appendChild(factElplane2);
                document.querySelector('a-scene').appendChild(factEltext2);
                document.querySelector('a-scene').appendChild(factElplane3);
                document.querySelector('a-scene').appendChild(factEltext3);
            }, 11000);
        
            //Remove buttonand instructions
            var buttonEl = document.querySelector('a-entity');
            buttonEl.parentNode.removeChild(buttonEl);
            
            var instructionEl = document.querySelector('a-text');
            instructionEl.parentNode.removeChild(instructionEl);

        }
        this.el.addEventListener('click',this.beginExperience);
    },
    remove: function() {
        this.el.removeEventListener('click',this.beginExperience);
    }
}) 