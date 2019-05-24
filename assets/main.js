'use strict';

let camera, scene;
let renderer, controls, raycaster;
let objects = [];

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;

let prevTime = performance.now();
let velocity = new THREE.Vector3();
let direction = new THREE.Vector3();
let vertex = new THREE.Vector3();
let color = new THREE.Color();

let mouse = new THREE.Vector2(), INTERSECTED;
let winGame = false;

// RAIN VARIABLES
let particleSystem, rainParticleCount, rainParticles, pMaterial;
let magicParticleCount, magicParticles;

//BAT VARIABLES
let bats = [];
//for bar animation
//orbital radius
var batRadius = 350; // How big a circle the bat will fly
// start angle
var batTheta = 0;
//angle increment value
var batDTheta = 2 * Math.PI / 1000; //Here change the last number to change the bats speed

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.y = 50;

  new THREE.OBJLoader()
  .load('models/obj/bat.obj', (bat) => {
    let texture = new THREE.TextureLoader().load('models/obj/assets_texture.jpg');
    bat.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
      }});
    scene.add(bat);
    bat.position.x = 680;
    bat.position.y = Math.floor( Math.random() * 40 + 100);
    bat.position.z = 66;
    bat.rotation.x = Math.PI / 2;
    bat.rotation.z = 0; // starting position so it matches how it starts to fly
    bat.scale.set(50,50,50)
    bats.push(bat);
  });

  //SOUNDS
  // create an AudioListener and add it to the camera
  let listener = new THREE.AudioListener();
  camera.add( listener );

  // create a global audio source
  let sound = new THREE.Audio( listener );

  // load a sound and set it as the Audio object's buffer
  let audioLoader = new THREE.AudioLoader();
  audioLoader.load( 'assets/sounds/rain_with_bats.wav', function( buffer ) {
  sound.setBuffer( buffer );
  sound.setLoop( true );
  sound.setVolume( 0.3 );
  sound.play();
  });


  // SCENE LIGHT AND FOG
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x000000 );
  scene.fog = new THREE.Fog( 0x000000, 0, 500 );
  let light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.65 );
  light.position.set( 0.5, 1, 0.75 );
  scene.add( light );


  //POINTERLOCKCONTROL
  controls = new THREE.PointerLockControls( camera );

  let startGame = document.querySelector('.start');
  let startImage = document.querySelector('.start-image')
  let instructions = document.querySelector('.instructions');
  let mouseImage = document.querySelector('.mouse');
  let startText = document.querySelector('.start-text');
  let pause = document.querySelector('.pause')
  let keepPlaying = document.querySelector('#keepPlaying')
  let win = document.querySelector('.win')
  let playAgain = document.querySelector('.play-again')


  startText.addEventListener( 'click', function () {
    controls.lock();
  }, false );

  keepPlaying.addEventListener( 'click', function () {
    controls.lock();
  }, false );

  controls.addEventListener( 'lock', function () {
    instructions.style.display = 'none';
    startGame.style.display = 'none';
    startImage.style.display = 'none';
    mouseImage.style.display = 'initial';
    pause.style.display = 'none';

    controls.lock();
    camera.position.y = 50;

    if(winGame) {
      win.style.display = 'initial';
      document.exitPointerLock();
      playAgain.addEventListener('click', function () {
        window.location.reload();
      })
    }
  });

  controls.addEventListener( 'unlock', function () {
    startGame.style.display = 'none';
    instructions.style.display = 'none';
    mouseImage.style.display = 'none';
    startText.style.display = 'initial';

    if(winGame) {
      pause.style.display = 'none';
    } else {
      pause.style.display = 'flex';
    }
  } );

  if(winGame) {
    camera.position.y = 50;
  }

  scene.add( controls.getObject() );


// KEY MOVEMENT
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


  // FLOOR
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



  //RAIN CODE
  let loader = new THREE.TextureLoader();
  loader.crossOrigin = '';
  //RAIN
  rainParticleCount = 7000;
  pMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 4,
    map: loader.load(
      "assets/particleImages/raindrop3.png"
     ),
     blending: THREE.AdditiveBlending,
     depthTest: false,
     transparent: true
  });
  rainParticles = new THREE.Geometry;
  for (let i = 0; i < rainParticleCount; i++) {
      let pX = Math.random()*1900 - 950,
          pY = Math.random()*100 + 20,
          pZ = Math.random()*1900 - 950,
          particle = new THREE.Vector3(pX, pY, pZ);
      particle.velocity = {};
      particle.velocity.y = 0;
      rainParticles.vertices.push(particle);
  }
  particleSystem = new THREE.Points(rainParticles, pMaterial);
  scene.add(particleSystem);


  //MAGIC PARTICLES
  loader = new THREE.TextureLoader();
  loader.crossOrigin = '';
  //Particles
  magicParticleCount = 800;
  pMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 3,
    map: loader.load(
      "assets/particleImages/magicParticle.png"
     ),
     blending: THREE.AdditiveBlending,
     depthTest: true,
     transparent: true
  });
  magicParticles = new THREE.Geometry;
  for (let i = 0; i < magicParticleCount; i++) {
      let pX = Math.random()*800 -850,
          pY = Math.random()*100 + 20,
          pZ = Math.random()*1800 -880,
          particle = new THREE.Vector3(pX, pY, pZ);
      particle.velocity = {};
      particle.velocity.y = 0;
      magicParticles.vertices.push(particle);
  }
  particleSystem = new THREE.Points(magicParticles, pMaterial);
  scene.add(particleSystem);


  // RAYCASTER
  raycaster = new THREE.Raycaster();
  document.addEventListener('mousedown', onDocumentMouseDown, false);


  // RENDERER AND RESIZE
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  window.addEventListener( 'resize', onWindowResize, false );

  //ORBITCONTROL
  // controls = new THREE.OrbitControls(camera, document, renderer.domElement);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

//POINTERLOCK
function onDocumentMouseDown( event ) {
  event.preventDefault();

  raycaster.ray.origin.copy( controls.getObject().position );
  // raycaster.ray.origin.y -= 10;
  raycaster.setFromCamera( mouse, camera );
  let intersects = raycaster.intersectObjects( objects );
  if(intersects.length > 0) {
    winGame = true;
  }
}

function onDocumentMouseMove( event ) {
  event.preventDefault();
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function animate() {
  requestAnimationFrame( animate );
  if ( controls.isLocked === true ) {
    raycaster.ray.origin.copy( controls.getObject().position );
    raycaster.setFromCamera( mouse, camera );
    let intersects = raycaster.intersectObjects( objects );
		if ( intersects.length > 0 ) {
			if ( INTERSECTED != intersects[ 0 ].object ) {
				if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
				INTERSECTED = intersects[ 0 ].object;
				INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
				INTERSECTED.material.emissive.setHex( 0xa093c6 );
			}
		} else {
			if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
			INTERSECTED = null;
		}

    // MOUSE MOVEMENT
    let time = performance.now();
    let delta = ( time - prevTime ) / 1000;

    velocity.x -= velocity.x * 5.8 * delta;
    velocity.z -= velocity.z * 5.8 * delta;
    velocity.y -= 9.8 * 100.0 * delta; // 100 = mass

    direction.z = Number( moveForward ) - Number( moveBackward );
    direction.x = Number( moveLeft ) - Number( moveRight );
    direction.normalize();

    if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta; //changed from 400
    if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta; //changed from 400

    controls.getObject().translateX( velocity.x * delta );
    controls.getObject().position.y += ( velocity.y * delta ); // new behavior
    controls.getObject().translateZ( velocity.z * delta );

    if ( controls.getObject().position.y < 50 ) {
      velocity.y = 0;
      controls.getObject().position.y = 50;
    }

    prevTime = time;


    // limit walking in map
    if(camera.position.z >= 910) {
      camera.position.z = 910;
    }
    if(camera.position.z < -910) {
      camera.position.z = -910;
    }
    if(camera.position.x >= 910) {
      camera.position.x = 910;
    }
    if(camera.position.x < -910) {
      camera.position.x = -910;
    }


    // BAT ANIMATION
    // console.log(bats);
    // console.log(bats[0].position.x += 0.1) 
    function animateBat(){

      batTheta += batDTheta;
      bats[0].position.x = batRadius * Math.cos(batTheta);
      bats[0].position.z = batRadius * Math.sin(batTheta);

      bats[0].rotation.z += batDTheta;

      bats[0].verticesNeedUpdate = true;
    }
    animateBat();
    console.log(bats[0]);
    
  
    


    //RAIN ANIMATION
    function simulateRain() {
      let pCount = rainParticleCount;
      while (pCount--) {
      let rainParticle = rainParticles.vertices[pCount];
      if (rainParticle.y < 10) {
        rainParticle.y = 100;
        rainParticle.velocity.y = 0;
      }
      rainParticle.velocity.y -= Math.random() * 0.7;
      rainParticle.y += rainParticle.velocity.y;
      }
      rainParticles.verticesNeedUpdate = true;
    };
    // particleSystem.rotation.y += 0.0015;
    simulateRain();

    //MAGIC PARTICLES ANIMATION

    function simulateMagicParticles() {
      let pCount = magicParticleCount;
      while (pCount--) {
      let magicParticle = magicParticles.vertices[pCount];
      if(magicParticle.y > 120) {
        magicParticle.y = 20;
      }
      magicParticle.y += 0.07;
      }
      magicParticles.verticesNeedUpdate = true;
    };
    // particleSystem.rotation.y += 0.0015;
    simulateMagicParticles();
  }
  renderer.render( scene, camera );
}
