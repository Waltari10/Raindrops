const GameObject = require('./GameObject')

module.exports = class RainDrop extends GameObject {

    render() {
        ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI, false)
        ctx.strokeStyle = 'blue'
    }

    update() {
        if (this.y > canvas.height - 5 && this.isGravity) {
            this.isGravity = false
        }
    }
}