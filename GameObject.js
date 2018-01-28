module.exports = class GameObject {
    constructor({ x = 0, y = 0, velocity = 0, name = '' } = {}) {
        this.name = name
        this.x = x
        this.y = y
        this.velocity = velocity
    }
    render() { }
    update() { }
}