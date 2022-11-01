export class Part {
    x : number
    y : number
    ctx : CanvasRenderingContext2D
    
    constructor(x : number, y : number, ctx : CanvasRenderingContext2D) {
        this.x = x
        this.y = y
        this.ctx = ctx
    }
}