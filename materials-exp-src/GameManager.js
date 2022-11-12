class GameManager {
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

    constructor() {
        this.screensCollection = new ScreensCollection();
        this.buildScreens();        
    }

    checkIfGameActive() {
        if (this.nickelCounter >= this.nickelNeeded && this.ironCounter >= this.ironNeeded && this.oxygenCounter >= this.oxygenNeeded) {
            this.isGameActive = false;
        }
    }

    buildScreens() {
        // build screens here
    }

    buildNextScreen() {
        // build next screen here from the collection
    }

    takedownPrevScreen() {
        // takedown previous screen here
    }
}