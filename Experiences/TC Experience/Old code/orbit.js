
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
            var backPlane = document.createElement('a-image');
            backPlane.setAttribute('id','back-plane');
            backPlane.setAttribute('back','');
            backPlane.setAttribute('src','../../../src/img/back-button.png');
            backPlane.setAttribute('position',{x:0,y:-3.0,z:-10});
            document.querySelector('a-scene').appendChild(backPlane);

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
            
            var mercuryExists = document.getElementById('planet-mercury');
            if (mercuryExists){
                mercuryExists.setAttribute('visible',"true")
            } 
            
            var venusExists = document.getElementById('planet-venus');
            if (venusExists){
                venusExists.setAttribute('visible',"true");
            } 
            
            var earthExists = document.getElementById('planet-earth');
            if (earthExists){
                earthExists.setAttribute('visible',"true");
            } 

            var marsExists = document.getElementById('planet-mars');
            if (marsExists){
                marsExists.setAttribute('visible',"true");
            } 
            
            var jupiterExists = document.getElementById('planet-jupiter');
            if (jupiterExists){
                jupiterExists.setAttribute('visible',"true");
            } 
            
            var saturnExists = document.getElementById('planet-saturn');
            if (saturnExists){
                saturnExists.setAttribute('visible',"true");
            } 
            
            var uranusExists = document.getElementById('planet-uranus');
            if (uranusExists){
                uranusExists.setAttribute('visible',"true");
            } 
           
            var neptuneExists = document.getElementById('planet-neptune');
            if (neptuneExists){
                neptuneExists.setAttribute('visible',"true");
            } 

        }
        this.el.addEventListener('click',this.locationAdventure);
    },
    
    remove: function() {
        this.el.removeEventListener('click',this.locationAdventure);
    }
})