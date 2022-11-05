import * as THREE from 'three'
import { OrbitControls } from './jsm/controls/OrbitControls.js'
import { FontLoader } from './jsm/loaders/FontLoader.js'
import { TextGeometry } from './jsm/geometries/TextGeometry.js'
import { Camera, PlaneGeometry } from 'three'
import {GUI} from './jsm/libs/lil-gui.module.min.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 15

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
scene.add( ambientLight );

const planeGeometry = new THREE.PlaneGeometry( 1, 1 );
    const planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( planeGeometry, planeMaterial );
    //plane.position.y=10;
    scene.add( plane );

    const planeGeometry2 = new THREE.PlaneGeometry( 1, 1 );
    const planeMaterial2 = new THREE.MeshBasicMaterial( {color: 0x42fe8c, side: THREE.DoubleSide} );
    const plane2 = new THREE.Mesh( planeGeometry2, planeMaterial2 );
    plane2.position.y=5;
    scene.add( plane2 );

    var position = 1;
    var position2 = 0;
    var increment= 1;
    var counter = 0;
    function buttonFunction() {
        switch(position) {
            case(0): {
                plane.scale.set(1,1,1);
                plane.position.x=0;
                plane2.scale.set(1,1,1);
                plane2.position.x=0;
                increment=1;
                position=1;
                position2=0;
            } break;
            case(1): {
                plane.scale.set(2,1,1);
                plane.position.x+=.5;
                counter=0;
                position=2;
                position2=1;
            } break;
            case(2): {
                plane.scale.set(3,1,1);
                plane.position.x+=.5;
                counter=0;
                position=3;
                position2=1;
            } break;
            case(3): {
                plane.scale.set(4,1,1);
                plane.position.x+=.5;
                counter=0;
                position=4;
                position2=1;
            } break;
            case(4): {
                plane.scale.set(5,1,1);
                plane.position.x+=.5;
                counter=0;
                position=5;
                position2=1;
            } break;
            case(5): {
                plane.scale.set(6,1,1);
                plane.position.x+=.5;
                counter=0;
                position=0;
                position2=1;
            } break;
        }
    }
    
    function addFuel() {
        if(counter<1000){
            increment+=.001;
            plane2.scale.set(increment,1,1);
            plane2.position.x+=.0005;
            counter+=1;
            console.log(counter);
        }else {
            position2=0;
        }
        

    }

    var params = {
        AddFuel: buttonFunction
    };    
    var gui = new GUI();
    var folder = gui.addFolder('Fuel Button');    
    folder.add(params, 'AddFuel');
    folder.open();

    window.addEventListener(
        'resize',
        () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
            render()
        },
        false
    )

    function animate() {
        requestAnimationFrame(animate)
        if(position2===1){
            addFuel();
        }
        render()
    }
    
    function render() {
        renderer.render(scene, camera)
    }
    
    animate()