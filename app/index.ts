import {CheckBox, Slider, Container, Button} from './controls/';
import {Drawing} from './drawing';

const checkBoxList : CheckBox[] = [];
const sliderList : Slider[] = [];
const buttonList : Button[] = [];

const stringList : string[] = [
    "Eyes",
    "Noses",
    "Mouths"
]

function newCheckBox(string : string) {
    const input = new CheckBox(string);

    checkBoxList.push(input);
    return input;
}

function newSlider(string : string) {
    const input = new Slider(string);

    sliderList.push(input);
    return input;
}

function newButton(string : string) {
    const input = new Button(string);

    buttonList.push(input);
    return input;
}

const drawing = new Drawing();

let button
for (let i = stringList.length - 1; i >= 0; --i) {
    button = newButton(`Make ${stringList[i]}`)
    button.onClick(() => drawing.changeToType(stringList[i], stringList))
}

button = newButton("Clear")
button.onClick(() => {
    const len = drawing.bodyList.length - 1;
    for (let i = len; i >= 0; --i) {
        drawing.bodyList.pop()
    }
});

let checkBox = newCheckBox('Nose Snotty?');
checkBox.onChange(
    (v: boolean) => drawing.noseSnot(v)
);

let slider = newSlider("Eye Size!");
slider.onChange(
    (amount: number) => drawing.changeEyeSize(amount)
);

slider = newSlider("Eyeball Speed!");
slider.onChange(
    (amount: number) => drawing.modifyPupilSpeed(amount)
);

slider = newSlider("Frown");
slider.onChange(
    (amount: number) => drawing.adjustSmile(amount)
);

slider = newSlider("Mouth Size!");
slider.onChange(
    (amount: number) => drawing.changeMouthSize(amount)
);

slider = newSlider("Nose Size!");
slider.onChange(
    (amount: number) => drawing.noseSize(amount)
);

slider = newSlider("Blink Frequency?");
slider.onChange(
    (amount: number) => drawing.blinkFrequency(amount)
);

//End
const app = document.querySelector('#app');

const buttonContainer = new Container(buttonList, app);
const checkBoxContainer = new Container(checkBoxList, app);
const sliderContainer = new Container(sliderList, app);

app.appendChild(drawing.canvas);
drawing.run();