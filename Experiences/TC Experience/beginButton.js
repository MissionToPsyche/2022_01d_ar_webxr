
AFRAME.registerComponent('begin', {
    init: function() {
        let el = this.el;
        this.beginExperience = function() {

            //Add backgrounds
            var newBG = document.createElement('a-sky');
            newBG.setAttribute('visible',"true");
            newBG.setAttribute('src','../../src/img/space.jpg');
            newBG.setAttribute('id','background');
            document.querySelector('a-scene').appendChild(newBG);

            var newBG2 = document.createElement('a-sky');
            newBG2.setAttribute('visible',"false");
            newBG2.setAttribute('src','../../src/img/blackbackground.jpg');
            newBG2.setAttribute('id','background2');
            document.querySelector('a-scene').appendChild(newBG2);

            //Add asteroid
            var asteroidEl = document.createElement('a-image');
            asteroidEl.setAttribute('src','../../src/img/psyche-asteroid.png');
            asteroidEl.setAttribute('height','3');
            asteroidEl.setAttribute('width','3');
            asteroidEl.setAttribute('position',{x:0,y:0,z:-15});
            asteroidEl.setAttribute('rotation','0 0 0');
            asteroidEl.setAttribute('id','main-asset');
            asteroidEl.setAttribute('animation','property: rotation; to: 0 0 360; loop: true; dur: 7500; easing: linear');
            document.querySelector('a-scene').appendChild(asteroidEl);

            //Add spacecraft
            var spacecraftEl = document.createElement('a-image');
            spacecraftEl.setAttribute('src','../../src/img/spacecraft.png');
            spacecraftEl.setAttribute('position',{x:10, y:0, z:-15});
            spacecraftEl.setAttribute('id','spacecraft');
            spacecraftEl.setAttribute('animation','property: position; to: 2.5 0 -15; loop: false; dur: 5000; easing: linear');
            document.querySelector('a-scene').appendChild(spacecraftEl);

            //Add information planes and text after ship arrives
            var instructionElplane = document.createElement('a-plane');
            instructionElplane.setAttribute('position',{x:0, y:2.5, z:-15});
            instructionElplane.setAttribute('height','1');
            instructionElplane.setAttribute('width','2.5');
            instructionElplane.setAttribute('color','#5b5b5b');
            instructionElplane.setAttribute('id','instruction-plane');
            var instructionEltext = document.createElement('a-text');
            instructionEltext.setAttribute('value','Choose your adventure.');
            instructionEltext.setAttribute('position',{x:-1.15, y:2.5, z:-14.8});
            instructionEltext.setAttribute('id','instruction-text');

            var factElplane = document.createElement('a-plane');
            factElplane.setAttribute('position',{x:-2.95, y:-3, z:-15});
            factElplane.setAttribute('height','1');
            factElplane.setAttribute('width','2');
            factElplane.setAttribute('color','#5b5b5b');
            factElplane.setAttribute('weight','');
            factElplane.setAttribute('id','fact-plane');
            var factEltext = document.createElement('a-text');
            factEltext.setAttribute('value','How heavy is it?');
            factEltext.setAttribute('position',{x:-3.75, y:-3, z:-14.8});
            factEltext.setAttribute('id','fact-text');

            var factElplane2 = document.createElement('a-plane');
            factElplane2.setAttribute('position',{x:0, y:-3, z:-15});
            factElplane2.setAttribute('height','1');
            factElplane2.setAttribute('width','2');
            factElplane2.setAttribute('color','#5b5b5b');
            factElplane2.setAttribute('location','');
            factElplane2.setAttribute('id','fact-plane2');
            var factEltext2 = document.createElement('a-text');
            factEltext2.setAttribute('value','What\'s its trajectory?');
            factEltext2.setAttribute('position',{x:-0.75, y:-3, z:-14.8});
            factEltext2.setAttribute('id','fact-text2');

            var factElplane3 = document.createElement('a-plane');
            factElplane3.setAttribute('position',{x:2.95, y:-3, z:-15});
            factElplane3.setAttribute('height','1');
            factElplane3.setAttribute('width','2');
            factElplane3.setAttribute('color','#5b5b5b');
            factElplane3.setAttribute('size','');
            factElplane3.setAttribute('id','fact-plane3');
            var factEltext3 = document.createElement('a-text');
            factEltext3.setAttribute('value','How big is it?');
            factEltext3.setAttribute('position',{x:2.25, y:-3, z:-14.8});
            factEltext3.setAttribute('id','fact-text3');

            //load planets invisibly
            var sun = document.createElement('a-gltf-model');
                sun.setAttribute('src', "#sun");
                sun.setAttribute('visible', "false");
                sun.setAttribute('id', "planet-sun");
                sun.setAttribute('position',{x:0,y:-35,z:-100});
                sun.setAttribute('scale',"30 30 30");
                document.querySelector('a-scene').appendChild(sun);
            var mercury = document.createElement('a-gltf-model');
                mercury.setAttribute('src', "#mercury");
                mercury.setAttribute('visible', "false");
                mercury.setAttribute('id', "planet-mercury");
                mercury.setAttribute('position',{x:0,y:-28,z:-100});
                mercury.setAttribute('animation','property: rotation; to: 0 360 0; loop: true; dur: 7500; easing: linear');
                mercury.setAttribute('scale',"5 5 5");
                document.querySelector('a-scene').appendChild(mercury);
            var venus = document.createElement('a-gltf-model');
                venus.setAttribute('src', "#venus");
                venus.setAttribute('visible', "false");
                venus.setAttribute('id', "planet-venus");
                venus.setAttribute('position',{x:0,y:-21,z:-100});
                venus.setAttribute('scale',"8 8 8");
                venus.setAttribute('animation','property: rotation; to: 0 360 0; loop: true; dur: 7500; easing: linear');
                document.querySelector('a-scene').appendChild(venus);
            var earth = document.createElement('a-gltf-model');
                earth.setAttribute('src', "#earth");
                earth.setAttribute('visible', "false");
                earth.setAttribute('id', "planet-earth");
                earth.setAttribute('position',{x:0,y:-14,z:-100});
                earth.setAttribute('scale',"10 10 10");
                earth.setAttribute('animation','property: rotation; to: 0 360 0; loop: true; dur: 7500; easing: linear');
                document.querySelector('a-scene').appendChild(earth);
            var mars = document.createElement('a-gltf-model');
                mars.setAttribute('src', "#mars");
                mars.setAttribute('visible', "false");
                mars.setAttribute('id', "planet-mars");
                mars.setAttribute('position',{x:0,y:-7,z:-100});
                mars.setAttribute('scale',"10 10 10");
                mars.setAttribute('animation','property: rotation; to: 0 360 0; loop: true; dur: 7500; easing: linear');
                document.querySelector('a-scene').appendChild(mars);
            var jupiter = document.createElement('a-gltf-model');
                jupiter.setAttribute('src', "#jupiter");
                jupiter.setAttribute('visible', "false");
                jupiter.setAttribute('id', "planet-jupiter");
                jupiter.setAttribute('position',{x:0,y:0,z:-100});
                jupiter.setAttribute('scale',"20 20 20");
                jupiter.setAttribute('animation','property: rotation; to: 0 360 0; loop: true; dur: 7500; easing: linear');
                document.querySelector('a-scene').appendChild(jupiter);
            var saturn = document.createElement('a-gltf-model');
                saturn.setAttribute('src', "#saturn");
                saturn.setAttribute('visible', "false");
                saturn.setAttribute('id', "planet-saturn");
                saturn.setAttribute('position',{x:0,y:7,z:-100});
                saturn.setAttribute('scale',"20 20 20");
                saturn.setAttribute('animation','property: rotation; to: 0 360 0; loop: true; dur: 7500; easing: linear');
                document.querySelector('a-scene').appendChild(saturn);
            var uranus = document.createElement('a-gltf-model');
                uranus.setAttribute('src', "#uranus");
                uranus.setAttribute('visible', "false");
                uranus.setAttribute('id', "planet-uranus");
                uranus.setAttribute('position',{x:0,y:14,z:-100});
                uranus.setAttribute('scale',"20 20 20");
                uranus.setAttribute('animation','property: rotation; to: 360 0 0; loop: true; dur: 7500; easing: linear');
                document.querySelector('a-scene').appendChild(uranus);
            var neptune = document.createElement('a-gltf-model');
                neptune.setAttribute('src', "#neptune");
                neptune.setAttribute('visible', "false");
                neptune.setAttribute('id', "planet-neptune");
                neptune.setAttribute('position',{x:0,y:21,z:-100});
                neptune.setAttribute('scale',"20 20 20");
                neptune.setAttribute('animation','property: rotation; to: 0 360 0; loop: true; dur: 7500; easing: linear');
                document.querySelector('a-scene').appendChild(neptune);


            setTimeout(() => {
                document.querySelector('a-scene').appendChild(instructionElplane);
                document.querySelector('a-scene').appendChild(instructionEltext);
                document.querySelector('a-scene').appendChild(factElplane);
                document.querySelector('a-scene').appendChild(factEltext);
                document.querySelector('a-scene').appendChild(factElplane2);
                document.querySelector('a-scene').appendChild(factEltext2);
                document.querySelector('a-scene').appendChild(factElplane3);
                document.querySelector('a-scene').appendChild(factEltext3);
            }, 5500);
        
            //Remove button and instructions
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