// Position of entities on spacecraft screen
const spacecraftScreenPositions = {
	spacecraft:{x:0, y:-1, z:-5},
	gamma:{x:0, y:0, z:0},
	magnet:{x:0, y:0, z:0},
	multi:{x:0, y:0, z:0},
	solar:{x:0, y:0, z:0},
	xband:{x:0, y:0, z:0}
};

// Position of instruments on selection screen
const instrumentListPositions = {
	multi:"-2 2 -5",
	gamma:"-2 1 -5",
	magnet:"-2 0 -5",
	xband:"-2 -1 -5",
	solar:"-2 -2 -5"
};
// Position of instrument labels on selection screen
const instrumentLabelPositions = {
	multi:"-1 2 -4.5",
	gamma:"-1 1 -4.5",
	magnet:"-1 0 -4.5",
	xband:"-1 -1 -4.5",
	solar:"-1 -2 -4.5"
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

AFRAME.registerComponent('spacecraft-select', {
	init: function () {
		var el = this.el; // spacecraft
		el.addEventListener('click', function () {
			console.log('spacecraft clicked');
			switch (sceneState) {
				case sceneStates.opening:
					advanceState(sceneStates.spacecraft);
					break;
				case sceneStates.spacecraft:
					advanceState(sceneStates.selection);
					break;
			}
		});
		console.log("init spacecraft-select");
		updateDebugText();
	}
});


var sceneState = sceneStates.opening;

function click_back() {
	if (sceneState >= sceneStates.arGamma && sceneState <= sceneStates.arXband) {
		// Then go back to info state
		sceneState -= 10;
	} else if (sceneState >= sceneStates.infoGamma && sceneState <= sceneStates.infoXband) {
		// Then go back to selection state
		sceneState = sceneStates.selection;
	} else if (sceneState == sceneStates.selection) {
		// Then go back to spacecraft state
		sceneState = sceneStates.spacecraft;
	} else if (sceneState == sceneStates.spacecraft) {
		// Then go back to opening state
		sceneState = sceneStates.opening; 
		document.getElementById("backButton").style.display = "none";
		document.getElementById("homeButton").style.display = "block";
	}
	updateDebugText();
}

function updateDebugText() {
	const debugText = document.querySelector('a-text#debugText');
	debugText.setAttribute('value', "scene: " + Object.keys(sceneStates)[sceneState]);
}

// Advance to scene state s
function advanceState(s) {
	sceneState = s;
	updateDebugText();

	var text;
	var spacecraft = document.querySelector('a-entity#spacecraft');
	var instruments = {
		gamma: document.querySelector('a-entity#gamma'),
		magnet: document.querySelector('a-entity#magnet'),
		multi: document.querySelector('a-entity#multi'),
		solar: document.querySelector('a-entity#solar'),
		xband: document.querySelector('a-entity#xband')
	};
	var labels = {
		gamma: document.querySelector('a-text#gammaLabel'),
		magnet: document.querySelector('a-text#magnetLabel'),
		multi: document.querySelector('a-text#multiLabel'),
		solar: document.querySelector('a-text#solarLabel'),
		xband: document.querySelector('a-text#xbandLabel')
	};

	switch (s) {
		case sceneStates.opening:
			console.log("Error: Cannot _advance_ to 'opening' scene state");
			break;
		case sceneStates.spacecraft:
			// Hide logo image/text
			document.getElementById("applogo").style.display = "none";
			// Hide home button
			document.getElementById("homeButton").style.display = "none";
			// Hide opening instructions
			text = document.querySelector('a-text#openingInstruction');
			text.setAttribute('visible', 'false');

			// Show back button
			document.getElementById("backButton").style.display = "block";
			// Show mission text
			text = document.querySelector('a-text#missionText');
			text.setAttribute('visible', 'true');
			// Center spacecraft
			spacecraft.setAttribute('position', '0 -1 -5');

			// ToDo: Show instrument dashed circle outlines
			// ToDo: Show 'tap' image over spacecraft

			// Show spacecraft instructions
			text = document.querySelector('a-text#spacecraftInstruction');
			text.setAttribute('visible', 'true');
			break;
		case sceneStates.selection:
			// Hide mission text
			text = document.querySelector('a-text#missionText');
			text.setAttribute('visible', 'false');
			// Hide spacecraft
			spacecraft.setAttribute('visible', 'false');
			// ToDo: Hide outlines
			// Hide spacecraft instructions
			text = document.querySelector('a-text#spacecraftInstruction');
			text.setAttribute('visible', 'false');

			for (let i = 0; i < Object.keys(instruments).length; i++) {
				if (Object.values(instruments)[i] != null) {
					// Position instruments
					Object.values(instruments)[i].setAttribute('position', instrumentListPositions[i]);
					// Show instruments
					Object.values(instruments)[i].setAttribute('visible', 'true');
				}
			};
			
			for (let i = 0; i < Object.keys(labels).length; i++) {
				if (Object.values(labels)[i] != null) {
					// ToDo: Show instrument labels
					Object.values(labels)[i].setAttribute('visible', 'true');
					// ToDo: Position instrument labels
					Object.values(labels)[i].setAttribute('position', instrumentLabelPositions[i]);
				}
			};
			break;
		case sceneStates.infoGamma:
			// ToDo: Hide other instruments
			// ToDo: Hide other instrument names
			
			// ToDo: Position gamma instrument label
			// ToDo: Position gamma instrument
			// ToDo: Show 'scan' button
			// ToDo: Show gamma description text
			break;
		case sceneStates.infoMagnet:
			break;
		case sceneStates.infoMulti:
			break;
		case sceneStates.infoSolar:
			break;
		case sceneStates.infoXband:
			break;
		case sceneStates.arGamma:
			break;
		case sceneStates.arMagnet:
			break;
		case sceneStates.arMulti:
			break;
		case sceneStates.arSolar:
			break;
		case sceneStates.arXband:
			break;
		default:
			console.log("Error: Cannot advance to unknown scene state");
	}
}