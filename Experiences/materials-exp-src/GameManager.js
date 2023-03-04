"use strict";
export class GameManager {
  firstSceneElements = [];
  secondSceneElements = [];
  thirdSceneElements = [];
  currentScreen = 1;

  nextScreen() {
    this.incrementScreen();
    this.buildNextScreen();
  }

  prevScreen() {
    this.decrementScreen();
    this.takedownThisScreen();
  }

  buildNextScreen() {
    // build next screen here by calling the appropriate method based on screen count 
    switch (this.currentScreen) {
      case 2:
        this.buildSecondScreen();
        break;
      case 3:
        this.buildThirdScreen();
        break;
      case 4:
        this.buildFourthScreen();
        break;
      case 5:
        this.buildFifthScreen();
        break;
      case 6:
        this.buildSixthScreen();
        break;
      default:
        break;
    }
  }

  buildFirstScreen() {
    var sky = document.createElement('a-sky');
    sky.setAttribute('src', '#tiles');
    sky.setAttribute('rotation', '0 -130 0');
    sky.setAttribute('material', 'color: #4e515c; repeat: 10 10 1;');
    sky.setAttribute('id', 'tilesBG');
    document.querySelector('a-scene').appendChild(sky);
    this.firstSceneElements.push(sky);

    var lab = document.createElement('a-entity');
    lab.setAttribute('gltf-model', '#lab');
    lab.setAttribute('position', '1 1 -4');
    lab.setAttribute('rotation', '0 260 0');
    lab.setAttribute('scale', '3 3 2');
    lab.setAttribute('id', 'labModel');
    document.querySelector('a-scene').appendChild(lab);
    this.firstSceneElements.push(lab);

    var scientist = this.placeElement('a-plane', { x: -4, y: 2, z: -3 }, '1 2 1', 'scientist',
      'property: position; to: -0.5 1.2 -1.5; loop: false; dur: 900; easing: linear',
      'color:white; transparent: true; src:#scientist;repeat: 1;');
    this.firstSceneElements.push(scientist);

    var boxHolder = this.placeElement('a-plane', { x: 0.3, y: 2, z: -2 }, '40 0.001 1', 'instructions',
      'property: scale; to: 2 2 1; loop: false; dur: 1000; easing: linear',
      'color:white; transparent: true; src:#boxHolder;repeat: 1;');
    this.firstSceneElements.push(boxHolder);

    var arrowShape = this.placeElement('a-plane', { x: -5.5, y: 0.8, z: -2 }, '0.8 0.5 1', 'arrow',
      'property: position; to: 0.5 0.8 -2; loop: false; dur: 1000; easing: linear',
      'color:white; transparent: true; src:#arrow;repeat: 1;');
    arrowShape.setAttribute('click-event', '');
    arrowShape.addEventListener('click', function () {
      this.buildSecondScreen();
    }.bind(this));
    this.firstSceneElements.push(arrowShape);

    var instructionsText = this.placeElement('a-text', { x: -0.1, y: 2, z: -1 }, '0.3 0.3 0.3', 'text',
      'property: position; to: -0.1 2 -1; loop: false; dur: 1000; easing: linear',
      'color:white; transparent: true; src:#text;repeat: 1;');
    instructionsText.setAttribute('value', 'Instructions Test');
    this.firstSceneElements.push(instructionsText);
  }

  buildSecondScreen() {
    this.takedownFirstScreen();

    // build second screen here
    var scene = document.querySelector('a-scene');
    var spaceSky = document.createElement('a-sky');
    spaceSky.setAttribute('src', '#spaceBG');
    spaceSky.setAttribute('id', 'spaceBG');
    spaceSky.setAttribute('material', 'color: #ffffff; repeat: 10 10 1;');
    scene.appendChild(spaceSky);
    this.secondSceneElements.push(spaceSky);

    var psyche = document.createElement('a-entity');
    psyche.setAttribute('class', 'clickable');
    psyche.setAttribute('id', 'psyche');
    psyche.setAttribute('gltf-model', '#psyche');
    psyche.setAttribute('position', '0.03 1.7 -2');
    psyche.setAttribute('scale', '0.01 0.01 0.01');
    psyche.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 9000; easing: linear');
    psyche.setAttribute('click-event2', '');
    psyche.addEventListener('click', function () {
      this.psycheClick();
    }.bind(this));
    scene.appendChild(psyche);
    this.secondSceneElements.push(psyche);

    const parentEntity = document.createElement("a-entity");

    this.createCell("??", -0.5, 0.1, parentEntity, "element1", "white");
    this.createCell("??", 0, 0.1, parentEntity, "element2", "white");
    this.createCell("??", 0.5, 0.1, parentEntity, "element3", "white");
    this.createCell(0, -0.5, -0.1, parentEntity, "counter1", "white");
    this.createCell(0, 0, -0.1, parentEntity, "counter2", "white");
    this.createCell(0, 0.5, -0.1, parentEntity, "counter3", "white");

    parentEntity.setAttribute("position", "0 2.2 -1");
    parentEntity.setAttribute("scale", "0.7 0.7 0.7");
    scene.appendChild(parentEntity);
    this.secondSceneElements.push(parentEntity);

    // Arrow to skip game and go to third screen
    var arrow2 = document.createElement('a-plane');
    arrow2.setAttribute('position', '0 0.8 -2');
    arrow2.setAttribute('scale', '0.8 0.5 1');
    arrow2.setAttribute('id', 'arrow2');
    arrow2.setAttribute('material', 'color:white; transparent: true; src:#arrow;repeat: 1;');
    arrow2.setAttribute('click-event', '');
    arrow2.addEventListener('click', function () {
      this.buildThirdScreen();
    }
      .bind(this));
    scene.appendChild(arrow2);
    this.secondSceneElements.push(arrow2);
  }

  buildThirdScreen() {
    this.takedownSecondScreen();
    var scene = document.querySelector('a-scene');
    console.log("third screen");
    var sky = document.createElement('a-sky');
    sky.setAttribute('src', '#tiles');
    sky.setAttribute('rotation', '0 -130 0');
    sky.setAttribute('material', 'color: #4e515c; repeat: 10 10 1;');
    sky.setAttribute('id', 'tilesBG');
    document.querySelector('a-scene').appendChild(sky);
    this.firstSceneElements.push(sky);

    var computer = document.createElement('a-entity');
    computer.setAttribute('id', 'computer');
    computer.setAttribute('gltf-model', '#computer');
    computer.setAttribute('position', '1 0 -10');
    computer.setAttribute('scale', '0.08 0.08 0.08');
    var scene = document.querySelector('a-scene');
    scene.appendChild(computer);
    computer.setAttribute('animation', 'property: position; to: 1 0 -2; loop: false; dur: 1000; easing: linear'); 
    this.thirdSceneElements.push(computer);

    var rock1 = document.createElement('a-entity');
    rock1.setAttribute('id', 'rock1');
    rock1.setAttribute('gltf-model', '#rock');
    // rock1.setAttribute('position', '0 5 -0.3');
    rock1.setAttribute('position', '-0.13 1.68 -0.16');
    rock1.setAttribute('scale', '0.008 0.008 0.008');
    scene.appendChild(rock1);
    // rock1.setAttribute('animation', 'property: position; to: -0.13 1.68 -0.16; loop: false; dur: 1000; easing: linear');
    rock1.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 9000; easing: linear');
    this.thirdSceneElements.push(rock1);

    const parentEntity2 = document.createElement("a-entity");
    this.createCell("Click to view element!", 1, 0.1, parentEntity2, "top", "black");
    parentEntity2.setAttribute("position", "-1 2 -1");
    scene.appendChild(parentEntity2);
    


  }

  // Helper function to create a cell
  createCell(textValue, x, y, parent, cellID, textColor) {
    const cellEntity = document.createElement("a-entity");
    cellEntity.setAttribute("text", {
      value: textValue,
      align: "center",
      color: textColor
    });
    cellEntity.setAttribute("position", `${x} ${y} 0`);
    cellEntity.setAttribute("scale", "2 2 2");
    cellEntity.setAttribute("id", cellID);
    parent.appendChild(cellEntity);
  }

  psycheClick() {
    if (document.getElementById('beam') != null) {
      var beam = document.getElementById('beam');
      beam.remove();
    } else {
      var beam = document.createElement('a-entity');
      beam.setAttribute('id', 'beam');
      beam.setAttribute('position', '0 -10 2');
      beam.setAttribute('particle-system', 'accelerationSpread: 0.1 0.1 0.1; opacitySpread: 0.0001; size: 0.5; velocitySpread: 0.001 0.001 0.001; rotationAngle: 120; sizeSpread: 0.0001; duration: 0.5; texture: dist/images/shockwave.png; color: #47a6ff,#44CC00');
      document.querySelector('a-scene').appendChild(beam);
      console.log("initial click");
      setTimeout(this.clickArrive.bind(this), 1500);
    }
  }

  clickArrive() {
    console.log("click when arrive");
    var scene = document.querySelector('a-scene');
    var psyche = document.getElementById('psyche');
    const imageEl = document.createElement('a-image');
    imageEl.setAttribute('id', 'glow');
    imageEl.setAttribute('position', '0 1.8 -5');
    imageEl.setAttribute('width', '3');
    imageEl.setAttribute('height', '3');
    imageEl.setAttribute('src', '#glow');
    imageEl.setAttribute('color', 'yellow');
    imageEl.setAttribute('material', 'transparent: true; opacity: 1.0; alphaTest: 0.01;');
    imageEl.setAttribute('animation__pulse', 'property: material.opacity; from: 1.0; to: 0.0; dur: 2000; loop: false; dir: alternate; easing: linear;');
    scene.appendChild(imageEl);

    var particleSystem = document.createElement('a-entity');

    particleSystem.setAttribute('position', '0 1.6 -3');
    particleSystem.setAttribute('particle-system', 'opacity: 0.8; maxAge: 0.5; accelerationValue: 0 1 0; size: 0.1; velocityValue: 0 1 -3; size: 0.09; texture: dist/images/star.png; color: #ffffff');
    scene.appendChild(particleSystem);
    setTimeout(() => {
      scene.removeChild(particleSystem);
    }, 1000);

    this.incrementValues();
  }

  takedownSceneElements(sceneElementsArray) {
    var scene = document.querySelector('a-scene');
    for (var i = 0; i < sceneElementsArray.length; i++) {
      var obj = sceneElementsArray[i];
      scene.removeChild(obj);
    }
  }


  takedownFirstScreen() {
    // takedown first screen here
    // remove what needs to be deleted
    this.takedownSceneElements(this.firstSceneElements);

    var scene = document.querySelector('a-scene');
    // animate others for effect
    for (var i = 0; i < scene.children.length; i++) {
      var child = scene.children[i];
      if (child.id == 'scientist') {
        child.setAttribute('animation__2', 'property: position; to: -6.5 1.2 -1.5; loop: false; dur: 900; easing: linear');
      }
      if (child.id == 'labModel') {
        child.setAttribute('animation', 'property: position; to: 0.5 -135.0 -2; loop: false; dur: 900; easing: linear');
      }
    }

  }

  takedownSecondScreen() {
    // takedown second screen here
    // remove what needs to be deleted
    this.takedownSceneElements(this.secondSceneElements);
  }

  // Helper method for creating elements
  placeElement(elementType, position, scale, id, animation, material) {
    var shape = document.createElement(elementType);
    shape.setAttribute('position', position);
    shape.setAttribute('scale', scale);
    shape.setAttribute('id', id);
    shape.setAttribute('animation', animation);
    shape.setAttribute('material', material);
    document.querySelector('a-scene').appendChild(shape);
    return shape;
  }

  // Increment when Psyche is clicked
  incrementValues() {
    var counter1 = document.querySelector('#counter1').getAttribute('text').value;
    var counter2 = document.querySelector('#counter2').getAttribute('text').value;
    var counter3 = document.querySelector('#counter3').getAttribute('text').value;
    // Initialize three values 
    let value1 = counter1;
    let value2 = counter2;
    let value3 = counter3;

    // Maximum value for each value
    const max = 3;

    // Generate a random number between 1 and 3
    var randomNumber = Math.floor(Math.random() * 3) + 1;

    // Increment the random value or another value if it's already at max
    switch (randomNumber) {
      case 1:
        if (value1 < max) {
          value1++;
        } else {
          this.incrementOtherValue(1, value1, value2, value3);
        }
        break;
      case 2:
        if (value2 < max) {
          value2++;
        } else {
          this.incrementOtherValue(2, value1, value2, value3);
        }
        break;
      case 3:
        if (value3 < max) {
          value3++;
        } else {
          this.incrementOtherValue(3, value1, value2, value3);
        }
        break;
    }

    if (value1 === max) {
      var element1 = document.getElementById('element1');
      element1.setAttribute('text', 'value', 'Detected!');
      console.log("Value 1 has reached its maximum of 3!");
    }
    if (value2 === max) {
      var element2 = document.getElementById('element2');
      element2.setAttribute('text', 'value', 'Detected!');
      console.log("Value 2 has reached its maximum of 3!");
    }
    if (value3 === max) {
      var element3 = document.getElementById('element3');
      element3.setAttribute('text', 'value', 'Detected!');
      console.log("Value 3 has reached its maximum of 3!");
    }

    // Log the updated values
    console.log(`Value 1: ${value1}, Value 2: ${value2}, Value 3: ${value3}`);


    document.querySelector('#counter1').setAttribute('text', 'value', value1);
    document.querySelector('#counter2').setAttribute('text', 'value', value2);
    document.querySelector('#counter3').setAttribute('text', 'value', value3);
  }

  // Helper function to increment a value that's not at max
  incrementOtherValue(valueNum, value1, value2, value3) {
    const max = 3;
    if (value1 < max && valueNum !== 1) {
      value1++;
    } else if (value2 < max && valueNum !== 2) {
      value2++;
    } else if (value3 < max && valueNum !== 3) {
      value3++;
    } else {
      console.log("All values are already at their maximum!");
      // Trigger end game screen here
      this.buildThirdScreen();
    }
}

incrementScreen() {
  this.currentScreen++;
}

decrementScreen() {
  this.currentScreen--;
}
}
