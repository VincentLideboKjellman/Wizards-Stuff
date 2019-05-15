// 'use strict';

//Creating the skybox cube
var skyboxGeometry = new THREE.CubeGeometry(1000, 1000, 1000);

//adding textures to each side of the skybox cube
var skyboxMaterials = 
[    
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "skyboxTextures/blue_front.png" ), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "skyboxTextures/blue_back.png" ), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "skyboxTextures/blue_up.png" ), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "skyboxTextures/blue_down.png" ), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "skyboxTextures/blue_right.png" ), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "skyboxTextures/blue_left.png" ), side: THREE.DoubleSide })
];


//puts it together and adds it to the scene
var skyboxMaterial = new THREE.MeshFaceMaterial( skyboxMaterials );
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
// scene.add ( skybox );
