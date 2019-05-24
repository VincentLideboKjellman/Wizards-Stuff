'use strict';

// OBJ Files
let objloader = new THREE.OBJLoader();

// cart
let OBJFile = 'models/obj/cart.obj';
let blackTexture = 'models/castle/Palette_Spec.png';
new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(blackTexture);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(0, 33, 650)
  object.scale.set(70,70,70)
});

new THREE.OBJLoader()
.load('models/obj/cart-2.obj', (object) => {
  let texture = new THREE.TextureLoader().load(blackTexture);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-100, 1, -550)
  object.scale.set(70,70,70)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(blackTexture);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(750, 29, -450)
  object.scale.set(50,50,50)
});


// hidden cage
OBJFile = 'models/obj/cage.obj';
new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(blackTexture);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-840, 10, -500)
  object.rotation.z = -Math.PI / 2.8;
  object.scale.set(50,50,50)
  let light = new THREE.PointLight( 0x8539F8, 3, 300);
  light.position.set( 540, 30, -250 );
  scene.add( light );
});


// gemstones garden
OBJFile = 'models/obj/gem.obj.obj';
let gemstoneFile = 'models/obj/purplegemstone.png';
new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(gemstoneFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(540, 50, -250)
  object.rotation.x = -Math.PI / 2;
  object.rotation.z = -Math.PI / 2;
  object.scale.set(0.8,0.8,0.8)
  let light = new THREE.PointLight( 0x8539F8, 3, 300);
  light.position.set( 540, 30, -250 );
  scene.add( light );
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(gemstoneFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(590, 50, -250)
  object.rotation.x = -Math.PI / 2;
  object.rotation.z = -Math.PI / 2;
  object.scale.set(0.5,0.5,0.5)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(gemstoneFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(510, 50, -300)
  object.rotation.x = -Math.PI / 2;
  object.rotation.z = -Math.PI / 2;
  object.scale.set(0.5,0.5,0.5)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(gemstoneFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(510, 50, -200)
  object.rotation.x = -Math.PI / 2;
  object.rotation.z = -Math.PI / 2;
  object.scale.set(0.5,0.5,0.5)
});


// book
new THREE.OBJLoader()
.load('models/light/GrimoireTarotCandle.obj', (object) => {
  let texture = new THREE.TextureLoader().load('models/light/Grimoire_Spec.png');
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(680, 26, 66)
  object.scale.set(38,38,38)
});


// candle
new THREE.OBJLoader()
.load('models/light/Candle.obj', (object) => {
  let texture = new THREE.TextureLoader().load('models/light/Emission_Candle.png');
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(680, 40, 66)
  object.scale.set(200,200,200)
  let light = new THREE.PointLight( 0x8539F8, 4, 200);
  light.position.set( 680, 80, 66 );
  scene.add( light );
});


// Bat
// for(let i = 0; i < 1; i ++) {
//   new THREE.OBJLoader()
//   .load('models/obj/bat.obj', (bat) => {
//     let texture = new THREE.TextureLoader().load('models/obj/assets_texture.jpg');
//     bat.traverse((child) => {
//       if (child instanceof THREE.Mesh) {
//         child.material.map = texture;
//       }});
//     scene.add(bat);
//     bat.position.x = 680;
//     bat.position.y = Math.floor( Math.random() * 40 + 100);
//     bat.position.z = 66;
//     bat.rotation.x = Math.PI / 2;
//     bat.scale.set(50,50,50)
//     // bats.push(bat);
//   });
// // }


// White trees
OBJFile = 'models/obj/lowpoly_dead_tree.obj.obj';
for(let i = 0; i < 5; i ++) {
  new THREE.OBJLoader()
  .load(OBJFile, (object) => {
    scene.add(object);
    object.position.x = Math.floor( Math.random() * 20 - 10 ) * 10 + 280;
    object.position.y = 40;
    object.position.z = Math.floor( Math.random() * 20 - 10 ) * 10 + 850;
    object.rotation.y = Math.floor(Math.random() * 5);
    object.scale.set(0.7,0.7,0.7);
  });
}

for(let i = 0; i < 5; i ++) {
  new THREE.OBJLoader()
  .load(OBJFile, (object) => {
    scene.add(object);
    object.position.x = Math.floor( Math.random() * 20 - 10 ) * 5 + 900;
    object.position.y = 40;
    object.position.z = Math.floor( Math.random() * 20 - 10 ) * 50 + 50;
    object.rotation.y = Math.floor(Math.random() * 5);
    object.scale.set(0.7,0.7,0.7);
  });
}

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  scene.add(object);
  object.position.set(230, 40,120)
  object.scale.set(0.7,0.7,0.7);
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  scene.add(object);
  object.position.set(350, 40,130)
  object.scale.set(0.7,0.7,0.7);
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  scene.add(object);
  object.position.set(230, 40,-580)
  object.scale.set(0.7,0.7,0.7);
});


// Big tower
OBJFile = 'models/castle/Tower.obj';
let JPGFile = 'models/castle/Palette3.png';
new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(26, 26, 26);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(660, -3,660)
  object.rotation.y = Math.PI / 2;
  object.rotation.y = -18;
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(20, 20, 20);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(750, -170,550)
  object.rotation.y = Math.PI / 2;
  object.rotation.y = -18;
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(20, 20, 20);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(560, -170,765)
  object.rotation.y = Math.PI / 2;
  object.rotation.y = -18;
});


// Smaller tower
OBJFile = 'models/castle/Tower_Half.obj';
new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(30, 30, 30);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(480, -180,860)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(30, 30, 30);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(858, -180, 480)
});


// Garden towers
new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(16, 16, 16);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(290, -100, -590)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(16, 16, 16);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(870, -100, -590)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(16, 16, 16);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(290, -100, 80)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(16, 16, 16);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(160, -100, 680)
  object.rotation.y = -16;
});


// Garden entré
OBJFile = 'models/castle/Doorway.obj';
new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(26, 26, 26);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(250, 0, -30)
  object.rotation.y = Math.PI;
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(26, 26, 26);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(250, 0, -180)
  object.rotation.y = Math.PI;
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(26, 26, 26);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(250, 0, -330)
  object.rotation.y = Math.PI;
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(26, 26, 26);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(250, 0, -480)
  object.rotation.y = Math.PI;
});


// Garden floor
OBJFile = 'models/castle/Bridge_Mid.obj';
new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(45, 45, 45);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(540, -288, -250)
  object.rotation.y = 3.15;
});

OBJFile = 'models/castle/Stairs1_Left.obj';
new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(16, 16, 16);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(710, -1,405)
  object.rotation.y = 2.5;
});

OBJFile = 'models/castle/Stairs1_Right.obj';
new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(16, 16, 16);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(410, -1,740)
  object.rotation.y = 2.35;
});


// Spiked fence
OBJFile = 'models/castle/Spiked_Fence.obj';
new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(42, 42, 42);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(200, -1,590)
  object.rotation.y = 2.35;
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(42, 42, 42);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(290, -1,502)
  object.rotation.y = 2.35;
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(42, 42, 42);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(400, -1, 450)
  object.rotation.y = 1.7;
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(42, 42, 42);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(250, -1, 170)
  object.rotation.y = 2.7;
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(42, 42, 42);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(100, -1, 765)
  object.rotation.y = 2.7;
});


// Garden spike fence
new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(42, 42, 42);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(390, -1, -620)
  object.rotation.y = Math.PI / 2;
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(42, 42, 42);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(516, -1, -620)
  object.rotation.y = Math.PI / 2;
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(42, 42, 42);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(642, -1, -620)
  object.rotation.y = Math.PI / 2;
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  object.scale.set(42, 42, 42);
  let texture = new THREE.TextureLoader().load(JPGFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(768, -1, -620)
  object.rotation.y = Math.PI / 2;
});


// Table
new THREE.OBJLoader()
.load('models/fbxObjects/Table.obj', (object) => {
  object.scale.set(1.4, 1.4, 1.4);
  let texture = new THREE.TextureLoader().load('models/castle/Palette_Spec.png');
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(670, -80, 80)
  object.rotation.y = Math.PI;
  object.rotation.x = Math.PI / 2;
  object.rotation.z = Math.PI / 3.3;
});


// Garden well
new THREE.OBJLoader()
.load('models/fbxObjects/Well.obj', (object) => {
  object.scale.set(11, 11, 11);
  let texture = new THREE.TextureLoader().load('models/castle/Palette_Spec.png');
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(760, -8, -250)
  object.rotation.y = Math.PI / 3;
  let light = new THREE.PointLight( 0x8539F8, 10, 70);
  light.position.set( 760, 5, -250 );
  scene.add( light );
  light = new THREE.PointLight( 0xFFFFFF, 10, 70);
  light.position.set( 760, 100, -250 );
  scene.add( light );
});
