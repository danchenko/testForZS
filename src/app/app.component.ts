import { Component, ViewChild } from '@angular/core';
import { IonRangeSliderComponent } from "ng2-ion-range-slider";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    @ViewChild('advancedSliderElement') advancedSliderElement: IonRangeSliderComponent;
    from: number = 0;
    to: number = 100;
    startLimit: number = 0;
    endLimit: number = 0;
    intervalValid: boolean = true;
    advancedSlider = { name: "Advanced Slider", onUpdate: undefined, onFinish: undefined };

    constructor() { }

    update(slider, event) {
        console.log("Slider updated: " + slider.name);
        slider.onUpdate = event;

    }

    finish(slider, event) {
        console.log("Slider finished: " + slider.name);
        slider.onFinish = event;
        if (event.from != undefined) {
            this.from = event.from;
        }
        else {
            if (event.from_percent) {
                this.from = event.from;
            }
        }
        if (event.to != undefined) {
            this.to = event.to;
        }
        else {
            if (event.to_percent) {
                this.to = event.to;
            }
        }
        this.checkValue(this.from, this.to);
    }

    setAdvancedSliderTo() {
        var fromInitialValue = (<HTMLInputElement>document.getElementById('fromInitialValue')).value;
        var toInitialValue = (<HTMLInputElement>document.getElementById('toInitialValue')).value;
        this.startLimit = parseInt((<HTMLInputElement>document.getElementById('startLimit')).value);
        this.endLimit = parseInt((<HTMLInputElement>document.getElementById('endLimit')).value);
        if (fromInitialValue != "" && toInitialValue != "" && (<HTMLInputElement>document.getElementById('startLimit')).value != ""
            && (<HTMLInputElement>document.getElementById('endLimit')).value != "") {
            this.advancedSliderElement.update({ min: fromInitialValue, max: toInitialValue });
        }
        else {
            alert("Введите значения");
        }

    }

    setColor(color) {
        let SliderElement = <HTMLElement>document.getElementsByClassName('irs-bar')[0];
        SliderElement.style.background = color;
    }

    checkValue(from, to) {
        if ((from >= this.startLimit && from <= this.endLimit) || (to >= this.startLimit && to <= this.endLimit)) {
            this.setColor("red");
            this.intervalValid = false;
        }
        else {
            this.setColor("#428bca");
            this.intervalValid = true;
        }
    }
}
