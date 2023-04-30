const instruments = {
	gamma:  document.querySelector('a-entity#gamma'),
	magnet: document.querySelector('a-entity#magnet'),
	multi:  document.querySelector('a-entity#multi'),
	solar:  document.querySelector('a-box#solar'),
	xband:  document.querySelector('a-box#xband'),
};
const labels = {
	gammaLabel:  document.querySelector('a-text#gammaLabel'),
	magnetLabel: document.querySelector('a-text#magnetLabel'),
	multiLabel:  document.querySelector('a-text#multiLabel'),
	solarLabel:  document.querySelector('a-text#solarLabel'),
	xbandLabel:  document.querySelector('a-text#xbandLabel'),
};
const titleValues = {
	gammaTitle:  "Gamma Ray and\nNeutron Spectrometer",
	magnetTitle: "Magnetometer",
	multiTitle:  "Multispectral Imager",
	solarTitle:  "Solar Panels",
	xbandTitle:  "X-band Radio\nTelecom System",
}
const descriptionValues = {
	gammaDesc:  document.querySelector('p#gammaDescription').textContent,
	magnetDesc: document.querySelector('p#gammaDescription').textContent,
	multiDesc:  document.querySelector('p#gammaDescription').textContent,
	solarDesc:  document.querySelector('p#gammaDescription').textContent,
	xbandDesc:  document.querySelector('p#gammaDescription').textContent,
}
const spacecraft = document.querySelector('a-entity#spacecraft');
const instructions = {
	opening:    document.querySelector('a-text#openingInstruction'),
	spacecraft: document.querySelector('a-text#spacecraftInstruction'),
};
const mission = document.querySelector('a-text#missionText');
const instrumentDescription = document.querySelector('a-text#descriptionText');
const infoTitle = document.querySelector('a-text#infoTitle');

// Opening scene
const openingSceneElements = {
	spacecraft:  spacecraft,
	instruction: instructions.opening,
};
const openingScenePositions = {
	spacecraft:  '0 -1 -5',
	instruction: '-1.5 -2.5 -4.5',
};

// Spacecraft scene
const spacecraftSceneElements = {
	mission:     mission,
	spacecraft:  spacecraft,
	instruction: instructions.spacecraft,
};
const spacecraftScenePositions = {
	mission:     '-1.5 3 -4.5',
	spacecraft:  '0 -1 -5',
	instruction: '-1.5 -2.5 -4.5',
};

// Selection scene
const selectionSceneElements = {
	...instruments,
	...labels,
};
const selectionScenePositions = {
	gamma:  '-2  2 -5',
	magnet: '-2  1 -5',
	multi:  '-2  0 -5',
	solar:  '-2 -1 -5',
	xband:  '-2 -2 -5',
	gammaLabel:  '-1 2 -4.5',
	magnetLabel: '-1 1 -4.5',
	multiLabel:  '-1 0 -4.5',
	solarLabel:  '-1 -1 -4.5',
	xbandLabel:  '-1 -2 -4.5',
};

// Info scene
var infoSceneElements;
const infoScenePositions = {
	instrument: '-1 2 -4.5',
	label: '0 2 -4.5',
	description: '-1.5 -1.5 -4.5',
};
