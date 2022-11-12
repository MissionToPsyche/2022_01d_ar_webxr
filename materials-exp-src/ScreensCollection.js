class ScreensCollection {

    curScreen;
    screensList;

    constructor(screensList) {
        this.screensList = screensList;
        this.curScreen = screensList[0];
    }

    nextScreen() {
        this.curScreen = this.screensList[this.screensList.indexOf(this.curScreen) + 1];
    }

}