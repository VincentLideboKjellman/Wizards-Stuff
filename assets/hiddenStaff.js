// HIDDEN OBJECT

let hiddenObjectPositions = [
  [160, 32, 725, 0.01], //behind tower
  [400, 15, 810, 0.01], //tower stairs
  [780, 10, -270, 0.01], //well
  [660, 10, -470, 0.01], //garden tree
  [665, 30, 60, 2], //table
  [40, 40, 700, 2], //wagon
  [225, 20, -588, 0.01], //white tree
  [-420, -10, -200, 0.01], // house and tree
  [-430, 20, -660, 0.01], // behind house
  [-770, 3, -520, 2], //skull
  [100, 30, 50, 0.01] //test
];

let randomPosition = Math.floor(Math.random() * 10)
console.log(randomPosition);

let staffFile = 'models/obj/StaffExp.obj';
new THREE.OBJLoader()
.load(staffFile, (staff) => {
  let texture = new THREE.TextureLoader().load('models/obj/StaffExp_map1_emissive.png');
  staff.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
      objects.push(child);
    }});
  scene.add(staff);
  // staff.position.set(hiddenObjectPositions[randomPosition][0], hiddenObjectPositions[randomPosition][1], hiddenObjectPositions[randomPosition][2]);
  // staff.rotation.x = Math.PI / hiddenObjectPositions[randomPosition][3];
  // staff.scale.set(6,6,6)
  staff.position.set(hiddenObjectPositions[10][0], hiddenObjectPositions[10][1], hiddenObjectPositions[10][2]);
  staff.rotation.x = Math.PI / hiddenObjectPositions[10][3];
  staff.scale.set(6,6,6)
  objects.push(staff);
});
