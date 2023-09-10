let xSpeed = 0.0001;
let ySpeed = 0.0001;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGL1Renderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}

document.addEventListener("keydown", onDocumentKeyDown, false);

function onDocumentKeyDown(event) {
    let keyCode = event.which;
    if (keyCode === 68 || keyCode === 100) { // A eller a
        camera.rotation.y -= 0.01;
    } else if (keyCode === 65 || keyCode === 97) { // D eller d
        camera.rotation.y += 0.01;
    } else if (keyCode === 87 || keyCode === 119) { // W eller w
        camera.rotation.x += 0.01;
    } else if (keyCode === 83 || keyCode === 115) { // S eller s
        camera.rotation.x -= 0.01;
    } else if (keyCode === 82 || keyCode === 114) { // S eller s
        camera.rotation.z -= 3;
        camera.rotation.y -= 0.01;
    }
}


animate();
