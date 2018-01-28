const GameObject = require('./GameObject')
const Particle = require('./Particle')

module.exports = class RainDrop extends GameObject {
    render() {
        ctx.strokeStyle = 'blue'
        ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI, false)
    }
    update() {
        if (this.y > canvas.height - 5 && this.isGravity) {
            this.isGravity = false
            this.goSplat()
        }
    }
    goSplat() {
        // instantiate(
        //     Particle, {
        //         x: this.x,
        //         y: this.y
        //     }
        // )
        destroy(this)
        // TODO destroy self and spawn 3 fragments in random directions
    }
}