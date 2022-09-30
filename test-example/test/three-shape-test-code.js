const THREE = require('three');
const scene = new THREE.Scene();

// var innerWidth = window.innerWidth;
// var innerHeight = window.innerHeight;

var innerHeight = 500;
var innerWidth = 500;

var ThreeShape = {};

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
camera.aspect = innerWidth / innerHeight;
camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer({antialias: true});
// renderer.setClearColor("#0a0a0a");

// renderer.setSize(innerWidth, innerHeight);

// document.body.appendChild(renderer.domElement);

var pointLight = new THREE.PointLight(0xffffff, 1, 1000);
pointLight.position.set(0, 0, 0);
scene.add(pointLight);
var pointLight2 = new THREE.PointLight(0xffffff, 1, 1000);
pointLight2.position.set(0, 0, 5);
scene.add(pointLight2);
var pointLight3 = new THREE.PointLight(0x1b00e7, 1, 500);
pointLight3.position.set(10, 0, 10);
scene.add(pointLight3);
var pointLight4 = new THREE.PointLight(0xbdaba6, 1, 500);
pointLight4.position.set(-10, 0, 20);
scene.add(pointLight4);
var dodecaGeometry = new THREE.DodecahedronGeometry(1, 1);
var dodecaMat = new THREE.MeshLambertMaterial({ color: 0x524f4e });
var dodeca = new THREE.Mesh(dodecaGeometry, dodecaMat);
dodeca.scale.set(1, 1.1, 1);
dodeca.rotation.z = 2;

scene.add(dodeca);

function addStars() {
    for (let i = 0; i < 1000; i++) {
        const geometry = new THREE.CircleGeometry( 1, 12 );
        const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
        const circle = new THREE.Mesh( geometry, material );
        scene.add( circle );

        circle.position.x = (Math.random() - 0.5) * 1000;
        circle.position.y = (Math.random() - 0.5) * 1000;
        circle.position.z = (Math.random() - 0.5) * 1500 - 700;
    }
}

function animate() {
    // requestAnimationFrame(animate);
    dodeca.rotation.x += 0.007;
    dodeca.rotation.y += 0.007;
    dodeca.rotation.z += 0.007;
    // renderer.render(scene, camera);
}

ThreeShape.detectObject = function() {
    let objectsInScene = scene.children;
    if (objectsInScene.length > 0) {
        for (let i = 0; i < objectsInScene.length; i++) {
            if (objectsInScene[i].type === "Mesh") {
                return true;
            }
        }
    }
}

if (typeof exports !== 'undefined')
{
  module.exports = ThreeShape;
}

animate();
addStars();