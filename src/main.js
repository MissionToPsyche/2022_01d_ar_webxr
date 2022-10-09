//    import { Camera, Group, Scene } from "https://cdn.skypack.dev/three@0.132.2";
//    import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js?module";
//    import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js?module";
//    import { ARButton } from 'https://unpkg.com/three@0.126.0/examples/jsm/webxr/ARButton.js';
//    import { WebGLRenderer } from 'three';
    
//    const jsdom = require('jsdom');
//    const { JSDOM } = jsdom;
//    const { window } = new JSDOM(`...`);

		var camera, scene, renderer, mesh;

		init();
		animate();

		function init() {
			const container = document.createElement('div');
			document.body.appendChild(container);

			scene = new THREE.Scene();

			camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 25;


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
            mesh.position.x = (Math.random() - 0.3) * 1;
            mesh.position.y = (Math.random() - 0.3) * 1;
            mesh.position.z = (Math.random() - 1.5) * 1;
            scene.add(mesh);
        }

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
			renderer.setAnimationLoop(render);
		}

		function render() {      
			renderer.render(scene, camera);
		}
