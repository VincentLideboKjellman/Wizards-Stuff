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
let particleSystem, pMaterial
let rainParticleCount, rainParticles;
let magicParticleCount, magicParticles;
let gemstoneParticleCount, gemstoneParticles;

//BAT VARIABLES
let bats = [];

//for bar animation
//orbital radius
var batRadius = 350; 

// start angle
var batTheta = 0;

//angle increment value
var batDTheta = 2 * Math.PI / 350; 

//STONES VARIABLES
let bigStones = [];

//small stone 1
let smallStones = [];
var smallStoneRadius = 40;
var smallStoneTheta = 90;
var smallStoneDTheta = 2 * Math.PI / 800;

//small stone 2
let smallStones2 = [];
var smallStone2Radius = 40;
var smallStone2Theta = 180;
var smallStone2DTheta = 2 * Math.PI / 800;

//small stone 3
let smallStones3 = [];
var smallStone3Radius = 40;
var smallStone3Theta = 0;
var smallStone3DTheta = 2 * Math.PI / 800;


init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.y = 50;


  //BAT OBJECT
  new THREE.OBJLoader()
  .load('models/obj/bat.obj', (bat) => {
    let texture = new THREE.TextureLoader().load('models/obj/assets_texture.jpg');
    bat.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
      }});
    scene.add(bat);
    bat.position.x = 680;
    // bat.position.y = Math.floor( Math.random() * 40 + 100);
    bat.position.y = 200;
    bat.position.z = 66;
    bat.rotation.x = Math.PI / 2;
    bat.rotation.z = 0; // starting position so it matches how it starts to fly
    bat.scale.set(50,50,50)
    bats.push(bat);
  });

  //STONE OBJECT
  //big stone
  let gemstoneFile = 'models/obj/purplegemstone.png';
  new THREE.OBJLoader()
  .load('models/obj/gem.obj.obj', (bigStone) => {
    let texture = new THREE.TextureLoader().load(gemstoneFile);
    bigStone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
      }});
    scene.add(bigStone);
    bigStone.position.set(540, 50, -250)
    bigStone.rotation.x = -Math.PI / 2;
    bigStone.rotation.z = -Math.PI / 2;
    bigStone.scale.set(0.8,0.8,0.8)
    bigStones.push(bigStone)

    let bigStoneLight = new THREE.PointLight( 0x8539F8, 3, 300);
    bigStoneLight.position.set( 540, 30, -250 );
    scene.add( bigStoneLight );
  });
  //small stone 1
  new THREE.OBJLoader()
  .load('models/obj/gem.obj.obj', (smallStone) => {
    let texture = new THREE.TextureLoader().load(gemstoneFile);
    smallStone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
      }});
    scene.add(smallStone);
    smallStone.position.set(590, 50, -250);
    smallStone.rotation.x = -Math.PI / 2;
    smallStone.rotation.z = -Math.PI / 2;
    smallStone.scale.set(0.5,0.5,0.5)
    smallStones.push(smallStone);
  });
  //small stone 2
  new THREE.OBJLoader()
  .load('models/obj/gem.obj.obj', (smallStone2) => {
    let texture = new THREE.TextureLoader().load(gemstoneFile);
    smallStone2.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
      }});
    scene.add(smallStone2);
    smallStone2.position.set(510, 50, -300)
    smallStone2.rotation.x = -Math.PI / 2;
    smallStone2.rotation.z = -Math.PI / 2;
    smallStone2.scale.set(0.5,0.5,0.5)
    smallStones2.push(smallStone2);
  });
  //small stone 3
  new THREE.OBJLoader()
  .load('models/obj/gem.obj.obj', (smallStone3) => {
    let texture = new THREE.TextureLoader().load(gemstoneFile);
    smallStone3.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
      }});
    scene.add(smallStone3);
    smallStone3.position.set(510, 50, -200)
    smallStone3.rotation.x = -Math.PI / 2;
    smallStone3.rotation.z = -Math.PI / 2;
    smallStone3.scale.set(0.5,0.5,0.5)
    smallStones3.push(smallStone3);
  });


  //SOUNDS
  // create an AudioListener and add it to the camera
  let listener = new THREE.AudioListener();
  camera.add( listener );

  // create a global audio source
  let sound = new THREE.Audio( listener );
  let audioLoader = new THREE.AudioLoader();
  audioLoader.load( 'assets/sounds/rain_with_bats.wav', function( buffer ) {
  sound.setBuffer( buffer );
  sound.setLoop( true );
  sound.setVolume( 0.3 );
  sound.play();
  });

  //music
  let music = new THREE.Audio( listener );
  let musicLoader = new THREE.AudioLoader();
  musicLoader.load( 'assets/sounds/music.mp3', function( buffer ) {
  music.setBuffer( buffer );
  music.setLoop( true );
  music.setVolume( 0.1 );
  music.play();
  });


  // SCENE LIGHT AND FOG
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x000000 );
  scene.fog = new THREE.Fog( 0x000000, 0, 500 );
  let light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 1 );
  light.position.set( 0.5, 1, 0.75 );
  scene.add( light );


  //POINTERLOCKCONTROL
  controls = new THREE.PointerLockControls( camera );

  let startGame = document.querySelector('.start');
  let startImage = document.querySelector('.start-image')
  let winImage = document.querySelector('.win-image')
  let instructions = document.querySelector('.instructions');
  let mouseImage = document.querySelector('.mouse');
  let startText = document.querySelector('.start-text');
  let pause = document.querySelector('.pause')
  let keepPlaying = document.querySelector('#keepPlaying')
  let win = document.querySelector('.win')
  let playAgain = document.querySelector('.play-again')


  startText.addEventListener( 'click', function () {
    controls.lock();

    //count up timer
    let isGameStartedTimer = true;

    if(isGameStartedTimer){
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;
      countUpFromTime(dateTime, 'countup1');
    }
      if(winGame){
        isGameStartedTimer = false;
      }
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

  
  // GEMSTONE PARTICLES
  loader = new THREE.TextureLoader();
  loader.crossOrigin = '';
  gemstoneParticleCount = 150;
  pMaterial = new THREE.PointsMaterial({
    color: 0x9872ff,
    size: 12,
    map: loader.load(
      "assets/particleImages/magicParticle.png"
     ),
     blending: THREE.AdditiveBlending,
     depthTest: true,
     transparent: true
  });
  gemstoneParticles = new THREE.Geometry;
  for (let i = 0; i < gemstoneParticleCount; i++) {
    let pX = Math.random()*80 + 500,
        pY = Math.random()*300 + 50,
        pZ = Math.random()*80 - 290,
          particle = new THREE.Vector3(pX, pY, pZ);
      particle.velocity = {};
      particle.velocity.y = 0;
      gemstoneParticles.vertices.push(particle);
  }
  particleSystem = new THREE.Points(gemstoneParticles, pMaterial);
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

    direction.z = Number( moveForward ) - Number( moveBackward );
    direction.x = Number( moveLeft ) - Number( moveRight );
    direction.normalize();

    if ( moveForward || moveBackward ) velocity.z -= direction.z * 600.0 * delta; 
    if ( moveLeft || moveRight ) velocity.x -= direction.x * 600.0 * delta; 

    controls.getObject().translateX( velocity.x * delta );
    controls.getObject().position.y += ( velocity.y * delta );
    controls.getObject().translateZ( velocity.z * delta );
    prevTime = time;

        
    //GEMSTONE PARTICLES ANIMATION
    function simulateGemstoneParticles() {
      let pCount = gemstoneParticleCount;
      while (pCount--) {
      let gemstoneParticle = gemstoneParticles.vertices[pCount];
      if(gemstoneParticle.y > 330) {
        gemstoneParticle.y = 55;
      }
      gemstoneParticle.y += 0.6;
      }
      gemstoneParticles.verticesNeedUpdate = true;
    };
    simulateGemstoneParticles();
  }

  
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

    // limit castle
    if(camera.position.x > 410 && camera.position.z > 440) {
      camera.position.x = 410;
    }
    if(camera.position.x > 420 && camera.position.z > 430) {
      camera.position.z = 430;
    }

    // limit stones
    if(camera.position.x < -565 && camera.position.z < -175 && camera.position.x > -790) {
      camera.position.x = -565;
    }
    if(camera.position.x < -570  && camera.position.z < -170 && camera.position.x > -790) {
      camera.position.z = -170;
    }
    if(camera.position.x > -795  && camera.position.z < -170 && camera.position.x < -575) {
      camera.position.x = -795;
    }
    
      // camera.position.x > -620 &&
  // if(camera.position.x > 420 && camera.position.z > 430) {
  //   camera.position.z = 430;
  // }
  // console.log(camera.position.x)
  // console.log(camera.position.z)


    // BAT ANIMATION
    function animateBat(){
      batTheta += batDTheta;
      bats[0].position.x = batRadius * Math.cos(batTheta);
      bats[0].position.z = batRadius * Math.sin(batTheta);
      bats[0].rotation.z += batDTheta;
      bats[0].verticesNeedUpdate = true;
    }
    animateBat();

    //SMALL STONE ANIMATION
    function animateSmallStone(){
      //big stone
      bigStones[0].rotation.z += 0.03;
      // 540, 30, -250  // big stone, or middle

      //small stone 1
      smallStoneTheta += smallStoneDTheta;
      smallStones[0].position.x = 540 + smallStoneRadius * Math.cos(smallStoneTheta);
      smallStones[0].position.z = -250 + smallStoneRadius * Math.sin(smallStoneTheta);
      smallStones[0].rotation.z += smallStoneDTheta;
      // 590, 50, -250

      //small stone 2
      smallStone2Theta += smallStone2DTheta;
      smallStones2[0].position.x = 540 + smallStone2Radius * Math.cos(smallStone2Theta);
      smallStones2[0].position.z = -250 + smallStone2Radius * Math.sin(smallStone2Theta);
      smallStones2[0].rotation.z += smallStone2DTheta;
      // 510, 50, -300

      //small stone 3
      smallStone3Theta += smallStone3DTheta;
      smallStones3[0].position.x = 540 + smallStone3Radius * Math.cos(smallStone3Theta);
      smallStones3[0].position.z = -250 + smallStone3Radius * Math.sin(smallStone3Theta);
      smallStones3[0].rotation.z += smallStone3DTheta;
      // 510, 50, -200

      smallStones[0].verticesNeedUpdate = true;
      smallStones2[0].verticesNeedUpdate = true;
      smallStones3[0].verticesNeedUpdate = true;
      bigStones[0].verticesNeedUpdate = true;
    }
    console.log(smallStones[0]);
    animateSmallStone()


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
  simulateMagicParticles();
  
  renderer.render( scene, camera );
}

