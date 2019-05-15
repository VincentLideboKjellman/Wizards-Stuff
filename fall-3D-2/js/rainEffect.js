
var particleSystem, particleCount, particles;

 ///////////////////
    // RAIN  //
    ///////////////////
    particleCount = 14000;
    var pMaterial = new THREE.PointCloudMaterial({
      color: 0xFFFFFF,
      size: 0.8,
      map: loader.load(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/212131/raindrop2.png"
       ),
       blending: THREE.AdditiveBlending,
       depthTest: false,
       transparent: true
    });

    particles = new THREE.Geometry;
    for (var i = 0; i < particleCount; i++) {
        var pX = Math.random()*500 - 250,
            pY = Math.random()*500 - 250,
            pZ = Math.random()*500 - 250,
            particle = new THREE.Vector3(pX, pY, pZ);
        particle.velocity = {};
        particle.velocity.y = 0;
        particles.vertices.push(particle);
    }
    particleSystem = new THREE.PointCloud(particles, pMaterial);
    scene.add(particleSystem);

    

        var pCount = particleCount;
        while (pCount--) {
        var particle = particles.vertices[pCount];
        if (particle.y < -200) {
          particle.y = 200;
          particle.velocity.y = 0;
        }
        particle.velocity.y -= Math.random() * .02;
        particle.y += particle.velocity.y;
        }
        particles.verticesNeedUpdate = true;
    

        particleSystem.rotation.y += 0.0015;

    // function animate() {
    //     requestAnimationFrame( animate );
    //     //particleSystem.rotation.y += 0.01;
    //     particleSystem.rotation.y += 0.0015;
    //     simulateRain();
    //     // controls.update();
    //     // render();
    // }