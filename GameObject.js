module.exports = class GameObject {
    constructor({ x = 0, y = 0, velocity = 0, name = '', mass = 1, drag = 1, gravity = false } = {}) {
        this.name = name
        this.x = x
        this.y = y
        this.velocity = velocity
        this.mass = mass
        this.drag = drag
        this.gravity = gravity
    }
    render() { }
    update() { }
    updateGravity() {
        this.velocity = getVelocity((timeDelta / 1000), this.velocity)
        this.y += this.velocity
    }
}