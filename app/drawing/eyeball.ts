import {Part} from './part'

export class Eyeball extends Part {
    eyeSize : number = 100;
    movement : number = 1;
    pupilSpeed : number = 50;
    blinkFrequency : number = 50;
    count : number = 0;
    seconds : number = 1 * 60;
    constructor (x : number, y : number, ctx : CanvasRenderingContext2D) {
        super(x, y, ctx);
    }

    drawPupil () {
        const ctx : CanvasRenderingContext2D = this.ctx;
        const y : number = this.y;
        const size : number = this.eyeSize;
        const sinewave = Math.sin(this.movement)
        const eyeballSize : number = size / 6;
        const pupilSize : number = size / 12;
        const radius : number = Math.PI * 2;
        const speed : number = this.pupilSpeed/1000;
        const x : number = (
            this.x
            + sinewave
            * eyeballSize
        );
        
        const formula = (sinewave * 999999)
        
        if (x >= this.x + (eyeballSize * 0.5)) ctx.fillStyle = `#${~~(formula).toString()}`;
        else ctx.fillStyle = `#${~~(-formula).toString()}`;
        
        ctx.beginPath();
        ctx.arc(x, y, eyeballSize, 0, radius);
        ctx.fill();
        ctx.beginPath();
        if (x >= this.x + (eyeballSize * 0.5)) ctx.fillStyle = `#${~~(-formula).toString()}`;
        else ctx.fillStyle = `#${~~(formula).toString()}`;
        ctx.arc(x, y, pupilSize, 0, radius);
        ctx.fill();
        this.movement += speed;
    }

    drawEye () {
        const ctx : CanvasRenderingContext2D = this.ctx;
        const x : number = this.x; const y : number = this.y;
        const size : number = this.eyeSize;
        const halfSize : number = size/2;
        
        ctx.beginPath();
        ctx.moveTo(x - halfSize, y);
        // bottom of eye
        ctx.quadraticCurveTo(
            x, // control point in center of eye
            y + halfSize, // under eye
            x + halfSize, // Target x
            y, // Target Y
        );
          
        ctx.stroke();
        let check = 300 - this.blinkFrequency
        let randomBlink = Math.ceil(Math.random() * check)

        if (check == randomBlink && this.count <= 0 || this.count > 0) {
            ctx.fillStyle = '#777';
            ctx.fill();
        } else {
            ctx.fillStyle = 'white'
            ctx.fill();
        }
        ctx.beginPath();
        
        ctx.moveTo(x - (halfSize),y);
        // top of eye
        ctx.quadraticCurveTo(
            x, // control point in ctr
            y - halfSize, // control point over eye
            x + halfSize,
            y,
        );
          
        ctx.stroke();
        if (check == randomBlink && this.count <= 0) {
            ctx.fillStyle = '#000';
            ctx.fill();
            ++this.count;
            return;
        } 

        if (this.count > 0) {
            ctx.fillStyle = '#000';
            ctx.fill();
            ++this.count;
            
            if (this.count >= this.seconds) this.count = 0;
            
            return;
        }
        ctx.fillStyle = 'white';
        ctx.fill();
        
        this.drawPupil();
    }

    draw() {
        this.drawEye()
    }
}