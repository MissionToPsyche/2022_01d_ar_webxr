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
        this.overlayDivConst = document.getElementById("overlaySpan");
        this.aFrameDivConst = document.getElementById("aFrameScene");
        this.buildScreens();        
    }

    checkIfGameActive() {
        if (this.nickelCounter >= this.nickelNeeded && this.ironCounter >= this.ironNeeded && this.oxygenCounter >= this.oxygenNeeded) {
            this.isGameActive = false;
        }
    }

    buildScreens() {
        // build screens here
        var overlayDiv = `
                <div class="scientist-overlay"></div>
        		<textarea class="scrollabletextbox" name="note" readonly> The instructions for the experience will go here.
		        </textarea>
        `;
        var aFrameDiv = document.createElement("a-entity");
        aFrameDiv.innerHTML = `<a-box position="0 1 -3" rotation="0 45 15" color="#ff00ea" shadow></a-box>`;
        var instructions = ["Testing instructions array"];
        var overlayDiv2 = `Hello from Inserted Overlay Div 2!`;
        var aFrameDiv2 = document.createElement("a-entity");
        aFrameDiv2.innerHTML = ` <a-box id="nextScreen" position="0 1 -3" rotation="0 45 15" color="#ffff00" shadow></a-box>`
        var screen1 = new Screen(overlayDiv, aFrameDiv, instructions);
        var screen2 = new Screen(overlayDiv2, aFrameDiv2, instructions);
        var screensList = [screen1, screen2];
        this.screensCollection = new ScreensCollection(screensList);
        this.buildNextScreen();
    }

    nextScreen() {
        this.takedownPrevScreen();
        this.screensCollection.nextScreen();
        this.buildNextScreen();
        this.incrementStage();
    }

    buildNextScreen() {
        // build next screen here from the collection
        this.overlayDivConst.innerHTML = this.screensCollection.getCurScreen().getOverlayDiv();
        this.aFrameDivConst.appendChild(this.screensCollection.getCurScreen().getAframeDiv());
    }

    takedownPrevScreen() {
        // takedown previous screen here
        this.overlayDivConst.innerHTML = ``;
        this.aFrameDivConst.removeChild(this.aFrameDivConst.childNodes[0]);
    }

    incrementStage() {
        this.currentStage++;
    }

    decrementStage() {
        this.currentStage--;
    }

    incrementNickelCounter() {
        this.nickelCounter++;
    }

    incrementIronCounter() {
        this.ironCounter++;
    }

    incrementOxygenCounter() {
        this.oxygenCounter++;
    }

    getNickelCounter() {
        return this.nickelCounter;
    }

    getIronCounter() {
        return this.ironCounter;
    }

    getOxygenCounter() {
        return this.oxygenCounter;
    }

    getNickelNeeded() {
        return this.nickelNeeded;
    }

    getIronNeeded() {
        return this.ironNeeded;
    }

    getOxygenNeeded() {
        return this.oxygenNeeded;
    }

    getIsGameActive() {
        this.checkIfGameActive();
        return this.isGameActive;
    }

    getCurrentStage() {
        return this.currentStage;
    }

    getMaxStages() {
        return this.maxStages;
    }


}
