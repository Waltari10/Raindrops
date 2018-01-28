module.exports = class RainSpawner extends GameObject {
    constructor(args) {
        super(args)
        this.rainDrops = []
    }
    update() {
        const rainDrop1 = new RainDrop({ x: _.random(0, canvas.width), y: -100, gravity: true })
        const rainDrop2 = new RainDrop({ x: _.random(0, canvas.width), y: -100, gravity: true })
        this.rainDrops.push(rainDrop1)
        gameObjects.push(rainDrop1)
        this.rainDrops.push(rainDrop2)
        gameObjects.push(rainDrop2)
    }
}