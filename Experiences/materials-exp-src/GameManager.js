"use strict";
export class GameManager {
    isGameActive = true;
    currentScreen = 1;
    maxScreens = 6;
    elementsNeeded = 3;
    nickelCounter = 0;
    ironCounter = 0;
    otherCounter = 0;
    
    checkIfGameActive() {
        if (this.nickelCounter >= this.elementsNeeded && this.ironCounter >= this.elementsNeeded && this.otherCounter >= this.elementsNeeded) {
            this.isGameActive = false;
        }
    }

    nextScreen(document) {
        this.incrementScreen(document);
        this.buildNextScreen(document);
    }

    prevScreen(document) {
        this.decrementScreen(document);
        this.takedownThisScreen(document);
    }

    prevScreen() {

    }

    buildNextScreen(document) {
        // build next screen here by calling the appropriate method based on screen count 
        switch (this.currentScreen) {
            case 2:
                this.buildSecondScreen(document);
                this.takedownFirstScreen();
                break;
            case 3:
                this.buildThirdScreen(document);
                break;
            case 4:
                this.buildFourthScreen(document);
                break;
            case 5:
                this.buildFifthScreen(document);
                break;
            case 6:
                this.buildSixthScreen(document);
                break;
            default:
                break;
        }
    }

    buildSecondScreen(document) {
    }

    takedownFirstScreen(document) {
        // takedown first screen here
    }

    incrementScreen() {
        this.currentScreen++;
    }

    decrementScreen() {
        this.currentScreen--;
    }
}
