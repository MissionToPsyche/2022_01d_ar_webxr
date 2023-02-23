import { GameManager } from './GameManager.js';

const gameManager = new GameManager();


function getNextScreen(document) {
    gameManager.nextScreen(document);
}

function getPrevScreen(document) {
    gameManager.prevScreen(document);
}

window.getNextScreen = getNextScreen;
window.getPrevScreen = getPrevScreen;
