export class Control {
    name : string = 'div';
    element : HTMLElement;
    
    constructor () {
        this.element = document.createElement(this.name);    
    }
    onChange (callback: any) {
        throw new Error(
            'Base Class Control has no change callback'
        );
    }
}
