import * as THREE from 'three'
import { OrbitControls } from './jsm/controls/OrbitControls.js'
import { FontLoader } from './jsm/loaders/FontLoader.js'
import { TextGeometry } from './jsm/geometries/TextGeometry.js'
import { Camera, PlaneGeometry } from 'three'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 15

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.SphereGeometry(6,16,8)
const material = new THREE.MeshBasicMaterial({
    color: 0xffed00,
    wireframe: true,
})
const sphere = new THREE.Mesh(geometry, material)
sphere.position.z=-3;
scene.add(sphere)

const controls = new OrbitControls(sphere, renderer.domElement)

const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
scene.add( ambientLight );

const loader = new FontLoader();
    
loader.load('./fonts/droid/droid_sans_regular.typeface.json', function (font){
        const textGeometry = new TextGeometry(
            '            Instructions:\n'+  
            'Please scan each QR code\n'+ 
            '    to fuel the space craft\n'+ 
            '      and learn about the\n'+ 
            '        Psyche Asteroid\n', {
            font:font,
            size: 0.5,
            height: 1,
            color: 0xffffff
        } ) 
        
        const textMesh = new THREE.Mesh(textGeometry, [
            new THREE.MeshPhongMaterial({color: 0xffffff}),
            //new THREE.MeshPhongMaterial({color: 0xffffff})
        ])
        
        textMesh.position.x = -4;
        textMesh.position.y = 1.25;
        textMesh.position.z = 2;
        
        scene.add(textMesh);

    },

    function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },

    // onError callback
    function ( err ) {
        console.log( 'An error happened' );
    }
    );

    const planeGeometry = new THREE.PlaneGeometry( 1, 1 );
    const planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( planeGeometry, planeMaterial );
    plane.position.y=10;
    scene.add( plane );


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

let width =1;

function animate() {
    requestAnimationFrame(animate)
    sphere.rotation.x += 0.001
    sphere.rotation.y += 0.001
    if (isClicked) {
        for(width=1;width<10;width++){
            
        }
    }
    width+=0.001;
    plane.position.x+=0.00075;
    plane.scale.set(width,1,1);
    //controls.update();
    render()
}

function render() {
    renderer.render(scene, camera)
}

animate()
