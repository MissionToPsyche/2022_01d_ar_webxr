
AFRAME.registerComponent('weight', {
    init: function() {
        let el = this.el;
        this.weightAdventure = function() {
            console.log('We clicked weight!');

            
        }
        this.el.addEventListener('click',this.weightAdventure);
    },
    
    remove: function() {
        this.el.removeEventListener('click',this.weightAdventure);
    }
}) 