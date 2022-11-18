
AFRAME.registerComponent('location', {
    init: function() {
        let el = this.el;
        this.locationAdventure = function() {
            console.log('We clicked location!');
        }
        this.el.addEventListener('click',this.locationAdventure);
    },
    
    remove: function() {
        this.el.removeEventListener('click',this.locationAdventure);
    }
})