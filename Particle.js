const GameObject = require('./GameObject')

module.exports = class Particle extends GameObject {
    constructor(args){
        super(args)
        this.spawnedAt = Date.now()
    }
    render() {
        ctx.strokeStyle = 'blue'
        ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI, false)
    }
    update() {
        if (this.spawnedAt + 120 < Date.now()) {
            destroy(this)
        }
    }
}