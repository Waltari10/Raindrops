const GameObject = require('./GameObject')
const RainDrop = require('./RainDrop')

module.exports = class RainSpawner extends GameObject {
    constructor(args) {
        super(args)
        this.rainDrops = []
    }
    update() {
        const rainDrop1 = new RainDrop({ x: _.random(0, canvas.width), y: -100, drag: 1, gravity: true })
        this.rainDrops.push(rainDrop1)
        gameObjects.push(rainDrop1)
    }
}