'use strict';

  let loader = new THREE.FBXLoader(); // All fbx models

  // houses
  let houseModel = 'models/fbxObjects/house.fbx';
  loader.load(houseModel, (house) => {
    house.position.set(-350, -55, 200)
    house.scale.set(2,2,2)
    scene.add(house);
    let light = new THREE.PointLight( 0x8539F8, 3, 95);
    light.position.set( -350, 10, 280 );
    scene.add(light);
  });

  loader.load(houseModel, (house) => {
    house.position.set(-360, -50, -280)
    house.scale.set(1.5,1.5,1.5)
    house.rotation.y = Math.PI / 1.4;
    scene.add( house );
    let light = new THREE.PointLight( 0x8539F8, 3, 85);
    light.position.set( -320, 10, -330 );
    scene.add( light );
  });

  loader.load(houseModel, (house) => {
    house.position.set(-450, -50, 570)
    house.scale.set(1.8,1.8,1.8)
    house.rotation.y = Math.PI / 3;
    scene.add( house );
    let light = new THREE.PointLight( 0x8539F8, 3, 70);
    light.position.set( -410, 30, 600 );
    scene.add( light );
  });

  loader.load(houseModel, (house) => {
    house.position.set(-360, -5, -550)
    house.scale.set(1.7,1.7,1.7)
    house.rotation.y = Math.PI / 5;
    scene.add( house );
    let light = new THREE.PointLight( 0x8539F8, 3, 80);
    light.position.set( -320, 70, -500 );
    scene.add( light );
  });

  loader.load(houseModel, (house) => {
    house.position.set(-200, -5, 600)
    house.scale.set(2,2,2);
    scene.add( house );
    let light = new THREE.PointLight( 0x8539F8, 4, 85);
    light.position.set( -190, 80, 670 );
    scene.add( light );
  });


  //entrance castle dried trees
  let deadTreeModel = 'models/fbxObjects/DriedTree.fbx';
  loader.load(deadTreeModel, (tree) => {
    tree.position.set(1050, -1, -40)
    scene.add( tree );
  });

  loader.load(deadTreeModel, (tree) => {
    tree.position.set(1050, -1, -455)
    scene.add( tree );
  });


  // lantern outside garden towers
  let lanternFile = 'models/light/medieval_lantern.fbx';
  let lanternTexture = 'models/castle/Palette_Spec.png';
  loader.load(lanternFile, (lantern) => {
    lantern.position.set(240, -2, 65)
    lantern.rotation.y = Math.PI / 2;
    lantern.scale.set(1.6,1.6,1.6)
    let texture = new THREE.TextureLoader().load(lanternTexture);
    lantern.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
      }});
    scene.add( lantern );
    let light = new THREE.PointLight( 0x8539F8, 1.5, 450);
    light.position.set( 220, 5, 65 );
    scene.add( light );
  });

  loader.load(lanternFile, (lantern) => {
    lantern.position.set(240, -1, -540)
    lantern.rotation.y = Math.PI / 2;
    lantern.scale.set(1.6,1.6,1.6)
    let texture = new THREE.TextureLoader().load(lanternTexture);
    lantern.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
      }});
    scene.add( lantern );
    let light = new THREE.PointLight( 0xF85147, 1.5, 450);
    light.position.set( 220, 5, -540 );
    scene.add( light );
  });

  //lantern outside spike fence
  loader.load(lanternFile, (lantern) => {
    lantern.position.set(150, 1, 600)
    lantern.rotation.y = Math.PI / 2;
    lantern.scale.set(1.6,1.6,1.6)
    let texture = new THREE.TextureLoader().load(lanternTexture);
    lantern.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
      }});
    scene.add( lantern );
    let light = new THREE.PointLight( 0x8539F8, 1.5, 450);
    light.position.set( 130, 10, 600 );
    scene.add( light );
  });

  //lantern outside castle
  loader.load(lanternFile, (lantern) => {
    lantern.position.set(410, 90, 770)
    lantern.rotation.y = Math.PI / 2;
    lantern.scale.set(1.2,1.2,1.2)
    let texture = new THREE.TextureLoader().load(lanternTexture);
    lantern.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
      }});
    scene.add( lantern );
    let light = new THREE.PointLight( 0x8539F8, 1.5, 350);
    light.position.set( 400, 90, 770 );
    scene.add( light );
  });

  loader.load(lanternFile, (lantern) => {
    lantern.position.set(745, 90, 400)
    lantern.rotation.y = Math.PI / 2;
    lantern.scale.set(1.2,1.2,1.2)
    let texture = new THREE.TextureLoader().load(lanternTexture);
    lantern.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
      }});
    scene.add( lantern );
    let light = new THREE.PointLight( 0x8539F8, 1.5, 350);
    light.position.set( 735, 90, 400 );
    scene.add( light );
  });

  // lantern in forest
  loader.load(lanternFile, (lantern) => {
    lantern.position.set(-800, -2, -580)
    lantern.rotation.y = Math.PI;
    lantern.scale.set(1.2,1.2,1.2)
    let texture = new THREE.TextureLoader().load(lanternTexture);
    lantern.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
      }});
    scene.add( lantern );
    let light = new THREE.PointLight( 0xFF0000, 1.8, 300);
    light.position.set( -780, 5, -580 );
    scene.add( light );
  });

  loader.load(lanternFile, (lantern) => {
    lantern.position.set(-600, -2, 700)
    lantern.rotation.y = Math.PI / 2;
    lantern.scale.set(1.2,1.2,1.2)
    let texture = new THREE.TextureLoader().load(lanternTexture);
    lantern.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
      }});
    scene.add( lantern );
    let light = new THREE.PointLight( 0x8539F8, 1.8, 300);
    light.position.set( -580, 5, 700 );
    scene.add( light );
  });

  loader.load(lanternFile, (lantern) => {
    lantern.position.set(-720, -2, 400)
    lantern.rotation.y = Math.PI / 2;
    lantern.scale.set(1.2,1.2,1.2)
    let texture = new THREE.TextureLoader().load(lanternTexture);
    lantern.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
      }});
    scene.add( lantern );
    let light = new THREE.PointLight( 0x8539F8, 1.8, 300);
    light.position.set( -700, 5, 400 );
    scene.add( light );
  });

  loader.load(lanternFile, (lantern) => {
    lantern.position.set(-540, -2, 400)
    lantern.rotation.y = Math.PI / 2;
    lantern.scale.set(1.2,1.2,1.2)
    let texture = new THREE.TextureLoader().load(lanternTexture);
    lantern.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
      }});
    scene.add( lantern );
    let light = new THREE.PointLight( 0x8539F8, 1.8, 300);
    light.position.set( -520, 5, 400 );
    scene.add( light );
  });


  // fireplace
  loader.load('models/light/bonfire.fbx', (fireplace) => {
    fireplace.position.set(-650, -2, 36)
    fireplace.scale.set(30,30,30)
    scene.add( fireplace );

    let light = new THREE.PointLight( 0xFF0000, 10, 160);
    light.position.set( -620, 10, -26 );
    scene.add( light );
    light = new THREE.PointLight( 0xFF6600, 10, 70);
    light.position.set( -610, 10, -96 );
    scene.add( light );
  });


  //skull
  let skullFile = 'models/fbxObjects/skul.fbx';
  loader.load(skullFile, (object) => {
    object.position.set(-800, 1, -500)
    object.scale.set(0.3,0.3,0.3)
    scene.add( object );
  });

  loader.load(skullFile, (object) => {
    object.position.set(-820, 11, -500)
    object.scale.set(0.3,0.3,0.3)
    object.rotation.y = Math.PI / 2;
    scene.add( object );
  });


  // TREES
  //4-trees model outside of garden
  let fourTreesFile = 'models/fbxObjects/ScaryTrees.fbx';
  for(let i = 0; i < 18; i ++) {
    loader.load(fourTreesFile, (tree) => {
      tree.position.x = Math.floor( Math.random() * 20 - 10 ) * 70 + 120;
      tree.position.y = -1;
      tree.position.z = Math.floor( Math.random() * 20 - 10 ) * 10 - 800;
      tree.rotation.y = Math.floor(Math.random() * 5);
      scene.add( tree );
    });
  }

  //4-trees model outside corner
  for(let i = 0; i < 8; i ++) {
    loader.load(fourTreesFile, (tree) => {
      tree.position.x = Math.floor( Math.random() * 20 - 10 ) * 35 + -180;
      tree.position.y = -1;
      tree.position.z = Math.floor( Math.random() * 20 - 10 ) * 12 + 860;
      scene.add( tree );
    });
  }

  //4-trees model outside on corner of map with stones
  for(let i = 0; i < 8; i ++) {
    loader.load(fourTreesFile, (tree) => {
      tree.position.x = Math.floor( Math.random() * 20 - 10 ) * 8 -880;
      tree.position.y = -1;
      tree.position.z = Math.floor( Math.random() * 20 - 10 ) * 50 + 350;
      tree.rotation.y = Math.PI / 2;
      scene.add( tree );
    });
  }

  loader.load(fourTreesFile, (tree) => {
    tree.position.set(-550, -1, -500)
    tree.rotation.y = Math.PI / 2;
    scene.add( tree );
  });

  // 4-trees model around houses
  loader.load(fourTreesFile, (tree) => {
    tree.position.set(-270, -1, -300)
    tree.rotation.y = Math.PI / 2;
    scene.add( tree );
  });

  loader.load(fourTreesFile, (tree) => {
    tree.position.set(-170, -1, -200)
    tree.rotation.y = Math.PI / 2;
    scene.add( tree );
  });

  loader.load(fourTreesFile, (tree) => {
    tree.position.set(-230, -1, 150)
    tree.rotation.y = Math.PI / 2;
    scene.add( tree );
  });

  loader.load(fourTreesFile, (tree) => {
    tree.position.set(-430, -1, -100)
    tree.rotation.y = Math.PI / 2;
    scene.add( tree );
  });

  loader.load(fourTreesFile, (tree) => {
    tree.position.set(-670, -1, 200)
    tree.rotation.y = Math.PI / 2;
    scene.add( tree );
  });

  loader.load(fourTreesFile, (tree) => {
    tree.position.set(-505, -1, 335)
    tree.rotation.y = Math.PI / 2;
    scene.add( tree );
  });

  loader.load(fourTreesFile, (tree) => {
    tree.position.set(-750, -1, 580)
    tree.rotation.y = Math.PI / 2;
    scene.add( tree );
  });


  // ROCKS
  // rocks around tower left side
  let rocksFile = 'models/fbxObjects/rock3.fbx';
  for(let i = 0; i < 10; i ++) {
    loader.load(rocksFile, (rock) => {
      rock.position.x = Math.floor( Math.random() * 20 - 10 ) * 8 + 880;
      rock.position.y = -2;
      rock.position.z = Math.floor( Math.random() * 20 - 10 ) * 50 + 50;
      rock.rotation.y = Math.floor(Math.random() * 5);
      rock.scale.set(0.4,0.4,0.4);
      scene.add(rock);
    });
  }

  // rocks around tower right side
  for(let i = 0; i < 5; i ++) {
    loader.load(rocksFile, (rock) => {
      rock.position.x = Math.floor( Math.random() * 20 - 10 ) * 5 + 160;
      rock.position.y = -1;
      rock.position.z = Math.floor( Math.random() * 20 - 10 ) * 10 + 650;
      rock.rotation.y = Math.floor(Math.random() * 5);
      rock.scale.set(0.4,0.4,0.4);
      scene.add(rock);
    });
  }

  // rocks around tower outside left
  for(let i = 0; i < 8; i ++ ){
    loader.load(rocksFile, (rock) => {
      rock.position.x = Math.floor( Math.random() * 20 - 10 ) * 5 + 210;
      rock.position.y = -1;
      rock.position.z = Math.floor( Math.random() * 20 - 10 ) * 20 -550;
      rock.rotation.y = Math.floor(Math.random() * 5);
      rock.scale.set(0.3,0.3,0.3);
      scene.add(rock);
    });
  }

  // rocks corner of forest
  for(let i = 0; i < 3; i ++) {
    loader.load(rocksFile, (rock) => {
      rock.position.x = Math.floor( Math.random() * 20 - 10 ) * 5 -400;
      rock.position.y = -1;
      rock.position.z = Math.floor( Math.random() * 20 - 10 ) * 15 -450;
      rock.scale.set(1.5,1.5,1.5);
      scene.add(rock);
    });
  }

  for(let i = 0; i < 12; i ++) {
    loader.load(rocksFile, (rock) => {
      rock.position.x = Math.floor( Math.random() * 20 - 10 ) * 10 -350;
      rock.position.y = -1;
      rock.position.z = Math.floor( Math.random() * 20 - 10 ) * 40 +250;
      rock.scale.set(0.7,0.7,0.7);
      scene.add(rock);
    });
  }

  for(let i = 0; i < 5; i ++) {
    loader.load(rocksFile, (rock) => {
      rock.position.x = Math.floor( Math.random() * 20 - 10 ) * 5 -660;
      rock.position.y = -1;
      rock.position.z = Math.floor( Math.random() * 20 - 10 ) * 5 + 150;
      rock.scale.set(0.4,0.4,0.4);
      scene.add(rock);
    });
  }

  loader.load(rocksFile, (rock) => {
    rock.position.set(-550, -1, -400)
    rock.scale.set(4,4,4);
    scene.add(rock);
  });

  loader.load(rocksFile, (rock) => {
    rock.position.set(-620, 60, -350)
    rock.scale.set(2.4,2.4,2.4);
    scene.add(rock);
  });

  loader.load(rocksFile, (rock) => {
    rock.position.set(-480, -1, -350)
    rock.scale.set(2.7,2.7,2.7);
    scene.add(rock);
  });

  loader.load(rocksFile, (rock) => {
    rock.position.set(-480, -1, -180)
    rock.scale.set(2.6,2.6,2.6);
    scene.add(rock);
  });

  loader.load(rocksFile, (rock) => {
    rock.position.set(-550, -1, -20)
    rock.scale.set(2.6,2.6,2.6);
    scene.add(rock);
  });

  loader.load(rocksFile, (rock) => {
    rock.position.set(-790, -1, -400)
    rock.scale.set(2,2,2);
    scene.add(rock);
  });

  loader.load(rocksFile, (rock) => {
    rock.position.set(-790, -1, -300)
    rock.scale.set(2,2,2);
    scene.add(rock);
  });

  loader.load(rocksFile, (rock) => {
    rock.position.set(-600, -1, 1160)
    rock.scale.set(2.7,2.7,2.7);
    scene.add(rock);
  });

  loader.load(rocksFile, (rock) => {
    rock.position.set(-500, -1, 1070)
    rock.scale.set(1.8,1.8,1.8);
    scene.add(rock);
  });

  // rocks corner of forest
  for(let i = 0; i < 8; i ++) {
    loader.load(rocksFile, (rock) => {
      rock.position.x = Math.floor( Math.random() * 20 - 10 ) * 5 -860;
      rock.position.y = -1;
      rock.position.z = Math.floor( Math.random() * 20 - 10 ) * 40 + 650;
      rock.scale.set(1.2,1.2,1.2);
      scene.add(rock);
    });
  }
