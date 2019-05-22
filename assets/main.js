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

// RAIN VARIABLES
var particleSystem, rainParticleCount, rainParticles;

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
  // scene.fog = new THREE.Fog( 0x000000, 0, 700 );
  let light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 );
  light.position.set( 0.5, 1, 0.75 );
  scene.add( light );

    //POINTERLOCKCONTROL
  controls = new THREE.PointerLockControls( camera );
  
  let startGame = document.querySelector('.start');
  let instructions = document.querySelector('.instructions');
  
  instructions.addEventListener( 'click', function () {
    controls.lock();
  }, false );
  
  controls.addEventListener( 'lock', function () {
    instructions.style.display = 'none';
    startGame.style.display = 'none';
    controls.lock();
    camera.position.y = 50;
  } );
  
  controls.addEventListener( 'unlock', function () {
    startGame.style.display = 'block';
    instructions.style.display = 'initial';
  } );
  scene.add( controls.getObject() );
  
  let onKeyDown = function ( event ) {
    switch ( event.keyCode ) {
      case 38: // up
      case 87: // w
        moveForward = true;
        break;
  
      case 37: // left
      case 65: // a
        moveLeft = true;
        break;
  
      case 40: // down
      case 83: // s
        moveBackward = true;
        break;
  
      case 39: // right
      case 68: // d
        moveRight = true;
        break;
  
      case 32: // space
        if ( canJump === true ) velocity.y += 350;
        canJump = false;
        break;
    }
  };
  
  let onKeyUp = function ( event ) {
    switch ( event.keyCode ) {
      case 38: // up
      case 87: // w
        moveForward = false;
        break;
  
      case 37: // left
      case 65: // a
        moveLeft = false;
        break;
  
      case 40: // down
      case 83: // s
        moveBackward = false;
        break;
  
      case 39: // right
      case 68: // d
        moveRight = false;
        break;
    }
  };
  document.addEventListener( 'keydown', onKeyDown, false );
  document.addEventListener( 'keyup', onKeyUp, false );

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



  //---/////////////////////////////////////////////RAIN CODE
    var loader = new THREE.TextureLoader();
    loader.crossOrigin = '';

    // ///////////////////
    // // RAIN  //
    // ///////////////////
    rainParticleCount = 5000;
    var pMaterial = new THREE.PointCloudMaterial({
      color: 0xFFFFFF,
      size: 3,
      map: loader.load(
        "assets/particleImages/raindrop3.png"
        // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/212131/raindrop2.png"
       ),
       blending: THREE.AdditiveBlending,
       depthTest: false,
       transparent: true
    });

    rainParticles = new THREE.Geometry;
    for (var i = 0; i < rainParticleCount; i++) {
        var pX = Math.random()*500 - 250,
            pY = Math.random()*500 - 250,
            pZ = Math.random()*500 - 250,
            particle = new THREE.Vector3(pX, pY, pZ);
        particle.velocity = {};
        particle.velocity.y = 0;
        rainParticles.vertices.push(particle);
    }
    particleSystem = new THREE.PointCloud(rainParticles, pMaterial);
    scene.add(particleSystem);
    //

    ///////////////////////////////////////////////MAGIC CODE
    var loader = new THREE.TextureLoader();
    loader.crossOrigin = '';

    // Magic
    var magicParticleCount = 400;
    var pMaterial = new THREE.PointCloudMaterial({
      color: 0xFFFFFF,
      size: 3,
      map: loader.load(
        "assets/particleImages/magicParticle.png"
        // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/212131/raindrop2.png"
       ),
       blending: THREE.AdditiveBlending,
       depthTest: true,
       transparent: true
    });

    var magicParticles = new THREE.Geometry;
    for (var i = 0; i < magicParticleCount; i++) {
        var pX = Math.random()*500 - 250,
            pY = Math.random()*500 - 250,
            pZ = Math.random()*500 - 250,
            particle = new THREE.Vector3(pX, pY, pZ);
        particle.velocity = {};
        particle.velocity.y = 0;
        magicParticles.vertices.push(particle);
    }
    particleSystem = new THREE.PointCloud(magicParticles, pMaterial);
    scene.add(particleSystem);
    //

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  window.addEventListener( 'resize', onWindowResize, false );
    
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

//POINTERLOCK
function onDocumentMouseMove( event ) {
  event.preventDefault();
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}


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
    //pointerlock controls
    let time = performance.now();
    let delta = ( time - prevTime ) / 1000;
    
    velocity.x -= velocity.x * 5.8 * delta;
    velocity.z -= velocity.z * 5.8 * delta;
    velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
    
    direction.z = Number( moveForward ) - Number( moveBackward );
    direction.x = Number( moveLeft ) - Number( moveRight );
    direction.normalize(); // this ensures consistent movements in all directions
    
    if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta;
    if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta;
    
    controls.getObject().translateX( velocity.x * delta );
    controls.getObject().position.y += ( velocity.y * delta ); // new behavior
    controls.getObject().translateZ( velocity.z * delta );
    if ( controls.getObject().position.y < 50 ) {
      velocity.y = 0;
      controls.getObject().position.y = 50;
      canJump = true;
    }
    prevTime = time;
  }

  //rain
  function simulateRain() {
    var pCount = rainParticleCount;
    while (pCount--) {
    var rainParticle = rainParticles.vertices[pCount];
    if (rainParticle.y < -20) {
      rainParticle.y = 100;
      rainParticle.velocity.y = 0;
    }
    rainParticle.velocity.y -= Math.random() * 1.3;
    rainParticle.y += rainParticle.velocity.y;
    }
    rainParticles.verticesNeedUpdate = true;
  };
  //rain
  // particleSystem.rotation.y += 0.0015;
  simulateRain();
  //

  //simulate magic

  renderer.render( scene, camera );

}
