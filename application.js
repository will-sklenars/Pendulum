// require('normalize-css');
var THREE = require('./js/three.min.js');

var orbitControl = require('./js/orbitControls');
var helpers = require('./js/helpers');
var Pendulum = require('./js/pendulum');

var mesh;
var balls = [];
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 1,10000);

// Add axis helper to show axis in x (red) and y (green) z (blue) direction, remove later
var axisHelper = new THREE.AxisHelper( 10000 );
scene.add( axisHelper );

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// setup orbit controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 0, 0);


for (var i = 0; i < 1; i++) {

  var geometry = new THREE.SphereGeometry(150, 150, 150);
  var material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading});
  var mesh = new THREE.Mesh(geometry, material);
  balls.push(mesh)
  scene.add( mesh );


};

camera.position.z = 2000;

var pendulums = [
  new Pendulum({
    length: 1,
    z: 0,

  })
]

function render() {
  requestAnimationFrame(render);
  var time = Date.now()/1000 // increments 1/second
  pendulums.forEach(function (pendulum) {
    pendulum.update(time)
  })


  // TODO: calulate and plot xy coordinates



renderer.render(scene, camera);
}

render();






