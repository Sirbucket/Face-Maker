
import { Control } from './control'

type BoolCallback = (value: boolean) => void;
type NumberCallback = (value: number) => void;

export class CheckBox extends Control {
    name: string = "label"
    checkbox: HTMLInputElement;
    callbacks: BoolCallback[] = [];
    constructor(html: string, initialValue = false) {
        super();
        this.element.innerHTML = `
            <label>
                <input 
                type="checkbox"
                class = "checkbox"
                    value="${initialValue}"
                >
                <span>${html}</span>
            </label>
        `;
        this.checkbox = this.element.querySelector('.checkbox');
        this.checkbox.addEventListener(
            'change',
            () => {
                let value = this.checkbox.checked;
                for (let c of this.callbacks) {
                    c(value);
                }
            }
        )
    }
    onChange(cb: BoolCallback) {
        this.callbacks.push(cb);
    }
}

export class Slider extends Control {
    name: string = "label"
    slider: HTMLInputElement
    callbacks: NumberCallback[] = []
    constructor(html: string, initialValue = 1) {
        super();
        this.element.innerHTML = `
            <label>
                <input 
                type="range"
                min = "1"
                max = "100"
                class = "slider"
                value="${initialValue}"
                >
                <span>${html}</span>
            </label>
        `;
        this.slider = this.element.querySelector(".slider");
        const slider = this.slider
        slider.addEventListener("input", () => {
            const value = Number(slider.value);
            for (let c of this.callbacks) {
                c(value);
            }
        })
    }
    onChange(cb: NumberCallback) {
        this.callbacks.push(cb);
    }
}

export class Button {
    name: string = 'div';
    element: HTMLElement;
    button: HTMLButtonElement;
    callbacks = [];
    constructor(html: string) {
        this.element = document.createElement(this.name);
        this.element.innerHTML = `
            <label>
                <button class = "button" type = "button">
                    ${html}
                </button>
            </label>
        `
        this.button = this.element.querySelector(".button")
        const button = this.button
        button.addEventListener("click", () => {
            for (let c of this.callbacks) {
                c()
            }
        });
    }

    onClick(cb: any) {
        this.callbacks.push(cb)
    }
}