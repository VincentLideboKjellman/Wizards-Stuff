            var materials = [], parameters;
			init();
            animate();
            
			function init() {
				var magicParticleGeometry = new THREE.BufferGeometry();
				var vertices = [];
				var magicParticleTextureLoader = new THREE.TextureLoader();
				var sprite1 = magicParticleTextureLoader.load( 'assets/particleImages/raindrop.png' );
				var sprite2 = magicParticleTextureLoader.load( 'assets/particleImages/raindrop.png' );
				var sprite3 = magicParticleTextureLoader.load( 'assets/particleImages/raindrop.png' );
				var sprite4 = magicParticleTextureLoader.load( 'assets/particleImages/raindrop.png' );
				var sprite5 = magicParticleTextureLoader.load( 'assets/particleImages/raindrop.png' );
				for ( var i = 0; i < 10000; i ++ ) {
					var x = Math.random() * 2000 - 1000;
					var y = Math.random() * 2000 - 1000;
					var z = Math.random() * 2000 - 1000;
					vertices.push( x, y, z );
				}
				magicParticleGeometry.addAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
				parameters = [
					[[ 1.0, 0.2, 0.5 ], sprite2, 20 ],
					[[ 0.95, 0.1, 0.5 ], sprite3, 15 ],
					[[ 0.90, 0.05, 0.5 ], sprite1, 10 ],
					[[ 0.85, 0, 0.5 ], sprite5, 8 ],
					[[ 0.80, 0, 0.5 ], sprite4, 5 ]
				];
				for ( var i = 0; i < parameters.length; i ++ ) {
					var color = parameters[ i ][ 0 ];
					var sprite = parameters[ i ][ 1 ];
					var size = parameters[ i ][ 2 ];
					materials[ i ] = new THREE.PointsMaterial( { size: size, map: sprite, blending: THREE.AdditiveBlending, depthTest: false, transparent: true } );
					materials[ i ].color.setHSL( color[ 0 ], color[ 1 ], color[ 2 ] );
					var magicParticles = new THREE.Points( magicParticleGeometry, materials[ i ] );
					magicParticles.rotation.x = Math.random() * 6;
					magicParticles.rotation.y = Math.random() * 6;
					magicParticles.rotation.z = Math.random() * 6;
					scene.add( magicParticles );
				}
			}
			function animate() {
				requestAnimationFrame( animate );
				render();
			}
			function render() {
				var time = Date.now() * 0.00005;
				for ( var i = 0; i < scene.children.length; i ++ ) {
					var object = scene.children[ i ];
					if ( object instanceof THREE.Points ) {
						object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );
					}
				}
				for ( var i = 0; i < materials.length; i ++ ) {
					var color = parameters[ i ][ 0 ];
					var h = ( 360 * ( color[ 0 ] + time ) % 360 ) / 360;
					materials[ i ].color.setHSL( h, color[ 1 ], color[ 2 ] );
				}
				renderer.render( scene, camera );
			}
