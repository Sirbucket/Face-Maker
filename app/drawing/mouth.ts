import {Part} from './part'

export class Mouth extends Part {
    lipSize : number = 100;
    amountOpened : number = 1;
  
    constructor (x : number, y : number, ctx : CanvasRenderingContext2D) {
        super(x, y, ctx);
    }

    drawLips () {
        const ctx : CanvasRenderingContext2D = this.ctx; 
        const size : number = this.lipSize; 
        const x : number = this.x; const y : number = this.y; 
        const amt : number = this.amountOpened;
        
        ctx.beginPath();
        ctx.moveTo(x - size/2, y);
        // lips
        ctx.quadraticCurveTo(
            x, // Center
            y + (size/2) - amt, // lip curve.
            x + (size/2), // Target x
            y, // Target Y
        );
        ctx.stroke();   
        
        ctx.beginPath();
        ctx.moveTo(x - (size/2), y);
        // lips
        ctx.quadraticCurveTo(
            x, // Center
            (y + (size/3)) - amt, // lip curve.
            x + (size/2), // Target x
            y, // Target Y
        );
        ctx.stroke();  
    }

    draw() {
        this.drawLips()
    }
}