var fireplaceListener = new THREE.AudioListener();
camera.add( fireplaceListener );

var sphere = new THREE.SphereBufferGeometry( 20, 32, 16 );
material1 = new THREE.MeshPhongMaterial( { color: 0xFF0000, opacity: 0, transparent: true } );

// sound spheres
var audioLoader = new THREE.AudioLoader();
var fireplaceEmitter = new THREE.Mesh( sphere, material1 );
fireplaceEmitter.position.set( -650, 0, 36 );
scene.add( fireplaceEmitter );
var fireplaceSound = new THREE.PositionalAudio( fireplaceListener );

audioLoader.load( 'assets/sounds/fireplace.wav', function ( buffer ) {
	fireplaceSound.setBuffer( buffer );
    fireplaceSound.setRefDistance( 20 );
    fireplaceSound.setLoop( true );
	fireplaceSound.setVolume( 3 );
	fireplaceSound.play();
} );

fireplaceEmitter.add( fireplaceSound );

analyser1 = new THREE.AudioAnalyser( fireplaceSound, 32 );


material1.emissive.b = analyser1.getAverageFrequency() / 256;
