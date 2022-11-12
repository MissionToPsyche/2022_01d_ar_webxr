class Screen {

    overlayDiv;
    aframeDiv;
    instructionText;

    constructor(overlayDiv, aframeDiv, instructionText) {
        this.overlayDiv = overlayDiv;
        this.aframeDiv = aframeDiv;
        this.instructionText = instructionText;
    }

    getOverlayDiv() {
        return this.overlayDiv;
    }

    getAframeDiv() {
        return this.aframeDiv;
    }

    getInstructionText() {
        return this.instructionText;
    }

}