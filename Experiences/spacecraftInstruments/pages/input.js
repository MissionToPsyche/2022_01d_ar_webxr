AFRAME.registerComponent('spacecraft-select', {
	init: function () {
		var el = this.el; // spacecraft
		el.addEventListener('click', function () {
			console.log('spacecraft clicked');
			switch (sceneState) {
				case Scenes.Opening:
					advanceState(Scenes.Spacecraft);
					break;
				case Scenes.Spacecraft:
					advanceState(Scenes.Selection);
					break;
			}
		});
		console.log("init spacecraft-select");
		updateDebugText();
	}
});

AFRAME.registerComponent('gamma-select', {
	init: function () {
		var el = this.el; // gamma instrument
		el.addEventListener('click', function () {
			console.log('gamma clicked');
			if (sceneState == Scenes.Selection) {
				advanceState(Scenes.InfoGamma);
			}
		});
	}
});

AFRAME.registerComponent('magnet-select', {
	init: function () {
		var el = this.el; // magnet instrument
		el.addEventListener('click', function () {
			console.log('magnet clicked');
			if (sceneState == Scenes.Selection) {
				advanceState(Scenes.InfoMagnet);
			}
		});
	}
});

AFRAME.registerComponent('multi-select', {
	init: function () {
		var el = this.el; // multi instrument
		el.addEventListener('click', function () {
			console.log('multi clicked');
			if (sceneState == Scenes.Selection) {
				advanceState(Scenes.InfoMulti);
			}
		});
	}
});

AFRAME.registerComponent('solar-select', {
	init: function () {
		var el = this.el; // solar instrument
		el.addEventListener('click', function () {
			console.log('solar clicked');
			if (sceneState == Scenes.Selection) {
				advanceState(Scenes.InfoSolar);
			}
		});
	}
});

AFRAME.registerComponent('xband-select', {
	init: function () {
		var el = this.el; // xband instrument
		el.addEventListener('click', function () {
			console.log('xband clicked');
			if (sceneState == Scenes.Selection) {
				advanceState(Scenes.InfoXband);
			}
		});
	}
});