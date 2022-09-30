//Rendering an object with three.js
    
    // initialize the scene
    const scene = new THREE.Scene();

    // initialize the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.position.z = 25;

    // initialize the renderer
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor("#000000");
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    // allow window to be resized
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth,window.innerHeight);
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
    });

    // intitialize light on offset
    var light = new THREE.PointLight(0xffffff, 2, 1000, 1, 10);
    light.position.set(50, 50, 50);
    scene.add(light);

    // initialize the shape and material
    var geometry = new THREE.IcosahedronGeometry(1,0);
    var material = new THREE.MeshLambertMaterial({ color: 0xffff99 });

    // add multiple shapes in random positions
        for(var i = 0; i<25;i++) {
            var sphere = new THREE.Mesh(geometry, material);
            sphere.position.x = (Math.random() - 0.5) * 25;
            sphere.position.y = (Math.random() - 0.5) * 25;
            sphere.position.z = (Math.random() - 0.5) * 10;
            scene.add(sphere);
        }

    // render the scene
    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    render();