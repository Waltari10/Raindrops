const _ = require('lodash')
const GameObject = require('./GameObject')
const RainDrop = require('./RainDrop')
const RainSpawner = require('./RainSpawner')
const { getVelocity } = require('./Physics')

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let timeDelta = 0
const targetFPS = 60
const targetFrameDuration = (1000 / targetFPS)

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
    updateGravity()
    updateGameObjects()
    draw()
    const renderTime = Date.now() - startTime
    timeDelta = renderTime < targetFrameDuration ? targetFrameDuration : renderTime
    this.setTimeout(() => {
        loop()
    }, targetFrameDuration - renderTime)
}

function updateGameObjects () {
    for (let i = 0; i < gameObjects.length; i++) {
        gameObjects[i].update()
    }
}

function updateGravity () {
    for (let i = 0; i < gameObjects.length; i++) {
        if (gameObjects[i].gravity) {
            gameObjects[i].updateGravity()
        }
    }
}


loop()