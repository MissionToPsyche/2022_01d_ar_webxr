AFRAME.registerComponent('back', {
    init: function() {
        let el = this.el;
        this.backButton = function() {
            console.log('Back pressed!');

        }
        this.el.addEventListener('click',this.backButton);
    },
    
    remove: function() {
        this.el.removeEventListener('click',this.backButton);
    }
}) 