
AFRAME.registerComponent('size', {
    init: function() {
        let el = this.el;
        this.sizeAdventure = function() {
            console.log('We clicked size!');
        
        }
        this.el.addEventListener('click',this.sizeAdventure);
    },
    
    remove: function() {
        this.el.removeEventListener('click',this.sizeAdventure);
    }
});