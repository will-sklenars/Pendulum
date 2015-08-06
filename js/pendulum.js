var THREE = require('./three.min.js');

module.exports = Pendulum

function Pendulum (opts) {
  this.length = opts.length || 1
  // z is constant
  this.z = opts.z || 0

  // initial time
  this.initialTime = opts.initialTime || Date.now()
  // angle against the normal
  this.theta = opts.theta || 0
  // x and y vary with t
  this.x = opts.x || 0
  this.y = opts.y || 0
  this.mesh = createMesh()
  this.mesh.position.z = this.z
}

var createMesh = function() {
  var geometry = new THREE.SphereGeometry(150, 150, 150)
  var material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading})
  return new THREE.Mesh(geometry, material)
};

Pendulum.prototype.update = function update (t) {
  var dt = t - this.initialTime
  // compute theta, z, and y based on t
  this.mesh.position.x = Math.sin( Date.now() * 0.001 * this.length ) * 500;
  this.mesh.position.y = Math.sin( Date.now() * 0.001 * this.length/4 ) * 500;
  // console.log(this)

}

Pendulum.prototype.addToScene = function (scene) {
  scene.add(this.mesh)
}