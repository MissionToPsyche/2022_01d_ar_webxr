var scene, camera, renderer, clock, deltaTime, totalTime;

var arToolkitSource, arToolkitContext;

var markerRoot1;

var material1, mesh1;

//=============================================================================
// setup for testing
//=============================================================================
if (typeof require === 'function') // test for nodejs environment
{
  var THREE = require('./../js/three.js');
}


initialize();
animate();

function initialize()
{
	scene = new THREE.Scene();
				
	camera = new THREE.Camera();
	scene.add(camera);

	renderer = new THREE.WebGLRenderer({
		antialias : true,
		alpha: true
	});
	renderer.setClearColor(new THREE.Color('lightgrey'), 0)
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.domElement.style.position = 'absolute'
	renderer.domElement.style.top = '0px'
	renderer.domElement.style.left = '0px'
	document.body.appendChild( renderer.domElement );

	clock = new THREE.Clock();
	deltaTime = 0;
	totalTime = 0;
	
	////////////////////////////////////////////////////////////
	// setup arToolkitSource
	////////////////////////////////////////////////////////////

	arToolkitSource = new THREEx.ArToolkitSource({
		sourceType : 'webcam',
	});

	function onResize()
	{
		arToolkitSource.onResize()	
		arToolkitSource.copySizeTo(renderer.domElement)	
		if ( arToolkitContext.arController !== null )
		{
			arToolkitSource.copySizeTo(arToolkitContext.arController.canvas)	
		}	
	}

	arToolkitSource.init(function onReady(){
		onResize()
	});
	
	// handle resize event
	window.addEventListener('resize', function(){
		onResize()
	});
	
	////////////////////////////////////////////////////////////
	// setup arToolkitContext
	////////////////////////////////////////////////////////////	

	// create atToolkitContext
	arToolkitContext = new THREEx.ArToolkitContext({
		cameraParametersUrl: 'data/camera_para.dat',
		detectionMode: 'mono'
	});
	
	// copy projection matrix to camera when initialization complete
	arToolkitContext.init( function onCompleted(){
		camera.projectionMatrix.copy( arToolkitContext.getProjectionMatrix() );
	});

	////////////////////////////////////////////////////////////
	// setup markerRoots
	////////////////////////////////////////////////////////////

	// build markerControls
	markerRoot1 = new THREE.Group();
	scene.add(markerRoot1);
	let markerControls1 = new THREEx.ArMarkerControls(arToolkitContext, markerRoot1, {
		type: 'pattern', patternUrl: "data/hiro.patt",
	})
    let markerControls2 = new THREEx.ArMarkerControls(arToolkitContext, markerRoot1, {
		type: 'pattern', patternUrl: "data/kanji.patt",
	})

	////////////////////////////////////////////////////////////
	// setup scene
	////////////////////////////////////////////////////////////
	
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	
	let loader = new THREE.TextureLoader();
		
	let sceneGroup = new THREE.Group();
	markerRoot1.add(sceneGroup);

    //Make moon
    let textureMoon = loader.load("images/noise.jpg");
	// repeat texture
	textureMoon.wrapS = THREE.RepeatWrapping;
	textureMoon.wrapT = THREE.RepeatWrapping;
	textureMoon.repeat.set(2,2);

    moon = new THREE.Mesh( 
        new THREE.SphereGeometry(0.33),
        //new THREE.TorusKnotGeometry(0.5, 0.2, 128, 16), // new THREE.SphereBufferGeometry(1, 32, 32), 
		new THREE.MeshLambertMaterial({ map: textureMoon })
	);
	moon.position.y = 1;
    moon.position.x = 2;
	moon.castShadow = true;
	moon.receiveShadow = true;
	//sceneGroup.add( moon );
	
	let earthTexture = loader.load("images/earth-sphere.jpg");
	// repeat texture
	earthTexture.wrapS = THREE.RepeatWrapping;
	earthTexture.wrapT = THREE.RepeatWrapping;
	earthTexture.repeat.set(1,1);
	
	earth = new THREE.Mesh( 
        new THREE.SphereGeometry(1),
        //new THREE.TorusKnotGeometry(0.5, 0.2, 128, 16), // new THREE.SphereBufferGeometry(1, 32, 32), 
		new THREE.MeshLambertMaterial({ map: earthTexture })
	);
	earth.position.y = 1;
	earth.castShadow = true;
	earth.receiveShadow = true;
    earth.add(moon);
	sceneGroup.add( earth );
	
	let floorGeometry = new THREE.PlaneGeometry( 20,20 );
	let floorMaterial = new THREE.ShadowMaterial();
	floorMaterial.opacity = 0.3;
	let floorMesh = new THREE.Mesh( floorGeometry, floorMaterial );
	floorMesh.rotation.x = -Math.PI/2;
	floorMesh.receiveShadow = true;
	sceneGroup.add( floorMesh );

	
	let light = new THREE.PointLight( 0xffffff, 1, 100 );
	light.position.set( 0,4,0 ); // default; light shining from top
	light.castShadow = true;
	sceneGroup.add( light );
	
	let lightSphere = new THREE.Mesh(
		new THREE.SphereGeometry(0.1),
		new THREE.MeshBasicMaterial({
			color: 0xffffff,
			transparent: true,
			opacity: 0.8
		})
	);
	lightSphere.position.copy( light.position );
	sceneGroup.add( lightSphere );
	
	let ambientLight = new THREE.AmbientLight( 0x666666 );
	sceneGroup.add( ambientLight );
	// let helper = new THREE.CameraHelper( light.shadow.camera );
	// sceneGroup.add( helper );
}

function update()
{
	// update artoolkit on every frame
	if ( arToolkitSource.ready !== false )
		arToolkitContext.update( arToolkitSource.domElement );
		
	earth.rotation.y -= 0.01;
}


function render()
{
	renderer.render( scene, camera );
}


function animate()
{
	requestAnimationFrame(animate);
	deltaTime = clock.getDelta();
	totalTime += deltaTime;
	update();
	render();
}

//=============================================================================
// make available in nodejs
//=============================================================================
if (typeof(exports) !== 'undefined')
{
  module.exports = {
	initialize,
	update,
	render,
	animate,
  };
}