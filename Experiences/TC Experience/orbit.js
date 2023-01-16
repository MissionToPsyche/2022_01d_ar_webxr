
AFRAME.registerComponent('location', {
    init: function() {
        let el = this.el;
        this.locationAdventure = function() {

            var spacecraftEl = document.getElementById('spacecraft');
            spacecraftEl.parentNode.removeChild(spacecraftEl);
            var factPlane = document.getElementById('fact-plane');
            factPlane.parentNode.removeChild(factPlane);
            var factPlane2 = document.getElementById('fact-plane2');
            factPlane2.parentNode.removeChild(factPlane2);
            var factPlane3 = document.getElementById('fact-plane3');
            factPlane3.parentNode.removeChild(factPlane3);
            var factText = document.getElementById('fact-text');
            factText.parentNode.removeChild(factText);
            var factText2 = document.getElementById('fact-text2');
            factText2.parentNode.removeChild(factText2);
            var factText3 = document.getElementById('fact-text3');
            factText3.parentNode.removeChild(factText3);
            var instructionPlane = document.getElementById('instruction-plane');
            instructionPlane.parentNode.removeChild(instructionPlane);
            var instructionText = document.getElementById('instruction-text');
            instructionText.parentNode.removeChild(instructionText);

            //add back button
            var backPlane = document.createElement('a-plane');
            backPlane.setAttribute('id','back-plane');
            backPlane.setAttribute('color','#5b5b5b');
            backPlane.setAttribute('back','');
            backPlane.setAttribute('position',{x:0,y:-5,z:-15}); 
            document.querySelector('a-scene').appendChild(backPlane);
            var backText = document.createElement('a-text');
            backText.setAttribute('id', 'back-text');
            backText.setAttribute('value', 'Back');
            backText.setAttribute('position',{x:-.25,y:-5,z:-14.7});
            document.querySelector('a-scene').appendChild(backText);

            //scene elements
            // var infoPlane = document.createElement('a-plane');
            // infoPlane.setAttribute('id','info-plane');
            // infoPlane.setAttribute('color','#5b5b5b');
            // infoPlane.setAttribute('position',{x:0,y:5,z:-15}); 
            // document.querySelector('a-scene').appendChild(infoPlane);
            // var infoText = document.createElement('a-text');
            // infoText.setAttribute('id', 'info-text');
            // infoText.setAttribute('value', 'Pysche orbits the sun between Mars and Jupiter.');
            // infoText.setAttribute('position',{x:-.25,y:5,z:-14.7});
            // document.querySelector('a-scene').appendChild(infoText);

            //change background
            var asteroidBG = document.getElementById('background');
            asteroidBG.setAttribute('visible',"false");
            var blackBG = document.getElementById('background2');
            blackBG.setAttribute('visible',"true");

            //move asteroid
            var asteroidEl = document.getElementById('main-asset');
            asteroidEl.setAttribute('position',{x:0,y:-3.5,z:-100});

            //add the planets
            var sunExists = document.getElementById('planet-sun');
            if (sunExists){
                sunExists.setAttribute('visible',"true");
            } 
            // else {
            //     var sun = document.createElement('a-gltf-model');
            //     sun.setAttribute('src', "#sun");
            //     sun.setAttribute('id', "planet-sun");
            //     sun.setAttribute('position',{x:10,y:1,z:-30});
            //     sun.setAttribute('scale',"30 30 30");
            //     document.querySelector('a-scene').appendChild(sun);
            // }
            
            var mercuryExists = document.getElementById('planet-mercury');
            if (mercuryExists){
                mercuryExists.setAttribute('visible',"true")
            } 
            // else {
            //     var mercury = document.createElement('a-gltf-model');
            //     mercury.setAttribute('src', "#mercury");
            //     mercury.setAttribute('id', "planet-mercury");
            //     mercury.setAttribute('position',{x:9,y:1,z:-25});
            //     mercury.setAttribute('animation','property: rotation; to: 0 360 0; loop: true; dur: 7500; easing: linear');
            //     mercury.setAttribute('scale',"5 5 5");
            //     document.querySelector('a-scene').appendChild(mercury);
            // }
            
            var venusExists = document.getElementById('planet-venus');
            if (venusExists){
                venusExists.setAttribute('visible',"true");
            } 
            // else {
            //     var venus = document.createElement('a-gltf-model');
            //     venus.setAttribute('src', "#venus");
            //     venus.setAttribute('id', "planet-venus");
            //     venus.setAttribute('position',{x:4,y:1,z:-25});
            //     venus.setAttribute('scale',"8 8 8");
            //     venus.setAttribute('animation','property: rotation; to: 0 360 0; loop: true; dur: 7500; easing: linear');
            //     document.querySelector('a-scene').appendChild(venus);
            // }
            
            var earthExists = document.getElementById('planet-earth');
            if (earthExists){
                earthExists.setAttribute('visible',"true");
            } 
            // else {
            //     var earth = document.createElement('a-gltf-model');
            //     earth.setAttribute('src', "#earth");
            //     earth.setAttribute('id', "planet-earth");
            //     earth.setAttribute('position',{x:-1,y:1,z:-25});
            //     earth.setAttribute('scale',"10 10 10");
            //     earth.setAttribute('animation','property: rotation; to: 0 360 0; loop: true; dur: 7500; easing: linear');
            //     document.querySelector('a-scene').appendChild(earth);
            // }

            var marsExists = document.getElementById('planet-mars');
            if (marsExists){
                marsExists.setAttribute('visible',"true");
            } 
            // else {
            //     var mars = document.createElement('a-gltf-model');
            //     mars.setAttribute('src', "#mars");
            //     mars.setAttribute('id', "planet-mars");
            //     mars.setAttribute('position',{x:-6,y:1,z:-25});
            //     mars.setAttribute('scale',"10 10 10");
            //     mars.setAttribute('animation','property: rotation; to: 0 360 0; loop: true; dur: 7500; easing: linear');
            //     document.querySelector('a-scene').appendChild(mars);
            // }
            
            var jupiterExists = document.getElementById('planet-jupiter');
            if (jupiterExists){
                jupiterExists.setAttribute('visible',"true");
            } 
            // else {
            //     var jupiter = document.createElement('a-gltf-model');
            //     jupiter.setAttribute('src', "#jupiter");
            //     jupiter.setAttribute('id', "planet-jupiter");
            //     jupiter.setAttribute('position',{x:5,y:1,z:-30});
            //     jupiter.setAttribute('scale',"20 20 20");
            //     jupiter.setAttribute('animation','property: rotation; to: 0 360 0; loop: true; dur: 7500; easing: linear');
            //     document.querySelector('a-scene').appendChild(jupiter);
            // }
            
            var saturnExists = document.getElementById('planet-saturn');
            if (saturnExists){
                saturnExists.setAttribute('visible',"true");
            } 
            // else {
            //     var saturn = document.createElement('a-gltf-model');
            //     saturn.setAttribute('src', "#saturn");
            //     saturn.setAttribute('id', "planet-saturn");
            //     saturn.setAttribute('position',{x:0,y:1,z:-30});
            //     saturn.setAttribute('scale',"20 20 20");
            //     saturn.setAttribute('animation','property: rotation; to: 0 360 0; loop: true; dur: 7500; easing: linear');
            //     document.querySelector('a-scene').appendChild(saturn);
            // }
            
            var uranusExists = document.getElementById('planet-uranus');
            if (uranusExists){
                uranusExists.setAttribute('visible',"true");
            } 
            // else {
            //     var uranus = document.createElement('a-gltf-model');
            //     uranus.setAttribute('src', "#uranus");
            //     uranus.setAttribute('id', "planet-uranus");
            //     uranus.setAttribute('position',{x:-5,y:1,z:-30});
            //     uranus.setAttribute('scale',"20 20 20");
            //     uranus.setAttribute('animation','property: rotation; to: 360 0 0; loop: true; dur: 7500; easing: linear');
            //     document.querySelector('a-scene').appendChild(uranus);
            // }
           
            var neptuneExists = document.getElementById('planet-neptune');
            if (neptuneExists){
                neptuneExists.setAttribute('visible',"true");
            } 
            // else {
            //     var neptune = document.createElement('a-gltf-model');
            //     neptune.setAttribute('src', "#neptune");
            //     neptune.setAttribute('id', "planet-neptune");
            //     neptune.setAttribute('position',{x:-10,y:1,z:-30});
            //     neptune.setAttribute('scale',"20 20 20");
            //     neptune.setAttribute('animation','property: rotation; to: 0 360 0; loop: true; dur: 7500; easing: linear');
            //     document.querySelector('a-scene').appendChild(neptune);
            // }
            

        }
        this.el.addEventListener('click',this.locationAdventure);
    },
    
    remove: function() {
        this.el.removeEventListener('click',this.locationAdventure);
    }
})