import {Part} from './part'

export class Nose extends Part {
    noseSize : number = 50;
    isSnotty : boolean = false;
    
    constructor (x : number, y : number, ctx : CanvasRenderingContext2D) {
        super(x, y, ctx);
    }

    drawNose () {
        const ctx : CanvasRenderingContext2D = this.ctx;
        const x : number = this.x; const y : number = this.y;
        const size : number = this.noseSize;
        const snotty : boolean = this.isSnotty;

        const halfSize = size * 0.5; const quarterSize = size * 0.25;
        const ySize = y + size; const ySizePlus = ySize + quarterSize; const xSize = x + halfSize; const halfXSize = x - halfSize;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(xSize, ySize);
        ctx.lineTo(halfXSize, ySize);
          
        ctx.stroke();    

        if (!snotty) return;
        const quarterXSize = x + quarterSize;
        const arcStart = 0; const arcEnd = 360; const radius = Math.PI * 2;
        
        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.moveTo(quarterXSize, ySize);
        ctx.arc(quarterXSize, ySizePlus, radius, arcStart, arcEnd);
        
        ctx.moveTo(halfXSize, ySize);
        ctx.arc(halfXSize, ySizePlus, radius, arcStart, arcEnd);
        ctx.stroke();
        
        ctx.strokeStyle = "black";
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.fillStyle = "black";
    }
    
    draw() {
        this.drawNose()
    }
}