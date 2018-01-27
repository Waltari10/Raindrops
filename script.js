let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let x = 0
let y = canvas.height

const mass = 1
const accelerationRate = 9.81



async function draw() {
    const startTime = Date.now()
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI)
    ctx.closePath();

    y += 1

    ctx.stroke()

    const deltaTime =  Date.now() - startTime 
    await (1000 / 60) - deltaTime
    draw()
}
