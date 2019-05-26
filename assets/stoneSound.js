var stonesListener = new THREE.AudioListener();
camera.add( stonesListener );

var sphere = new THREE.SphereBufferGeometry( 20, 32, 16 );
material1 = new THREE.MeshPhongMaterial( { color: 0xFF0000, opacity: 0, transparent: true } );

// sound spheres
var audioLoader = new THREE.AudioLoader();
var stonesEmitter = new THREE.Mesh( sphere, material1 );
stonesEmitter.position.set( 540, 50, -250 );
scene.add( stonesEmitter );
var stonesSound = new THREE.PositionalAudio( stonesListener );

audioLoader.load( 'assets/sounds/stones.wav', function ( buffer ) {
	stonesSound.setBuffer( buffer );
    stonesSound.setRefDistance( 20 );
    stonesSound.setLoop( true );
	stonesSound.setVolume( 1 );
	stonesSound.play();
} );

stonesEmitter.add( stonesSound );

analyser1 = new THREE.AudioAnalyser( stonesSound, 32 );


material1.emissive.b = analyser1.getAverageFrequency() / 256;