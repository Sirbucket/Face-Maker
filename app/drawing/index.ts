import {Canvas} from './canvas';
import {Eyeball} from './eyeball';
import {Mouth} from './mouth';
import {Nose} from './nose';

const partList = [ //Sync to stringList in index of app.
    Eyeball,
    Nose,
    Mouth
]

export class Drawing extends Canvas {
    type : any = Eyeball
    
    bodyList : any[] = [];

    addPart (Part : any, width : number, height : number, ctx : CanvasRenderingContext2D) {
        const bodyList = this.bodyList;
        const object = new Part(width, height, ctx);
        bodyList[bodyList.length] = object;
    } //Automating both calling functionality and drawing because I don't want to have to type all that garbage out.

    constructor () {
        super();
        this.canvas.addEventListener("click", (event) => {
            this.addPart(this.type, event.offsetX, event.offsetY, this.ctx)
        });
    }

    changeToType (string : string, stringList : string[]) {
        for(let i = stringList.length - 1; i >= 0; --i) {
            if (string === stringList[i]) {
                this.type = partList[i]; 
                console.log("this code ran!")
                break
            }
        }
    }
    
    modifyPupilSpeed (amount : number) {
        const bodyList = this.bodyList; const len = bodyList.length - 1;
        for (let i = len; i >= 0; --i) {
            if (bodyList[i].pupilSpeed === null) return;
            bodyList[i].pupilSpeed = amount;
        }
    }
    
    noseSnot (v : boolean) {
        const bodyList = this.bodyList; const len = bodyList.length - 1;
        for (let i = len; i >= 0; --i) {
            if (bodyList[i].isSnotty === null) return;
            bodyList[i].isSnotty = v;
        }
    }
    
    changeEyeSize (amount : number) {
        const bodyList = this.bodyList; const len = bodyList.length - 1;
        for (let i = len; i >= 0; --i) {
            if (bodyList[i].eyeSize === null) return;
            bodyList[i].eyeSize = amount * 2;
        }
    }

    changeMouthSize (amount : number) {
        const bodyList = this.bodyList; const len = bodyList.length - 1;
        for (let i = len; i >= 0; --i) {
            if (bodyList[i].lipSize === null) return;
            bodyList[i].lipSize = amount * 2;
        }
    }
    
    adjustSmile (amount : number) {
        const bodyList = this.bodyList; const len = bodyList.length - 1;
        for (let i = len; i >= 0; --i) {
            if (bodyList[i].amountOpened === null) return;
            bodyList[i].amountOpened = amount;
        }
    }

    noseSize (amount : number) {
        const bodyList = this.bodyList; const len = bodyList.length - 1;
        for (let i = len; i >= 0; --i) {
            if (bodyList[i].noseSize === null) return;
            bodyList[i].noseSize = amount;
        }
    }

    blinkFrequency (amount : number) {
        const bodyList = this.bodyList; const len = bodyList.length - 1;
        for (let i = len; i >= 0; --i) {
            if (bodyList[i].blinkFrequency === null) return;
            bodyList[i].blinkFrequency = amount;
        }
    }
    run () {        
        const ctx = this.ctx; const canvas = this.canvas;
        const bodyList = this.bodyList; const len = bodyList.length - 1;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (let i = len; i >= 0; --i) {
            bodyList[i].draw();
        }
        
        window.requestAnimationFrame(() => this.run());
    }
}