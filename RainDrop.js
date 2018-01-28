module.exports = class RainDrop extends GameObject {
    render() {
        ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI)
    }
}