
AFRAME.registerComponent('moontask', {
    init: function() {
        //let el = this.el;
        this.beginMoonTask = function() {
        //what to do when clicked
            
            
            sessionStorage.setItem('task1','true');
            document.getElementById('task1').setAttribute('color','green');
            console.log("Is task 1 done: " + sessionStorage.getItem('task1'));
            for(var i=0;i<sessionStorage.length;i++){
                console.log(sessionStorage.key(i)+" is done: "+sessionStorage.getItem(sessionStorage.key(i)))
            }
            setTimeout(() => {
            //delayed events

            }, 5500);

        }
        this.el.addEventListener('click',this.beginMoonTask);
    },
    remove: function() {
        this.el.removeEventListener('click',this.beginMoonTask);
    }
}); 


AFRAME.registerComponent('asteroidshape', {
    init: function() {
        //let el = this.el;
        this.beginShapeTask = function() {
        //what to do when clicked
            sessionStorage.setItem('task2','true');
            document.getElementById('task2').setAttribute('color','green');
            console.log("Is task 2 done: " + sessionStorage.getItem('task2'));
            for(var i=0;i<sessionStorage.length;i++){
                console.log(sessionStorage.key(i)+" is done: "+sessionStorage.getItem(sessionStorage.key(i)))
            }
            setTimeout(() => {
            //delayed events

            }, 5500);

        }
        this.el.addEventListener('click',this.beginShapeTask);
    },
    remove: function() {
        this.el.removeEventListener('click',this.beginShapeTask);
    }
});

AFRAME.registerComponent('asteroidorbit', {
    init: function() {
        //let el = this.el;
        this.beginOrbitTask = function() {
        //what to do when clicked
            sessionStorage.setItem('task3','true');
            document.getElementById('task3').setAttribute('color','green');
            console.log("Is task 3 done: " + sessionStorage.getItem('task3'));
            for(var i=0;i<sessionStorage.length;i++){
                console.log(sessionStorage.key(i)+" is done: "+sessionStorage.getItem(sessionStorage.key(i)))
            }
            setTimeout(() => {
            //delayed events

            }, 5500);

        }
        this.el.addEventListener('click',this.beginOrbitTask);
    },
    remove: function() {
        this.el.removeEventListener('click',this.beginOrbitTask);
    }
}); 

AFRAME.registerComponent('asteroidweight', {
    init: function() {
        //let el = this.el;
        this.beginWeightTask = function() {
        //what to do when clicked
            sessionStorage.setItem('task4','true');
            document.getElementById('task4').setAttribute('color','green');
            var needle = document.getElementById('scale-needle');
            console.log("Is task 4 done: " + sessionStorage.getItem('task4'));    
            for(var i=0;i<sessionStorage.length;i++){
                console.log(sessionStorage.key(i)+" is done: "+sessionStorage.getItem(sessionStorage.key(i)))
            }
            setTimeout(() => {
            //delayed events
                needle.setAttribute('animation','property: rotation; to: 0 0 -240; loop: false; dur: 2000; easing: linear');
            }, 600);

        }
        this.el.addEventListener('click',this.beginWeightTask);
    },
    remove: function() {
        this.el.removeEventListener('click',this.beginWeightTask);
    }
}); 

