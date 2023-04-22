const Scenes = Object.freeze({
	Opening:    Symbol("Opening"),
	Spacecraft: Symbol("Spacecraft"),
	Selection:  Symbol("Selection"),
	InfoGamma:  Symbol("InfoGamma"),
	InfoMagnet: Symbol("InfoMagnet"),
	InfoMulti:  Symbol("InfoMulti"),
	InfoSolar:  Symbol("InfoSolar"),
	InfoXband:  Symbol("InfoXband"),
});

var sceneState = Scenes.Opening;

function click_back() {
	switch (sceneState) {
		case Scenes.Opening:
			console.log("Error: Cannot _retreat_ from 'opening' scene state");
			break;
		case Scenes.Spacecraft:
			retreatState(Scenes.Opening);
			break;
		case Scenes.Selection:
			retreatState(Scenes.Spacecraft);
			break;
		default:
			retreatState(Scenes.Selection);
			break;
	}
}

function updateDebugText() {
	const debugText = document.querySelector('a-text#debugText');
	debugText.setAttribute('value', "scene: " + sceneState.description);
	console.log("scene: " + sceneState.description);
}

// Advance to scene state s
function advanceState(s) {
	console.log("advanceState " + s.description); 
	sceneState = s;
	updateDebugText();

	switch (sceneState) {
		case Scenes.Opening:
			console.log("Error: Cannot _advance_ to 'opening' scene state");
			break;
		case Scenes.Spacecraft:
			// Hide logo image/text
			document.getElementById("applogo").style.display = "none";
			// Hide home button
			document.getElementById("homeButton").style.display = "none";
			// Show back button
			document.getElementById("backButton").style.display = "block";

			// Hide last scene (opening)
			hideGroup(openingSceneElements);

			// Show spacecraft scene
			moveGroup(spacecraftSceneElements, spacecraftScenePositions);
			showGroup(spacecraftSceneElements);

			// ToDo: Show instrument dashed circle outlines
			// ToDo: Show 'tap' image over spacecraft

			break;
		case Scenes.Selection:
			// Hide last scene (spacecraft)
			hideGroup(spacecraftSceneElements);
			
			// ToDo: Hide outlines
			
			// Show selection scene
			moveGroup(selectionSceneElements, selectionScenePositions);
			showGroup(selectionSceneElements);

			break;
		case Scenes.InfoGamma:
			infoStateShared();
			infoTitle.setAttribute('value', titleValues.gammaTitle);
			instrumentDescription.setAttribute('value', descriptionValues.gammaDesc);
			infoSceneElements = {gamma: instruments.gamma, title: infoTitle, description: instrumentDescription};
			moveGroup(infoSceneElements, infoScenePositions);
			showGroup(infoSceneElements);
						
			// ToDo: Show 'scan' button
			break;
		case Scenes.InfoMagnet:
			infoStateShared();
			infoTitle.setAttribute('value', titleValues.magnetTitle);
			instrumentDescription.setAttribute('value', descriptionValues.magnetDesc);
			infoSceneElements = {magnet: instruments.magnet, title: infoTitle, description: instrumentDescription};
			moveGroup(infoSceneElements, infoScenePositions);
			showGroup(infoSceneElements);
						
			// ToDo: Show 'scan' button
			break;
		case Scenes.InfoMulti:
			infoStateShared();
			infoTitle.setAttribute('value', titleValues.multiTitle);
			instrumentDescription.setAttribute('value', descriptionValues.multiDesc);
			infoSceneElements = {multi: instruments.multi, title: infoTitle, description: instrumentDescription};
			moveGroup(infoSceneElements, infoScenePositions);
			showGroup(infoSceneElements);
						
			// ToDo: Show 'scan' button
			break;
		case Scenes.InfoSolar:
			infoStateShared();
			infoTitle.setAttribute('value', titleValues.solarTitle);
			instrumentDescription.setAttribute('value', descriptionValues.solarDesc);
			infoSceneElements = {solar: instruments.solar, title: infoTitle, description: instrumentDescription};
			moveGroup(infoSceneElements, infoScenePositions);
			showGroup(infoSceneElements);
						
			// ToDo: Show 'scan' button
			break;
		case Scenes.InfoXband:
			infoStateShared();
			infoTitle.setAttribute('value', titleValues.xbandTitle);
			instrumentDescription.setAttribute('value', descriptionValues.xbandDesc);
			infoSceneElements = {xband: instruments.xband, title: infoTitle, description: instrumentDescription};
			moveGroup(infoSceneElements, infoScenePositions);
			showGroup(infoSceneElements);
						
			// ToDo: Show 'scan' button
			break;
		default:
			console.log("Error: Cannot advance to unknown scene state");
	}
}

// Retreat to scene state s
function retreatState(s) {
	console.log("retreatState " + s.description); 
	sceneState = s;
	updateDebugText();

	switch (sceneState) {
		case Scenes.Opening:
			// Hide spacecraft scene elements
			document.getElementById("backButton").style.display = "none";
			hideGroup(spacecraftSceneElements);

			// Show logo image/text
			document.getElementById("applogo").style.display = "block";
			// Show home button
			document.getElementById("homeButton").style.display = "block";
			moveGroup(openingSceneElements, openingScenePositions);
			showGroup(openingSceneElements);
			break;
		case Scenes.Spacecraft:
			hideGroup(selectionSceneElements);
			// Show spacecraft scene
			moveGroup(spacecraftSceneElements, spacecraftScenePositions);
			showGroup(spacecraftSceneElements);

			// ToDo: Show instrument dashed circle outlines
			// ToDo: Show 'tap' image over spacecraft

			break;
		case Scenes.Selection:
			hideGroup(infoSceneElements);
			
			// Show selection scene
			moveGroup(selectionSceneElements, selectionScenePositions);
			showGroup(selectionSceneElements);

			break;
		default:
			console.log("Error: Cannot retreat to unknown scene state");
	}
}

function infoStateShared() {
	hideGroup(selectionSceneElements);
}

function hideGroup(group) {
	Object.values(group).forEach(val => {
		if (val != null) val.setAttribute('visible', 'false');
	});
}

function showGroup(group) {
	Object.values(group).forEach(val => {
		if (val != null) val.setAttribute('visible', 'true');
	});
}

function moveGroup(group, positions) {
	pos = Object.values(positions);
	Object.values(group).forEach((obj, index) => {
		if (obj != null) obj.setAttribute('position', pos[index]);
	});
}