var sceneEl = document.querySelector("a-scene");
var cameraEl = document.getElementById("camera");

//-- used by keyboard shoot --
const shoot = () => {
  const bullet = document.createElement("a-sphere");
  let pos = cameraEl.getAttribute("position");
  bullet.setAttribute("position", pos);
  //bullet.setAttribute("velocity", getDirection(cameraEl, 30));
  var direction = new THREE.Vector3();
  cameraEl.object3D.getWorldDirection( direction );
  bullet.setAttribute("velocity", direction.multiplyScalar(-25 ));
  bullet.setAttribute("dynamic-body", {shape: 'box', mass: 1});
  bullet.setAttribute("radius", 0.2);
  bullet.setAttribute("collide-detect", null);

  sceneEl.appendChild(bullet);
};

//-- keyboard shoot --
document.onkeydown = (event) => {
  //-- keycode for space bar --
  if (event.which == 32) {
    shoot();
  }
};