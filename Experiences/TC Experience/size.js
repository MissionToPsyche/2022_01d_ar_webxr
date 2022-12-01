
AFRAME.registerComponent('size', {
    init: function() {
        let el = this.el;
        this.sizeAdventure = function() {

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
            backPlane.setAttribute('position',{x:0,y:-3,z:-15});
            document.querySelector('a-scene').appendChild(backPlane);
            var backText = document.createElement('a-text');
            backText.setAttribute('id', 'back-text');
            backText.setAttribute('value', 'Back');
            backText.setAttribute('position',{x:-.25,y:-3,z:-14.7});
            document.querySelector('a-scene').appendChild(backText);

            //scene elements
            var infoPlane = document.createElement('a-plane');
            infoPlane.setAttribute('id','info-plane');
            infoPlane.setAttribute('width','4');
            infoPlane.setAttribute('height','1.5');
            infoPlane.setAttribute('position',{x:-.2,y:3.5,z:-15}); 
            document.querySelector('a-scene').appendChild(infoPlane);
            var infoText = document.createElement('a-text');
            infoText.setAttribute('id', 'info-text');
            infoText.setAttribute('value', 'The estimated average diameter of \n Psyche is approximately 223km. \n Walking around the asteroid would be approximately the same as walking \n the length of Florida.');
            infoText.setAttribute('position',{x:-2,y:3.5,z:-14.7});
            document.querySelector('a-scene').appendChild(infoText);
            var item = document.createElement('a-entity');
            item.setAttribute('gltf-model', '#item');
            item.setAttribute('position',{x:-3,y:5,z:-15}); 
            document.querySelector('a-scene').appendChild(item);
            var florida = document.createElement('a-image');
            florida.setAttribute('id', 'florida');
            florida.setAttribute('height', '3');
            florida.setAttribute('width', '3');
            florida.setAttribute('src', '../../src/img/florida.png');
            florida.setAttribute('position',{x:-4,y:0,z:-15}); 
            document.querySelector('a-scene').appendChild(florida);

        }
        this.el.addEventListener('click',this.sizeAdventure);
    },
    
    remove: function() {
        this.el.removeEventListener('click',this.sizeAdventure);
    }
});