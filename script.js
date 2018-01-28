// Lodash imported as _

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let timeDelta = 0
const targetFPS = 60
const targetFrameDuration = (1000 / targetFPS)

const mass = 1
const acceleration = 9.81

function getDistance(time) {
    return acceleration * Math.pow(time / 1000, 2) / 2
}

function getVelocity(time, initialVelocity = 0) {
    return initialVelocity + (acceleration * time)
}

function RainDrop(x = 0, y = 0) {
    this.x = x
    this.y = y
    this.fallTime = 0
    this.velocity = 0
    this.update = function update(){
        this.velocity = getVelocity((timeDelta / 1000), this.velocity)
        this.y += this.velocity
    }
    this.render = function () {
        ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI)
    }
}

const rainDrop = new RainDrop(350, 0)

const gameObjects = [rainDrop]

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()

    rainDrop.render()

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