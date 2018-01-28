// Lodash imported as _

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

function RainDrop(x = 0, y = 0) {
    this.name = 'RainDrop'
    this.x = x
    this.y = y
    this.fallTime = 0
    this.velocity = 0
    this.update = function update(){
        this.velocity = getVelocity((timeDelta / 1000), this.velocity)
        this.y += this.velocity
    }
    this.render = function () {
        ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI)
    }
}


function RainSpawner() {
    this.name = 'RainSpawner'
    this.rainDrops = []
    this.update = function update() {
        const rainDrop = new RainDrop(_.random(0, canvas.width), 0)
        this.rainDrops.push(rainDrop)
        gameObjects.push(rainDrop)
    }
    this.render = function () {}
}


const gameObjects = [new RainSpawner()]

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

     for (let i = 0; i < gameObjects.length; i++) {
         ctx.beginPath()
         gameObjects[i].render()
         ctx.closePath()
         ctx.stroke()
     }

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