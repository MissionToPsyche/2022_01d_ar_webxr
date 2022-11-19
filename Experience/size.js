
AFRAME.registerComponent('size', {
    init: function() {
        let el = this.el;
        this.sizeAdventure = function() {

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
            backPlane.setAttribute('back','');
            backPlane.setAttribute('position',{x:0,y:-2,z:-15});
            document.querySelector('a-scene').appendChild(backPlane);
        
        }
        this.el.addEventListener('click',this.sizeAdventure);
    },
    
    remove: function() {
        this.el.removeEventListener('click',this.sizeAdventure);
    }
});