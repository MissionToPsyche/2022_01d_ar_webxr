"use strict";
export class GameManager {
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
        this.placeElement('a-plane', {x:-4, y:2, z:-3}, '1 2 1', 'scientist', 
        'property: position; to: -0.5 1.2 -1.5; loop: false; dur: 900; easing: linear',
        'color:white; transparent: true; src:#scientist;repeat: 1;');

        this.placeElement('a-plane', {x:0.3, y:2, z:-2}, '40 0.001 1', 'instructions',
        'property: scale; to: 2 2 1; loop: false; dur: 1000; easing: linear',
        'color:white; transparent: true; src:#boxHolder;repeat: 1;');

        var arrowShape = this.placeElement('a-plane', {x:-5.5, y:0.8, z:-2}, '0.8 0.5 1', 'arrow',
        'property: position; to: 0.5 0.8 -2; loop: false; dur: 1000; easing: linear',
        'color:white; transparent: true; src:#arrow;repeat: 1;');
        arrowShape.setAttribute('click-event', '');
        arrowShape.addEventListener('click', function() {
            this.buildSecondScreen();
        }.bind(this));
        
        var instructionsText = this.placeElement('a-text', {x:-0.1, y:2, z:-1}, '0.3 0.3 0.3', 'text',
        'property: position; to: -0.1 2 -1; loop: false; dur: 1000; easing: linear',
        'color:white; transparent: true; src:#text;repeat: 1;');
        instructionsText.setAttribute('value', 'Instructions Test');
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
        var psyche = document.createElement('a-entity');
        psyche.setAttribute('class', 'clickable');
        psyche.setAttribute('id', 'psyche');
        psyche.setAttribute('gltf-model', '#psyche');
        psyche.setAttribute('position', '0.03 1.7 -2');
        psyche.setAttribute('scale', '0.01 0.01 0.01');
        psyche.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 9000; easing: linear');
        psyche.setAttribute('click-event2', '');
        psyche.addEventListener('click', function() {
            this.psycheClick();
        }.bind(this));
        scene.appendChild(psyche);

        const parentEntity = document.createElement("a-entity");

        this.createCell("??", -0.5, 0.1, parentEntity, "element1");
        this.createCell("??", 0, 0.1, parentEntity, "element2");
        this.createCell("??", 0.5, 0.1, parentEntity, "element3");
        this.createCell(0, -0.5, -0.1, parentEntity, "counter1");
        this.createCell(0, 0, -0.1, parentEntity, "counter2");
        this.createCell(0, 0.5, -0.1, parentEntity, "counter3");

        parentEntity.setAttribute("position", "0 2.2 -1");
        parentEntity.setAttribute("scale", "0.7 0.7 0.7");
        scene.appendChild(parentEntity);
    }

    createCell(textValue, x, y, parent, cellID) {
        const cellEntity = document.createElement("a-entity");
        cellEntity.setAttribute("text", {
            value: textValue,
            align: "center",
            color: "white"
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


    takedownFirstScreen() {
        // takedown first screen here
        var scene = document.querySelector('a-scene');
        var objectsToDelete = [];
        for (var i = 0; i < scene.children.length; i++) {
            var child = scene.children[i];
            if (child.id == 'scientist') {
                child.setAttribute('animation', 'property: opacity; to: 0; loop: false; dur: 900; easing: linear');
                child.setAttribute('animation__2', 'property: position; to: -6.5 1.2 -1.5; loop: false; dur: 900; easing: linear');
                objectsToDelete.push(child);
            }
            if (child.id == 'instructions') {
                objectsToDelete.push(child);
            }
            if (child.id == 'arrow') {
                child.setAttribute('animation', 'property: position; to: 5.5 0.8 -2; loop: false; dur: 900; easing: linear');
                child.setAttribute('animation', 'property: opacity; to: 0; loop: false; dur: 900; easing: linear');
                objectsToDelete.push(child);
            }
            if (child.id == 'text') {
                objectsToDelete.push(child);
            }
            if (child.id == 'labModel') {
                child.setAttribute('animation', 'property: position; to: 0.5 -135.0 -2; loop: false; dur: 9000; easing: linear');
            }

            if (child.id == 'tilesBG') {
                scene.removeChild(child);
            }
        }
        for (var i = 0; i < objectsToDelete.length; i++) {
            var obj = objectsToDelete[i];
            obj.parentNode.removeChild(obj);
        }
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
                incrementOtherValue(1);
              }
              break;
            case 2:
              if (value2 < max) {
                value2++;
              } else {
                incrementOtherValue(2);
              }
              break;
            case 3:
              if (value3 < max) {
                value3++;
              } else {
                incrementOtherValue(3);
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

          // Helper function to increment a value that's not at max
          function incrementOtherValue(valueNum) {
            if (value1 < max && valueNum !== 1) {
              value1++;
            } else if (value2 < max && valueNum !== 2) {
              value2++;
            } else if (value3 < max && valueNum !== 3) {
              value3++;
            } else {
              console.log("All values are already at their maximum!");
              // Trigger end game screen here
            }
          }

        document.querySelector('#counter1').setAttribute('text', 'value', value1);
        document.querySelector('#counter2').setAttribute('text', 'value', value2);
        document.querySelector('#counter3').setAttribute('text', 'value', value3);
      }

    incrementScreen() {
        this.currentScreen++;
    }

    decrementScreen() {
        this.currentScreen--;
    }
}
