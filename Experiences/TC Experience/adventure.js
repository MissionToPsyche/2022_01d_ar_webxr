var taskOneComplete;
var taskTwoComplete;
var taskThreeComplete;
var taskFourComplete;
var tasksDone=0;

AFRAME.registerComponent('moontask', {
    init: function() {
        //let el = this.el;
        this.beginMoonTask = function() {
        //what to do when clicked
            taskOneComplete = true;
            console.log("Is task 1 done: " + taskOneComplete);
            tasksDone++;
            console.log('Tasks Done: ' + tasksDone);
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
            taskTwoComplete = true;
            console.log("Is task 2 done: " + taskTwoComplete);
            tasksDone++;
            console.log('Tasks Done: ' + tasksDone);
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
            taskThreeComplete = true;
            console.log("Is task 3 done: " + taskThreeComplete);
            tasksDone++;
            console.log('Tasks Done: ' + tasksDone);
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
            taskFourComplete = true;
            console.log("Is task 4 done: " + taskFourComplete);
            tasksDone++;
            console.log('Tasks Done: ' + tasksDone);
            setTimeout(() => {
            //delayed events

            }, 5500);

        }
        this.el.addEventListener('click',this.beginWeightTask);
    },
    remove: function() {
        this.el.removeEventListener('click',this.beginWeightTask);
    }
}); 
