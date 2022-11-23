var border = document.getElementById("info-border");


function asteroidExploreBtnClick() {
    // Change the border
    border.src = "../img/psyche-border.png";

    // hide the information text and button
    document.querySelector(".informationText").style.display = "none";
    document.getElementById("asteroidExploreBtn").style.display = "none"

    // Show the earth button
    document.getElementById("earthBtn").style.display = "block"
}