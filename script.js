const _ = require('lodash')
const GameObject = require('./GameObject')

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let timeDelta = 0
const targetFPS = 60
const targetFrameDuration = (1000 / targetFPS)

const acceleration = 9.81

function getDistance(time) {
    return acceleration * Math.pow(time / 1000, 2) / 2
}

function getVelocity(time, initialVelocity = 0) {
    return initialVelocity + (acceleration * time)
}

class RainDrop extends GameObject {
    render() {
        ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI)
    }
    update() {
        this.velocity = getVelocity((timeDelta / 1000), this.velocity)
        this.y += this.velocity
    }
}

class RainSpawner extends GameObject {
    constructor(args){
        super(args)
        this.rainDrops = []
    }
    update() {
        const rainDrop1 = new RainDrop({ x: _.random(0, canvas.width), y: -100 })
        const rainDrop2 = new RainDrop({ x: _.random(0, canvas.width), y: -100 })
        this.rainDrops.push(rainDrop1)
        gameObjects.push(rainDrop1)
        this.rainDrops.push(rainDrop2)
        gameObjects.push(rainDrop2)
    }
}

const gameObjects = [new RainSpawner()]

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
     for (let i = 0; i < gameObjects.length; i++) {
         ctx.moveTo(gameObjects[i].x, gameObjects[i].y)
         gameObjects[i].render()
     }
     ctx.closePath()
     ctx.stroke()
}

function loop() {
    const startTime = Date.now()
    updateGameObjects()
    draw()
    const renderTime = Date.now() - startTime
    timeDelta = renderTime < targetFrameDuration ? targetFrameDuration : renderTime
    this.setTimeout(() => {
        loop()
    }, targetFrameDuration - renderTime)
}

function updateGameObjects (){
    for (let i = 0; i < gameObjects.length; i++) {
        gameObjects[i].update()
    }
}


loop()