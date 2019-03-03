let count = 0;

function createRenderer() {
  //Where will the user see the 3d world
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  //Set the background color
  renderer.setClearColor("#16161d");
  renderer.shadowMap.enabled = true;
  renderer.setPixelRatio(window.devicePixelRatio);
  const output = document.querySelector("#output");
  output.appendChild(renderer.domElement);
  return renderer;
}

function createScene() {
  const scene = new THREE.Scene();
  return scene;
}

function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    45, // Field of view
    window.innerWidth / window.innerHeight,  //Ratio
    0.1,
    1000
  );

  camera.position.x = -30;  //left to right
  camera.position.y = 40; // Top to bottom
  camera.position.z = 30; // Front to back
  camera.lookAt(scene.position);
  return camera;
}

function createAxesHelper() {
  const axesHelper = new THREE.AxesHelper(40);
  return axesHelper;
}

function createFloor() {
  const floorMaterial = new THREE.MeshLambertMaterial({
    color: "#CED3DC"
  });

  //W, H, Depth
  const floorGeometry = new THREE.BoxGeometry(60, 0.1, 20);
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.position.x = 15;
  floor.receiveShadow = true;
  return floor;
}

function createCube(cube) {
  const geo = new THREE.BoxGeometry(cube.width, cube.height, cube.depth);
  const mat = new THREE.MeshLambertMaterial({
    color: "#A31621"
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(cube.x, cube.y, cube.z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function createSphere() {
  const geo = new THREE.SphereGeometry(4, 30, 30);
  const mat = new THREE.MeshLambertMaterial({
    color: "#016fb9"
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(20, 4, 0);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function createLight() {
  const pointLight = new THREE.PointLight("#FFFFFF", 1.5);
  pointLight.position.x = 4;
  pointLight.position.y = 18;
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 2048;
  pointLight.shadow.mapSize.height = 2048;
  return pointLight;
}

function createLightHelper(light) {
  const helper = new THREE.PointLightHelper(light);
  return helper;
}

function addOrbitControls(camera, renderer) {
  //console.log(camera, renderer);
  new THREE.OribitOontrols( camera,
    renderer.domElement
  );
}



const renderer = createRenderer();
const scene = createScene();
const camera = createCamera(scene);
const axes = createAxesHelper();
const floor = createFloor();
const sphere = createSphere();
const light = createLight();
const lightHelper = createLightHelper(light);

const cube = createCube({
  width: 4,
  height: 4,
  depth: 4,
  x: -4,
  y: 4,
  z: 0
});

addOrbitControls(camera, renderer);


scene.add(axes,floor, cube ,sphere, light, lightHelper);
renderer.render(scene, camera);

function animate() {
  count += 0.02;
  //sphere.position.x = count;
  sphere.position.x = Math.cos(count) * 10 + 18;
  //sphere.position.y = Math.abs(Math.sin(count)) * 10 + 4;


  // cube.rotation.x += 0.02;
  // cube.rotation.y += 0.02;
  // cube.rotation.z += 0.02;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
