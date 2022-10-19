import * as THREE from './build/three.module.js';
import {FontLoader} from './examples/jsm/loaders/FontLoader.js';
import {TextGeometry} from './examples/jsm/geometries/TextGeometry.js';
import {ARButton} from 'https://unpkg.com/three@0.126.0/examples/jsm/webxr/ARButton.js';

var camera, scene, renderer, mesh;





		init();
		animate();
        

		function init() {
			const container = document.createElement('div');
			document.body.appendChild(container);

			scene = new THREE.Scene();

			camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 700;


            // Create the renderer
			renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(window.innerWidth, window.innerHeight);
            

            // Create a light
			var light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
			light.position.set(0.5, 1, 0.25);
			scene.add(light);
			

            // Enable WebXR
            renderer.xr.enabled = true; 
            container.appendChild(renderer.domElement);


            // Create the shapes in random locations
            const geometry = new THREE.IcosahedronGeometry(0.05, 1);
            const material = new THREE.MeshPhongMaterial({
                color      :  new THREE.Color("rgb(250,255,100)")});   

            for(var i = 0; i<25;i++) {
            mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = (Math.random() - 0.3) * 2;
            mesh.position.y = (Math.random() - 0.3) * 2;
            mesh.position.z = (Math.random() - 1.5) * 2;
            scene.add(mesh);
            }
        
            const loader = new FontLoader();
            loader.load('./text.json', function (font){
            const textGeometry = new TextGeometry('Psyche Rules!\nText Rendered', {
                font:font,
                size: 1,
                height: 2
            } ) 
        
            const textMesh = new THREE.Mesh(textGeometry, [
                new THREE.MeshPhongMaterial({color: 0xad4000}),
                new THREE.MeshPhongMaterial({color: 0x5c2301})
            ])
        
            textMesh.position.x = -4.2;
            textMesh.position.y = 0;
            textMesh.position.z = -12;
        
            scene.add(textMesh);
            });

			// Place the AR button on screen
			document.body.appendChild(ARButton.createButton(renderer));
			window.addEventListener('resize', onWindowResize, false);
		}

        // Make window resizeable
		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		}

		function animate() {
            render();
			renderer.setAnimationLoop(render);
            requestAnimationFrame( animate );
		}

		function render() {      
			renderer.render(scene, camera);
		}