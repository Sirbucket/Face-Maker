export class Container {
    element: HTMLElement
    hide: HTMLButtonElement
    switched: boolean
    content: HTMLDivElement
    clone: Node
    cloneContent: HTMLElement
    oldHTML: string;
    constructor(list, app) {
        let itemTemplate = document.querySelector("#controls");
        const length: number = list.length;
        this.clone = itemTemplate.cloneNode(true);
        this.cloneContent = this.clone.content.querySelector(".controls");
        for (let i: number = 0; i < length; ++i) {
            this.content = this.cloneContent.querySelector(".controlbox"); //Create clone
            this.oldHTML = this.cloneContent.innerHTML;
            this.hide = this.cloneContent.querySelector('.hide');
            this.content.appendChild(list[i].element);
        }
        app.appendChild(this.cloneContent)
    }
}