"use strict";
export class GameManager {
  firstSceneElements = [];
  secondSceneElements = [];
  thirdSceneElements = [];
  currentScreen = 1;
  _overlay = null;
  _ironClicked = false;
  _nickelClicked = false;
  _siliconClicked = false;

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

    var arrowShape = this.placeElement('a-plane', { x: -5.5, y: 0.8, z: -2 }, '0.8 0.5 1', 'arrow',
      'property: position; to: 0.5 0.8 -2; loop: false; dur: 1000; easing: linear',
      'color:white; transparent: true; src:#arrow;repeat: 1;');
    arrowShape.setAttribute('click-event', '');
    arrowShape.addEventListener('click', function () {
      this.buildSecondScreen();
    }.bind(this));
    this.firstSceneElements.push(arrowShape);

    var instructionsText = this.placeElement('a-text', { x: -0.1, y: 2, z: -1 }, '0.25 0.25 0.25', 'text',
      'color:white; src:#text;repeat: 1;');
      instructionsText.setAttribute('position', '0.05 1.17 -0.25');
    instructionsText.setAttribute('value', ' ');
    instructionsText.appendChild(this.introInformation());
    this.firstSceneElements.push(instructionsText);

    const plane = document.createElement('a-plane');
    plane.setAttribute('color', '#000000');
    plane.setAttribute('opacity', '0.7');
    plane.setAttribute('width', '5');
    plane.setAttribute('height', '8');
    plane.setAttribute('position', '0 0 -2.55');
    document.querySelector('a-scene').appendChild(plane);
    this.firstSceneElements.push(plane);
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

    var satellite = document.createElement('a-entity');
    satellite.setAttribute('id', 'satellite');
    satellite.setAttribute('gltf-model', '#satellite');
    satellite.setAttribute('position', '0.03 0.9 -0.5');
    satellite.setAttribute('scale', '0.015 0.014 0.014');
    satellite.setAttribute('rotation', '10 -90 -30');
    scene.appendChild(satellite);
    this.secondSceneElements.push(satellite);


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

    // // Arrow to skip game and go to third screen
    // var arrow2 = document.createElement('a-plane');
    // arrow2.setAttribute('position', '0 0.8 -2');
    // arrow2.setAttribute('scale', '0.8 0.5 1');
    // arrow2.setAttribute('id', 'arrow2');
    // arrow2.setAttribute('material', 'color:white; transparent: true; src:#arrow;repeat: 1;');
    // arrow2.setAttribute('click-event', '');
    // arrow2.addEventListener('click', function () {
    //   this.takedownSecondScreen();
    //   this.buildThirdScreen();
    // }
    //   .bind(this));
    // scene.appendChild(arrow2);
    // this.secondSceneElements.push(arrow2);
  }

  buildThirdScreen() {
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
    computer.setAttribute('position', '0 0 -10');
    computer.setAttribute('scale', '0.05 0.05 0.05');
    var scene = document.querySelector('a-scene');
    scene.appendChild(computer);
    computer.setAttribute('animation', 'property: position; to: 1.2 0.5 -1.5; loop: false; dur: 1000; easing: linear');
    // this.thirdSceneElements.push(computer);

    var nickel = document.createElement('a-entity');
    nickel.setAttribute('id', 'Nickel');
    nickel.setAttribute('gltf-model', '#nickel');
    nickel.setAttribute('position', '-0.3 1.7 -1');
    nickel.setAttribute('scale', '0.3 0.3 0.3');
    nickel.setAttribute('clickable', '');
    scene.appendChild(nickel);
    nickel.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 9000; easing: linear');
    this.thirdSceneElements.push(nickel);

    var nickBox = this.addHitbox(nickel);
    nickBox.setAttribute('click-event', '');
    nickBox.setAttribute('clikable', '');
    nickBox.addEventListener('click', function () {
      this.elementClick(scene, nickel);
    }.bind(this));
    this.thirdSceneElements.push(nickBox);

    var nickelGlow = this.addGlow(scene, '-0.35 1.7 -1', 0.8, 0.8, '#70a4c2');
    this.thirdSceneElements.push(nickelGlow);

    var iron = document.createElement('a-entity');
    iron.setAttribute('id', 'Iron');
    iron.setAttribute('gltf-model', '#iron');
    iron.setAttribute('position', '0.1 1 -0.9');
    iron.setAttribute('scale', '0.0006 0.0006 0.0006');
    scene.appendChild(iron);
    iron.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 9000; easing: easeInOutSine');
    this.thirdSceneElements.push(iron);

    var ironGlow = this.addGlow(scene, '0 1.3 -0.9', 0.8, 0.8, '#918066');
    this.thirdSceneElements.push(ironGlow);

    iron.setAttribute('click-event', '');
    iron.addEventListener('click', function () {
      this.elementClick(scene, iron);
    }.bind(this));

    var silicone = document.createElement('a-entity');
    silicone.setAttribute('id', 'Silicon');
    silicone.setAttribute('gltf-model', '#silicone');
    silicone.setAttribute('position', '0.35 1.5 -1.5');
    silicone.setAttribute('scale', '0.005 0.005 0.005');
    scene.appendChild(silicone);
    silicone.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 9000; easing: easeInOutSine');
    silicone.setAttribute('click-event', '');
    silicone.addEventListener('click', function () {
      this.elementClick(scene, silicone);
    }.bind(this));
    var siliconeGlow = this.addGlow(scene, '0.3 1.7 -1.6', 1, 1, '#f7f7f7');
    this.thirdSceneElements.push(siliconeGlow);
    this.thirdSceneElements.push(silicone);


    const parentEntity2 = document.createElement("a-entity");
    this.createCell("Click an element to view it!", 1, 0.1, parentEntity2, "top", "#0dff00", "1.5 1.5 1.5");
    parentEntity2.setAttribute("position", "-1 1.9 -1");
    scene.appendChild(parentEntity2);
    parentEntity2.setAttribute('animation', 'property: scale; from: 1 1 0; to: 1 1 20; loop: true; dur: 1000; easing: linear; dir: alternate');
  }

  addHitbox(entity) {
    // Create the invisible hitbox entity
    var hitbox = document.createElement('a-box');
    hitbox.setAttribute('geometry', 'width: 1; height: 1; depth: 1;');
    var sourcePosition = entity.getAttribute('position');

    hitbox.setAttribute('clickable', '');
    hitbox.setAttribute('position', sourcePosition);
    hitbox.setAttribute('material', 'visible: false;');

    // Add the hitbox entity as a child of the main box entity
    entity.appendChild(hitbox);

    return hitbox;
  }

  elementClick(scene, entity, entityGlow) {
    console.log("clicked " + entity.id);
    this.focusElement(scene, entity);
  }

  focusElement(scene, entity, entityGlow) {
    // entity.removeAttribute('animation');
    let infoText;
    if (entity.id == "Nickel") {
      infoText = this.nickelInformation();
    } else if (entity.id == "Iron") {
      infoText = this.ironInformation();
    } else if (entity.id == "Silicon") {
      infoText = this.siliconInformation();
    }
    this.createElementDialog(scene, entity, infoText);
  }

  createElementDialog(scene, entity, infoText) {
    // check if an overlay already exists before creating a new one
    if (!this._overlay) {
      console.log("creating dialog for " + entity.id);

      // Create the overlay entity with the semi-transparent plane
      const overlay = document.createElement('a-entity');
      overlay.setAttribute('id', 'overlay');
      overlay.setAttribute('position', '0 0 -1');

      const plane = document.createElement('a-plane');
      plane.setAttribute('color', '#000000');
      plane.setAttribute('opacity', '0.7');
      plane.setAttribute('width', '1');
      plane.setAttribute('height', '1');
      plane.setAttribute('position', '0 1.8 0.3');

      const text = infoText;

      // Create the button to remove the overlay
      const button = document.createElement('a-plane');
      button.setAttribute('position', '0 1.5 0.4');
      button.setAttribute('height', '0.15');
      button.setAttribute('width', '0.25');
      button.setAttribute('src', '#ok');
      button.setAttribute('class', 'clickable');
      button.setAttribute('transparent', 'true');

      button.addEventListener('click', () => {
        // remove the overlay and its children from the scene
        overlay.parentElement.removeChild(overlay);
        this._overlay = null;

        // If all 3 elements have been clicked, display the "COMPLETE!" overlay
        if (this._ironClicked && this._nickelClicked && this._siliconClicked) {
          console.log("all elements clicked");
          this.splosion('#031cfc');
          const completeParent = document.createElement("a-entity");
          const completeOverlay = document.createElement('a-entity');
          completeOverlay.setAttribute('id', 'complete-overlay');
          completeOverlay.setAttribute('position', '0 0 -1');
          completeParent.appendChild(completeOverlay);

          const completePlane = document.createElement('a-plane');
          completePlane.setAttribute('color', '#ffca4f');
          completePlane.setAttribute('opacity', '0.7');
          completePlane.setAttribute('width', '1');
          completePlane.setAttribute('height', '1');
          completePlane.setAttribute('position', '0 1.8 0.3');
          // completeOverlay.setAttribute('animation', 'property: scale; from: 1 1 0; to: 1 1 20; loop: true; dur: 1000; easing: linear; dir: alternate');
          completeOverlay.appendChild(completePlane);

          const completeText = document.createElement('a-plane');
          completeText.setAttribute("position", "0 2.1 0.4");
          completeText.setAttribute('height', '0.15');
          completeText.setAttribute('width', '0.5');
          completeText.setAttribute('src', '#complete');
          completeText.setAttribute('class', 'clickable');
          completeText.setAttribute('transparent', 'true');
          completeOverlay.appendChild(completeText);

          const conclusionText = this.conclusionInformation();
          completeOverlay.appendChild(conclusionText);

          const nextButton = document.createElement('a-plane');
          nextButton.setAttribute('position', '0 1.4 0.4');
          nextButton.setAttribute('height', '0.15');
          nextButton.setAttribute('width', '0.5');
          nextButton.setAttribute('src', '#return');
          nextButton.setAttribute('class', 'clickable');
          nextButton.setAttribute('transparent', 'true');
          completeOverlay.appendChild(nextButton);

          nextButton.addEventListener('click', () => {
            completeOverlay.parentElement.removeChild(completeOverlay);
            this._overlay = null;
            window.location.href = "../../../index.html";
          });
          document.querySelector('a-scene').appendChild(completeParent);
        }
      });

      // Append the elements to the scene and overlay entity
      overlay.appendChild(plane);
      overlay.appendChild(text);
      overlay.appendChild(button);
      scene.appendChild(overlay);

      // update the reference to the overlay
      this._overlay = overlay;
    } else {
      console.log("Overlay dialog is already open!");
    }
  }

  splosion(color) {
    var scene = document.querySelector('a-scene');
    var particleSystem = document.createElement('a-entity');

    particleSystem.setAttribute('position', '0 1.6 -3');
    particleSystem.setAttribute('scale', '1 1 1');
    particleSystem.setAttribute('particle-system', 'opacity: 0.8; maxAge: 0.5; accelerationValue: 0 1 0; size: 1; velocityValue: 0 1 -3; size: 1; texture: dist/images/star.png; color: ' + color + '; particleCount: 1000');
    scene.appendChild(particleSystem);

    var particleSystem2 = document.createElement('a-entity');

    particleSystem2.setAttribute('position', '0 1.6 -3');
    particleSystem2.setAttribute('scale', '1 1 1');
    particleSystem2.setAttribute('particle-system', 'opacity: 0.8; maxAge: 0.5; accelerationValue: 0 1 0; size: 1; velocityValue: 0 1 -3; size: 1; texture: dist/images/star.png; color: ' + color + '; particleCount: 1000');
    scene.appendChild(particleSystem2);
  }

  conclusionInformation() {
    const parent = document.createElement('a-entity');

    const paragraphOneValue = "Congratulations on completing the Psyche Asteroid Materials Virtual Reality Experience! Through your journey, you have gained valuable insight into the unique composition and properties of Psyche. ";
    const paragraphOne = this.generateParagraph(paragraphOneValue, "#00008a");
    paragraphOne.setAttribute("position", "0 1.97 0.4");
    paragraphOne.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphOne);

    const paragraphTwoValue = "The asteroid's high concentration of metal, particularly iron, has sparked the interest of scientists worldwide, and your exploration has contributed to our understanding of its origin and formation.";
    const paragraphTwo = this.generateParagraph(paragraphTwoValue, "#00008a");
    paragraphTwo.setAttribute("position", "0 1.80 0.4");
    paragraphTwo.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphTwo);

    const paragraphThreeValue = "More research is needed to really understand and solve the mysteries of this super cool asteroid.";
    const paragraphThree = this.generateParagraph(paragraphThreeValue, "#00008a");
    paragraphThree.setAttribute("position", "0 1.70 0.4");
    paragraphThree.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphThree);

    const paragraphFourValue = "We hope you have enjoyed this experience and will stay tuned to find out more about what scientists discover about the Psyche asteroid on the mission!";
    const paragraphFour = this.generateParagraph(paragraphFourValue, "#00008a");
    paragraphFour.setAttribute("position", "0 1.55 0.4");
    paragraphFour.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphFour);


    return parent;
  }

  introInformation() {
    const parent = document.createElement('a-entity');
    const titleValue = "Welcome to NASA!";
    const title = this.generateParagraph(titleValue, "#f263ff");
    title.setAttribute("position", "0 2.155 0.4");
    title.setAttribute("scale", "1.4 1.4 1.4");
    parent.appendChild(title);

    const paragraphOneValue = "I'm Dr Lindy Elkins-Tanton, and I need your help to explore an awesome asteroid called Psyche!";
    const paragraphOne = this.generateParagraph(paragraphOneValue, "#ffd83d");
    paragraphOne.setAttribute("position", "0 2.05 0.4");
    paragraphOne.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphOne);

    const paragraphTwoValue = "We'll need to use a huge satellite to collect information about Psyche's surface and find out what it's made of.";
    const paragraphTwo = this.generateParagraph(paragraphTwoValue, "#ffd83d");
    paragraphTwo.setAttribute("position", "0 1.95 0.4");
    paragraphTwo.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphTwo);

    const paragraphThreeValue = "Click on the Psyche asteroid to send a satellite signal on the next screen. Once you've discovered all 3 elements, we'll be able to analyze the information in the lab!";
    const paragraphThree = this.generateParagraph(paragraphThreeValue, "#ffd83d");
    paragraphThree.setAttribute("position", "0 1.8 0.4");
    paragraphThree.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphThree);

    const paragraphFourValue = "Ready to become a NASA scientist? Click the button below to start your journey!";
    const paragraphFour = this.generateParagraph(paragraphFourValue, "#ffd83d");
    paragraphFour.setAttribute("position", "0 1.65 0.4");
    paragraphFour.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphFour);


    return parent;
  }

  ironInformation() {
    this._ironClicked = true;
    const parent = document.createElement('a-entity');
    const titleValue = "Iron";
    const title = this.generateParagraph(titleValue, "#e88000");
    title.setAttribute("position", "0 2.155 0.4");
    title.setAttribute("scale", "1.4 1.4 1.4");
    parent.appendChild(title);

    const paragraphOneValue = "Iron is a really important metal that helps make things strong and tough!";
    const paragraphOne = this.generateParagraph(paragraphOneValue, "#ffd83d");
    paragraphOne.setAttribute("position", "0 2.05 0.4");
    paragraphOne.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphOne);

    const paragraphTwoValue = "Scientists have found that Psyche is not the same brightness all over, which means that some parts of it have a lot more metal in some areas than others, especially iron.";
    const paragraphTwo = this.generateParagraph(paragraphTwoValue, "#1cffec");
    paragraphTwo.setAttribute("position", "0 1.95 0.4");
    paragraphTwo.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphTwo);

    const paragraphThreeValue = "Scientists think that the high metal content in these areas is due to something called \"ferrovolcanic activity,\" which is like a volcano, but instead of lava, it spews out hot metal!";
    const paragraphThree = this.generateParagraph(paragraphThreeValue, "#f20400");
    paragraphThree.setAttribute("position", "0 1.8 0.4");
    paragraphThree.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphThree);

    const paragraphFourValue = "This is really interesting because it tells us that Psyche might have had some really unique geological activity in the past!";
    const paragraphFour = this.generateParagraph(paragraphFourValue, "#1cffec");
    paragraphFour.setAttribute("position", "0 1.65 0.4");
    paragraphFour.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphFour);

    return parent;
  }

  nickelInformation() {
    this._nickelClicked = true;
    const parent = document.createElement('a-entity');
    const titleValue = "Nickel";
    const title = this.generateParagraph(titleValue, "#d3e5e8");
    title.setAttribute("position", "0 2.155 0.4");
    title.setAttribute("scale", "1.4 1.4 1.4");
    parent.appendChild(title);

    const paragraphOneValue = "Nickel on Psyche helps scientists learn about how it was created.";
    const paragraphOne = this.generateParagraph(paragraphOneValue, "#a1cf9d");
    paragraphOne.setAttribute("position", "0 2.05 0.4");
    paragraphOne.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphOne);

    const paragraphTwoValue = "They think the asteroid is made of both metal and non-metal stuff, and has a certain density. By looking at the nickel, researchers can figure out how mixed up the metal and non-metal parts are.";
    const paragraphTwo = this.generateParagraph(paragraphTwoValue, "#8ab9ff");
    paragraphTwo.setAttribute("position", "0 1.95 0.4");
    paragraphTwo.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphTwo);

    const paragraphThreeValue = "By using special tools, they can see how much nickel is in the metal on Psyche, which can help them figure out if the asteroid was once part of a bigger space rock or if it formed on its own. ";
    const paragraphThree = this.generateParagraph(paragraphThreeValue, "#b98aff");
    paragraphThree.setAttribute("position", "0 1.8 0.4");
    paragraphThree.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphThree);

    const paragraphFourValue = "This can help us understand more about the history of the solar system and how different objects formed over time!";
    const paragraphFour = this.generateParagraph(paragraphFourValue, "#8ab9ff");
    paragraphFour.setAttribute("position", "0 1.65 0.4");
    paragraphFour.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphFour);

    return parent;
  }

  siliconInformation() {
    this._siliconClicked = true;
    const parent = document.createElement('a-entity');
    const titleValue = "Silicon";
    const title = this.generateParagraph(titleValue, "#ffbf1c");
    title.setAttribute("position", "0 2.155 0.4");
    title.setAttribute("scale", "1.4 1.4 1.4");
    parent.appendChild(title);

    const paragraphOneValue = "Psyche has tiny rocks called \"silicates,\" which are like little pieces of rock that reflect a lot of light. ";
    const paragraphOne = this.generateParagraph(paragraphOneValue, "#ffbb91");
    paragraphOne.setAttribute("position", "0 2.05 0.4");
    paragraphOne.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphOne);

    const paragraphTwoValue = "Scientists found out that these silicates are similar to the metals found in a special type of space rock called \"enstatite\" or \"CH/CB chondritic.\" This means that Psyche has different layers, with some layers having more metal than others. ";
    const paragraphTwo = this.generateParagraph(paragraphTwoValue, "#ff91ff");
    paragraphTwo.setAttribute("position", "0 1.9 0.4");
    paragraphTwo.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphTwo);

    const paragraphThreeValue = "By using special cameras, scientists can study these silicates and learn more about what Psyche is made of.";
    const paragraphThree = this.generateParagraph(paragraphThreeValue, "#a6ffc6");
    paragraphThree.setAttribute("position", "0 1.75 0.4");
    paragraphThree.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphThree);

    const paragraphFourValue = "The Imager on the Psyche spacecraft helps find and map the iron silicates, while the Neutron Spectrometer (NS) helps measure the metal-to-silicate ratio really well!";
    const paragraphFour = this.generateParagraph(paragraphFourValue, "#ff91ff");
    paragraphFour.setAttribute("position", "0 1.65 0.4");
    paragraphFour.setAttribute("scale", "0.6 0.6 0.6");
    parent.appendChild(paragraphFour);

    return parent;
  }

  generateParagraph(textValue, color) {
    const paragraph = document.createElement("a-entity");
    paragraph.setAttribute("text", {
      value: textValue,
      align: "center",
      color: color
    });
    return paragraph;
  }


  addGlow(scene, position, width, height, color) {
    const imageEl = document.createElement('a-image');
    imageEl.setAttribute('id', 'glow');
    imageEl.setAttribute('position', position);
    imageEl.setAttribute('width', width);
    imageEl.setAttribute('height', height);
    imageEl.setAttribute('src', '#glow');
    imageEl.setAttribute('color', color);
    imageEl.setAttribute('material', 'transparent: true; opacity: 1.0; alphaTest: 0.01;');
    imageEl.setAttribute('animation__pulse', 'property: material.opacity; from: 1.0; to: 0.0; dur: 2000; loop: true; dir: alternate; easing: linear;');
    scene.appendChild(imageEl);
    return imageEl;
  }


  // Helper function to create a cell
  createCell(textValue, x, y, parent, cellID, textColor, scale) {
    const cellEntity = document.createElement("a-entity");
    cellEntity.setAttribute("text", {
      value: textValue,
      align: "center",
      color: textColor
    });
    cellEntity.setAttribute("position", `${x} ${y} 0`);
    cellEntity.setAttribute("scale", scale);
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
      setTimeout(this.clickArrive('yellow').bind(this), 1500);
    }
  }

  clickArrive(color) {
    console.log("click when arrive");
    var scene = document.querySelector('a-scene');
    var psyche = document.getElementById('psyche');
    const imageEl = document.createElement('a-image');
    imageEl.setAttribute('id', 'glow');
    imageEl.setAttribute('position', '0 1.8 -5');
    imageEl.setAttribute('width', '3');
    imageEl.setAttribute('height', '3');
    imageEl.setAttribute('src', '#glow');
    imageEl.setAttribute('color', color);
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
      this.takedownSecondScreen();
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
