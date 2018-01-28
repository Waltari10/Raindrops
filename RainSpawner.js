const GameObject = require('./GameObject')
const RainDrop = require('./RainDrop')

module.exports = class RainSpawner extends GameObject {
    constructor(args) {
        super(args)
        this.rainDrops = []
    }
    update() {
        const rainDrop = instantiate(RainDrop, { 
            x: _.random(0, canvas.width), 
            y: -100, 
            drag: 1, 
            isGravity: true,
            mass: 0.1
        })
        this.rainDrops.push(rainDrop)
    }
}