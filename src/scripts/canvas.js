document.addEventListener("DOMContentLoaded", init);

function init() {
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#webgl"),
    alpha: true,
    antialias: true,
  });

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(10, 1 / 1);

  const cubeGeometry = new THREE.BoxGeometry(200, 200, 200);

  const material = new THREE.MeshLambertMaterial({
    color: 0x20b2aa,
  });

  const cubeMesh = new THREE.Mesh(cubeGeometry, material);

  scene.add(cubeMesh);

  const directionalLight = new THREE.DirectionalLight(0xffffff);

  directionalLight.position.set(200, 300, 100);

  directionalLight.lookAt(0, 0, 0);

  scene.add(directionalLight);

  camera.position.set(400, 400, 400);

  camera.lookAt(0, 0, 0);

  tick();

  function tick() {
    requestAnimationFrame(tick);

    cubeMesh.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
}
