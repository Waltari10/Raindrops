const GameObject = require('./GameObject')

module.exports = class DayCycleManager extends GameObject {
  constructor(props) {
    super(props)
    this.time = 0
    this.msInDay = 5000
    this.pathRadius = 500
  }
  update() {
    this.time += timeDelta
    if (this.time > this.msInDay) this.time = 0
  }
}
