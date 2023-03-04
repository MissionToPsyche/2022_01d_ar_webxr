console.log("mars.js successfully connected");

var marsFlyByContainer = document.querySelector("#marsFlyByContainer");

function click_explore() {
    // hide the information and display the psyche button
    document.getElementById("marsContainer").style.display = "none";
    document.getElementById("marsPsycheButton").style.display = "block";
}
function click_psyche() {
    // zoom the camera to asteroid
    document.querySelector('#cam').emit('zoom');
    /* document.querySelector('#fading-cube').emit('fade'); */

    setTimeout( () => {
            // hide psyche button and display find button
            document.getElementById("marsPsycheButton").style.display = "none";
            document.getElementById("findPsycheButton").style.display = "block";
    }, 2000)

    setTimeout(() => {
        // Change the border
        var border = document.getElementById("border");
        border.src = "../img/info-border.png";
    
        // display information
        document.getElementById("asteroidContainer-mars").style.transition = "0.5s"
        document.getElementById("asteroidContainer-mars").style.display = "block";
    }, 3000)

}

