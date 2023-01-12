
AFRAME.registerComponent('back', {
    init: function() {
        let el = this.el;
        this.backButton = function() {
            console.log('Back pressed!');
            
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
            instructionElplane.setAttribute('color','#ffffff');
            instructionElplane.setAttribute('id','instruction-plane');
            var instructionEltext = document.createElement('a-text');
            instructionEltext.setAttribute('value','Choose your adventure.');
            instructionEltext.setAttribute('position',{x:-1.15, y:2.5, z:-14.8});
            instructionEltext.setAttribute('id','instruction-text');

            var factElplane = document.createElement('a-plane');
            factElplane.setAttribute('position',{x:-2.95, y:-3, z:-15});
            factElplane.setAttribute('height','1');
            factElplane.setAttribute('width','2');
            factElplane.setAttribute('color','#ffffff');
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
            factElplane2.setAttribute('color','#ffffff');
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
            factElplane3.setAttribute('color','#ffffff');
            factElplane3.setAttribute('size','');
            factElplane3.setAttribute('id','fact-plane3');
            var factEltext3 = document.createElement('a-text');
            factEltext3.setAttribute('value','How big is it?');
            factEltext3.setAttribute('position',{x:2.25, y:-3, z:-14.8});
            factEltext3.setAttribute('id','fact-text3');

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

            //remove planets

            var planet1 = document.getElementById('planet-sun');
            if (planet1){
                planet1.setAttribute('visible',"false");
            }
            // planet1.parentNode.removeChild(planet1);


            var planet2 = document.getElementById('planet-mercury');
            if (planet2){
                planet2.setAttribute('visible',"false");
            }
            // planet2.parentNode.removeChild(planet2);
            var planet3 = document.getElementById('planet-venus');
            if (planet3){
                planet3.setAttribute('visible',"false");
            }
            // planet3.parentNode.removeChild(planet3);
            var planet4 = document.getElementById('planet-earth');
            if (planet4){
                planet4.setAttribute('visible',"false");
            }
            // planet4.parentNode.removeChild(planet4);
            var planet5 = document.getElementById('planet-mars');
            if (planet5){
                planet5.setAttribute('visible',"false");
            }
            // planet5.parentNode.removeChild(planet5);
            var planet6 = document.getElementById('planet-jupiter');
            if (planet6){
                planet6.setAttribute('visible',"false");
            }
            // planet6.parentNode.removeChild(planet6);
            var planet7 = document.getElementById('planet-saturn');
            if (planet7){
                planet7.setAttribute('visible',"false");
            }
            // planet7.parentNode.removeChild(planet7);
            var planet8 = document.getElementById('planet-uranus');
            if (planet8){
                planet8.setAttribute('visible',"false");
            }
            // planet8.parentNode.removeChild(planet8);
            var planet9 = document.getElementById('planet-neptune');
            if (planet9){
                planet9.setAttribute('visible',"false");
            }
            // planet9.parentNode.removeChild(planet9);

            //remove back button
            var backElPlane = document.getElementById('back-plane');
            backElPlane.parentNode.removeChild(backElPlane);
            var backElText = document.getElementById('back-text');
            backElText.parentNode.removeChild(backElText);
            var infoPlane = document.getElementById('info-plane');
            infoPlane.parentNode.removeChild(infoPlane);
            var infoText = document.getElementById('info-text');
            infoText.parentNode.removeChild(infoText);
            var florida = document.getElementById('florida');
            florida.parentNode.removeChild(florida);
        }
        this.el.addEventListener('click',this.backButton);
    },
    
    remove: function() {
        this.el.removeEventListener('click',this.backButton);
    }
}) 