export class Canvas {
    ctx : CanvasRenderingContext2D
    canvas = document.createElement('canvas');
    constructor (width=window.innerWidth * 0.9,height=window.innerHeight * 0.65) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext("2d");
    }
}