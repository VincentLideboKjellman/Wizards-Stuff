'use strict';

let camera;
let scene;

let renderer;
let controls;
let objects = [];
let raycaster;

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now();
let velocity = new THREE.Vector3();
let direction = new THREE.Vector3();
let vertex = new THREE.Vector3();
let color = new THREE.Color();

let mouse = new THREE.Vector2(), INTERSECTED;

// RAIN 
var particleSystem, particleCount, particles;

//For animations etc ( almost like Date but better apparently)
let clock = new THREE.Clock();


init();
animate();


function init() {
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.y = 50;

  ////////////// SOUNDS //////////////////////
  // create an AudioListener and add it to the camera
  var listener = new THREE.AudioListener();
  camera.add( listener );

  // create a global audio source
  var sound = new THREE.Audio( listener );

  // load a sound and set it as the Audio object's buffer
  var audioLoader = new THREE.AudioLoader();
  audioLoader.load( 'assets/sounds/rain_with_bats.wav', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.3 );
	sound.play();
  });
  ////////////// END SOUNDS //////////////////////

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x000000 );
  scene.fog = new THREE.Fog( 0x000000, 0, 700 );
  let light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 );
  light.position.set( 0.5, 1, 0.75 );
  scene.add( light );

    //POINTERLOCKCONTROL
  // controls = new THREE.PointerLockControls( camera );
  //
  // let startGame = document.querySelector('.start');
  // let instructions = document.querySelector('.instructions');
  //
  // instructions.addEventListener( 'click', function () {
  //   controls.lock();
  // }, false );
  //
  // controls.addEventListener( 'lock', function () {
  //   instructions.style.display = 'none';
  //   startGame.style.display = 'none';
  //   controls.lock();
  //   camera.position.y = 50;
  // } );
  //
  // controls.addEventListener( 'unlock', function () {
  //   startGame.style.display = 'block';
  //   instructions.style.display = 'initial';
  // } );
  // scene.add( controls.getObject() );
  //
  // let onKeyDown = function ( event ) {
  //   switch ( event.keyCode ) {
  //     case 38: // up
  //     case 87: // w
  //       moveForward = true;
  //       break;
  //
  //     case 37: // left
  //     case 65: // a
  //       moveLeft = true;
  //       break;
  //
  //     case 40: // down
  //     case 83: // s
  //       moveBackward = true;
  //       break;
  //
  //     case 39: // right
  //     case 68: // d
  //       moveRight = true;
  //       break;
  //
  //     case 32: // space
  //       if ( canJump === true ) velocity.y += 350;
  //       canJump = false;
  //       break;
  //   }
  // };
  //
  // let onKeyUp = function ( event ) {
  //   switch ( event.keyCode ) {
  //     case 38: // up
  //     case 87: // w
  //       moveForward = false;
  //       break;
  //
  //     case 37: // left
  //     case 65: // a
  //       moveLeft = false;
  //       break;
  //
  //     case 40: // down
  //     case 83: // s
  //       moveBackward = false;
  //       break;
  //
  //     case 39: // right
  //     case 68: // d
  //       moveRight = false;
  //       break;
  //   }
  // };
  // document.addEventListener( 'keydown', onKeyDown, false );
  // document.addEventListener( 'keyup', onKeyUp, false );

  raycaster = new THREE.Raycaster();


  // floor
  let floorGeometry = new THREE.PlaneBufferGeometry(2000, 2000, 100, 100);
  floorGeometry.rotateX(- Math.PI / 2);

  let position = floorGeometry.attributes.position;
  for (let i = 0, l = position.count; i < l; i ++) {
    vertex.fromBufferAttribute( position, i );
    vertex.x += Math.random() * 20 - 10;
    vertex.y += Math.random() * -10;
    vertex.z += Math.random() * 20 - 10;
    position.setXYZ( i, vertex.x, vertex.y, vertex.z );
  }

  floorGeometry = floorGeometry.toNonIndexed();
  position = floorGeometry.attributes.position;
  let material = new THREE.MeshBasicMaterial( {color: 0x3D3C4F, side: THREE.DoubleSide} );
  let floor = new THREE.Mesh( floorGeometry, material );
  scene.add( floor );


  // let boxGeometry = new THREE.BoxBufferGeometry( 20, 20, 20 );
  // boxGeometry = boxGeometry.toNonIndexed();
  //
  // position = boxGeometry.attributes.position;
  // let colors = [];
  //
  // for ( let i = 0, l = position.count; i < l; i ++ ) {
  //   color.setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
  //   colors.push( color.r, color.g, color.b );
  // }
  //
  // boxGeometry.addAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
  //
  // for ( let i = 0; i < 1; i ++ ) {
  //   let boxMaterial = new THREE.MeshPhongMaterial( { specular: 0xffffff, flatShading: true, vertexColors: THREE.VertexColors } );
  //   boxMaterial.color.setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
  //   let box = new THREE.Mesh( boxGeometry, boxMaterial );
  //   box.position.x = Math.floor( Math.random() * 20 - 10 ) * 20;
  //   box.position.y = Math.floor( Math.random() * 20 ) * 20 + 10;
  //   box.position.z = Math.floor( Math.random() * 20 - 10 ) * 20;
  //   scene.add( box );
  //   objects.push( box );
  // }

  //---/////////////////////////////////////////////RAIN TEST CODE
  //---/////////////////////////////////////////////
  ///////////////////
    // OBJECTS  //
    ///////////////////
    var loader = new THREE.TextureLoader();
    loader.crossOrigin = '';

    // ///////////////////
    // // RAIN  //
    // ///////////////////
    particleCount = 14000;
    var pMaterial = new THREE.PointCloudMaterial({
      color: 0xFFFFFF,
      size: 0.8,
      map: loader.load(
        "assets/particleImages/raindrop4.png"
        // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/212131/raindrop2.png"
       ),
       blending: THREE.AdditiveBlending,
       depthTest: false,
       transparent: true
    });

    particles = new THREE.Geometry;
    for (var i = 0; i < particleCount; i++) {
        var pX = Math.random()*500 - 250,
            pY = Math.random()*500 - 250,
            pZ = Math.random()*500 - 250,
            particle = new THREE.Vector3(pX, pY, pZ);
        particle.velocity = {};
        particle.velocity.y = 0;
        particles.vertices.push(particle);
    }
    particleSystem = new THREE.PointCloud(particles, pMaterial);
    scene.add(particleSystem);


  //---/////////////////////////////////////////////END RAIN CODE
  //---/////////////////////////////////////////////
  
  //---/////////////////////////////////////////////RAIN TEST SIMULATION
  //---/////////////////////////////////////////////RAIN TEST

function simulateRain() {
  var pCount = particleCount;
  while (pCount--) {
  var particle = particles.vertices[pCount];
  if (particle.y < -200) {
    particle.y = 200;
    particle.velocity.y = 0;
  }
  particle.velocity.y -= Math.random() * 2;
  particle.y += particle.velocity.y;
  }
  particles.verticesNeedUpdate = true;
};

//---/////////////////////////////////////////////RAIN TEST SIMULATION
  //---/////////////////////////////////////////////RAIN TEST


  

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  window.addEventListener( 'resize', onWindowResize, false );


  //ORBITCONTROL
  controls = new THREE.OrbitControls(camera, document, renderer.domElement);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

//POINTERLOCK
// function onDocumentMouseMove( event ) {
//   event.preventDefault();
//   mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
//   mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
// }


function animate() {
  requestAnimationFrame( animate );
  if ( controls.isLocked === true ) {
    raycaster.ray.origin.copy( controls.getObject().position );
    raycaster.ray.origin.y -= 10;
    raycaster.setFromCamera( mouse, camera );
    let intersects = raycaster.intersectObjects( objects );
		if ( intersects.length > 0 ) {
			if ( INTERSECTED != intersects[ 0 ].object ) {
				if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
				INTERSECTED = intersects[ 0 ].object;
				INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
				INTERSECTED.material.emissive.setHex( 0xff0000 );
			}
		} else {
			if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
			INTERSECTED = null;
		}
    //
    // let time = performance.now();
    // let delta = ( time - prevTime ) / 1000;
    //
    // velocity.x -= velocity.x * 5.8 * delta;
    // velocity.z -= velocity.z * 5.8 * delta;
    // velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
    //
    // direction.z = Number( moveForward ) - Number( moveBackward );
    // direction.x = Number( moveLeft ) - Number( moveRight );
    // direction.normalize(); // this ensures consistent movements in all directions
    //
    // if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta;
    // if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta;
    //
    // controls.getObject().translateX( velocity.x * delta );
    // controls.getObject().position.y += ( velocity.y * delta ); // new behavior
    // controls.getObject().translateZ( velocity.z * delta );
    // if ( controls.getObject().position.y < 50 ) {
    //   velocity.y = 0;
    //   controls.getObject().position.y = 50;
    //   canJump = true;
    // }
    // prevTime = time;
  }
  particleSystem.rotation.y += 0.0015;
  simulateRain();
  renderer.render( scene, camera );
}
