import { GameManager } from './GameManager.js';

const gameManager = new GameManager();

function getNextScreen() {
    gameManager.nextScreen();
}

function getPrevScreen() {
    gameManager.prevScreen();
}

window.getNextScreen = getNextScreen;
window.getPrevScreen = getPrevScreen;
