import { GameManager } from './GameManager.js';

const gameManager = new GameManager();

function getNextScreen() {
    gameManager.nextScreen();
}

window.getNextScreen = getNextScreen;
