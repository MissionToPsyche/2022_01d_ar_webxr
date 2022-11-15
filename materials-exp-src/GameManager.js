import ScreensCollection from './ScreensCollection.js';
import Screen from './Screen.js';

"use strict";
export class GameManager {
    screensCollection;
    isGameActive = true;
    currentStage = 1;
    maxStages = 6;
    nickelCounter = 0;
    ironCounter = 0;
    oxygenCounter = 0;
    nickelNeeded = 6;
    ironNeeded = 8;
    oxygenNeeded = 10;
    overlayDivConst;
    aFrameDivConst;

    constructor() {
        this.overlayDivConst = document.getElementById("overlay");
        this.aFrameDivConst = document.getElementById("aFrameSpan");
        this.buildScreens();        
    }

    checkIfGameActive() {
        if (this.nickelCounter >= this.nickelNeeded && this.ironCounter >= this.ironNeeded && this.oxygenCounter >= this.oxygenNeeded) {
            this.isGameActive = false;
        }
    }

    buildScreens() {
        // build screens here
        var overlayDiv = `Hello from Inserted Overlay Div!`;
        var aFrameDiv = `    <a-scene background="color: #ECECEC"
             webxr="optionalFeatures: dom-overlay; overlayElement: #overlay">
            <a-box position="0 1 -3" rotation="0 45 15" color="#ff00ea" shadow></a-box>
            </a-scene>`;
        var instructions = ["Testing instructions array"];
        var screen1 = new Screen(overlayDiv, aFrameDiv, instructions);
        var screensList = [screen1];
        this.screensCollection = new ScreensCollection(screensList);
        var newScreen = new Screen();
        newScreen.testScreenClass();
        this.screensCollection.testScreensCollectionClass();
        this.buildNextScreen();
    }

    buildNextScreen() {
        // build next screen here from the collection
        this.overlayDivConst.innerHTML = this.screensCollection.getCurScreen().getOverlayDiv();
        this.aFrameDivConst.innerHTML = this.screensCollection.getCurScreen().getAframeDiv();
    }

    takedownPrevScreen() {
        // takedown previous screen here
    }
}
