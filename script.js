const _ = require('lodash')
const GameObject = require('./GameObject')
const RainDrop = require('./RainDrop')
const RainSpawner = require('./RainSpawner')
const uniqid = require('uniqid')
const Moon = require('./Moon')
const DayCycleManager = require('./DayCycleManager')
const Sun = require('./Sun')

const targetFPS = 60
const targetFrameDuration = (1000 / targetFPS)

global.canvas = document.getElementById('canvas')
global.ctx = canvas.getContext('2d')
global.timeDelta = 1000 / targetFPS
global.gameObjects = {}
global.instantiate = function (classTemplate, args) {
  const id = uniqid()
  const instance = new classTemplate(Object.assign({
    id
  }, args))
  gameObjects[id] = instance
  return instance
}
global.destroy = function (instance) {
  delete gameObjects[instance.id]
}

global.dayCycleManager = instantiate(DayCycleManager) 
instantiate(RainSpawner)
instantiate(Moon)
instantiate(Sun)


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (const key in gameObjects) {
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(gameObjects[key].x, gameObjects[key].y)
    gameObjects[key].render()
    ctx.stroke()
  }
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

function updateGameObjects() {
  for (const key in gameObjects) {
    gameObjects[key].update()
  }
}

function updateGravity() {
  for (const key in gameObjects) {
    if (gameObjects[key].isGravity) {
      gameObjects[key].updateGravity()
    }
  }
}


loop()