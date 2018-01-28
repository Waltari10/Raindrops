const acceleration = 9.81

module.exports = {
    getDistance: function (time) {
        return acceleration * Math.pow(time / 1000, 2) / 2
    },
    getVelocity: function (time, initialVelocity = 0) {
        return initialVelocity + (acceleration * time)
    },
    getForce: function (weight, acceleration) {
        return mass * acceleration
    },
}