// Position of entities on spacecraft screen
const spacecraftScreenPositions = {
	spacecraft:{x:0, y:-1, z:-5},
	gamma:{x:0, y:0, z:0},
	magnet:{x:0, y:0, z:0},
	multi:{x:0, y:0, z:0},
	solar:{x:0, y:0, z:0},
	xband:{x:0, y:0, z:0}
};

// Position of entities on selection screen
const componentListPositions = {
	xband:{x:-2, y:2, z:-5},
	multi:{x:-2, y:1, z:-5},
	gamma:{x:-2, y:0, z:-5},
	magnet:{x:-2, y:-1, z:-5},
	solar:{x:-2, y:-2, z:-5}
};

const sceneStates = {
	opening:0,
	spacecraft:1,
	selection:2,
	infoGamma:10,
	infoMagnet:11,
	infoMulti:12,
	infoSolar:13,
	infoXband:14,
	arGamma:20,
	arMagnet:21,
	arMulti:22,
	arSolar:23,
	arXband:24
};