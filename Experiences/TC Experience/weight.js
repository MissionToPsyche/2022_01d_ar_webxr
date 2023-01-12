
AFRAME.registerComponent('weight', {
    init: function() {
        let el = this.el;
        this.weightAdventure = function() {

            //remove elements
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
            backPlane.setAttribute('back','');
            backPlane.setAttribute('position',{x:0,y:-5,z:-15}); 
            document.querySelector('a-scene').appendChild(backPlane);
            var backText = document.createElement('a-text');
            backText.setAttribute('id', 'back-text');
            backText.setAttribute('value', 'Back');
            backText.setAttribute('position',{x:-.25,y:-5,z:-14.7});
            document.querySelector('a-scene').appendChild(backText);

            //scene elements
            var infoPlane = document.createElement('a-plane');
            infoPlane.setAttribute('id','info-plane');
            infoPlane.setAttribute('position',{x:0,y:5,z:-15}); 
            document.querySelector('a-scene').appendChild(infoPlane);
            var infoText = document.createElement('a-text');
            infoText.setAttribute('id', 'info-text');
            infoText.setAttribute('value', 'Psyche weighs between 22,170,000,000,000,000,000kg and 23,570,000,000,000,000,000kg. That is equal to 1,400,000,000,000,000 18-wheeler tractor trailer trucks');
            infoText.setAttribute('position',{x:-.25,y:5,z:-14.7});
            document.querySelector('a-scene').appendChild(infoText);


        }
        this.el.addEventListener('click',this.weightAdventure);
    },
    
    remove: function() {
        this.el.removeEventListener('click',this.weightAdventure);
    }
}) 