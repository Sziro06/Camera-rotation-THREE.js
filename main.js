//variabeler
let scene, renderer, camera, zoom;

scene = new THREE.Scene();
renderer = new THREE.WebGLRenderer();
camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

camera.position.z = 4.5;
camera.position.y = 1;

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const player = new THREE.BoxGeometry( 1, 1, 1);
const playerMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( player, playerMaterial );
scene.add( cube );

camera.position.z = 5;




// senen
scene.fog = new THREE.FogExp2( 0x0047ab, 0.09, 50 );

const geometry = new THREE.BufferGeometry();
const vertices = [];
const size = 2000;

for( let i = 0; i < 5000; i++){
	const x = (Math.random() * size + Math.random() * size) / 2 - size / 2;
	const y = (Math.random() * size + Math.random() * size) / 2 - size / 2;
	const z = (Math.random() * size + Math.random() * size) / 2 - size / 2;

	vertices.push( x, y, z );
}

geometry.setAttribute(
	"position",
	new THREE.Float32BufferAttribute( vertices, 3 )
);

const material = new THREE.PointsMaterial({
	size: 2,
	color: 0xffffff,
})

const particles = new THREE.Points( geometry, material );
scene.add( particles );








//Knapper
document.addEventListener("keydown", onDocumentKeyDown, false);

function onDocumentKeyDown(event) {
    let keyCode = event.which;
    if (keyCode === 68 || keyCode === 100) { // D eller f
        camera.rotation.y -= 0.01;
    } else if (keyCode === 65 || keyCode === 97) { // A eller a
        camera.rotation.y += 0.01;
    } else if (keyCode === 87 || keyCode === 119) { // W eller w
        camera.position.z -= 0.1;
    } else if (keyCode === 83 || keyCode === 115) { // S eller s
        camera.position.z += 0.1;
    }
}

// den som får ting til å repetere
function animate() {
	requestAnimationFrame( animate );

    particles.rotation.x+=.0001
	particles.rotation.y+=.0001
	particles.rotation.z+=.0005

	renderer.render( scene, camera );
}


animate();
