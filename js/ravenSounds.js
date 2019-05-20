var ravenListener = new THREE.AudioListener();
camera.add( ravenListener );

var sphere = new THREE.SphereBufferGeometry( 20, 32, 16 );
material1 = new THREE.MeshPhongMaterial( { color: 0xffaa00, flatShading: true, shininess: 0 } );

// sound spheres
var audioLoader = new THREE.AudioLoader();
var ravenEmitter = new THREE.Mesh( sphere, material1 );
ravenEmitter.position.set( - 250, 30, 0 );
scene.add( ravenEmitter );
var ravenSound = new THREE.PositionalAudio( ravenListener );

audioLoader.load( 'assets/sounds/raven.wav', function ( buffer ) {
	ravenSound.setBuffer( buffer );
    ravenSound.setRefDistance( 20 );
    ravenSound.setLoop( true );
	ravenSound.setVolume( 1 );
	ravenSound.play();
} );

ravenEmitter.add( ravenSound );
                
analyser1 = new THREE.AudioAnalyser( ravenSound, 32 );


material1.emissive.b = analyser1.getAverageFrequency() / 256;