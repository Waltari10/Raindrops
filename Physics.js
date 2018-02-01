const defaultAcceleration = 9.81
const airDensity = 1.225 // kg/m3
const circleDragCoefficient = 0.47
const streamlinedBodyCoefficient = 0.04
const crossSectionalArea = 1

module.exports = {
  getDistance: function (time, acceleration = defaultAcceleration) {
    return acceleration * Math.pow(time / 1000, 2) / 2
  },
  getVelocity: function (time, initialVelocity = 0, acceleration = defaultAcceleration) {
    return initialVelocity + (acceleration * time)
  },
  getForce: function (weight, acceleration = defaultAcceleration) {
    return weight * acceleration
  },
  getDrag: function (velocity) { // drag returns force in newton
    return 0.5 * airDensity * Math.pow(velocity, 2) * crossSectionalArea * streamlinedBodyCoefficient
  }
}