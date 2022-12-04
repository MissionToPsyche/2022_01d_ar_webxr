export default class ScreensCollection {

    curScreen;
    screensList;

    constructor(screensList) {
        this.screensList = screensList;
        this.curScreen = screensList[0];
    }

    nextScreen() {
        this.curScreen = this.screensList[this.screensList.indexOf(this.curScreen) + 1];
    }

    testScreensCollectionClass() {
        console.log("Hello from ScreensCollection class");
    }

    getCurScreen() {
        return this.curScreen;
    }

}