'use strict';

//Creating the skybox cube
var skyboxGeometry = new THREE.CubeGeometry(1500, 1500, 1500);

//Another way of making a skybox, not actually a 3d box
scene.background = new THREE.CubeTextureLoader()
	.setPath( 'assets/skyboxTextures/' )
	.load( [
		'starfield_front.png',
		'starfield_back.png',
		'starfield_up.png',
		'starfield_down.png',
		'starfield_right.png',
		'starfield_left.png'
	] );
