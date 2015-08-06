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

}

Pendulum.prototype.update = update

function update (t) {
  var dt = t - this.initialTime
  // compute theta, z, and y based on t
}