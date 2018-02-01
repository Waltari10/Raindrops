const GameObject = require('./GameObject')

const pathRadius = 400

module.exports = class DayCycleManager extends GameObject {
  constructor(props) {
    super(props)
    this.time = 0
    this.msInDay = 5000
  }
  update() {
    this.time += timeDelta
    if (this.time > this.msInDay) this.time = 0
  }
}
