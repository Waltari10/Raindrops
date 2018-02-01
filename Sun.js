const GameObject = require('./GameObject')
const { getXOnCircle, getYOnCircle } = require('./Physics')

module.exports = class Sun extends GameObject {
  render() {
    ctx.strokeStyle = 'orange'
    ctx.arc(this.x, this.y, 40, 0, 2 * Math.PI, false)
    ctx.fillStyle = 'orange';
    ctx.fill();
  }
  update() {
    this.x = getXOnCircle(dayCycleManager.pathRadius, Math.PI + (Math.PI * (dayCycleManager.time / (dayCycleManager.msInDay / 2))), canvas.width / 2)
    this.y = getYOnCircle(dayCycleManager.pathRadius, Math.PI + (Math.PI * (dayCycleManager.time / (dayCycleManager.msInDay / 2))), canvas.height)
  }
}
