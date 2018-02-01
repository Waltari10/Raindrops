const GameObject = require('./GameObject')
const { getXOnCircle, getYOnCircle } = require('./Physics')

module.exports = class Moon extends GameObject {
  render() {
    ctx.strokeStyle = 'grey'
    ctx.arc(this.x, this.y, 40, 0, 2 * Math.PI, false)
    ctx.fillStyle = 'grey';
    ctx.fill();
  }
  update() {
    this.x = getXOnCircle(dayCycleManager.pathRadius, Math.PI * (dayCycleManager.time / (dayCycleManager.msInDay / 2)), canvas.width / 2)
    this.y = getYOnCircle(dayCycleManager.pathRadius, Math.PI * (dayCycleManager.time / (dayCycleManager.msInDay / 2)), canvas.height)
  }
}
