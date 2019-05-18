'use strict';

// path way stones
OBJFile = 'models/obj/pawprint.obj';
let pathWayFile = 'models/obj/pathwaytexture.png';
new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-600, -62, -200)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-540, -62, -280)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-490, -62, -360)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-410, -62, -440)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-350, -62, -510)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-280, -62, -550)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-200, -62, -520)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-130, -62, -450)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-90, -62, -370)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-40, -62, -290)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-10, -62, -210)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-20, -62, -120)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-20, -62, -40)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-40, -62, 30)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-60, -62, 110)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-100, -62, 200)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-160, -62, 280)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-210, -62, 350)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-240, -62, 410)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }
  });
  scene.add(object);
  object.position.set(-300, -62, 480)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-340, -62, 580)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-390, -62, 660)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-480, -62, 690)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-560, -62, 700)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-620, -62, 620)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-660, -62, 540)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-650, -62, 440)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-620, -62, 340)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-570, -62, 250)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-510, -62, 160)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-490, -62, 70)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-510, -62, -10)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-540, -62, -100)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-730, -62, 340)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-800, -62, 250)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-810, -62, 160)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-840, -62, 70)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-780, -62, -10)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});

new THREE.OBJLoader()
.load(OBJFile, (object) => {
  let texture = new THREE.TextureLoader().load(pathWayFile);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }});
  scene.add(object);
  object.position.set(-700, -62, -100)
  object.rotation.y = Math.floor( Math.random() * 5);
  object.scale.set(38,38,38)
});
