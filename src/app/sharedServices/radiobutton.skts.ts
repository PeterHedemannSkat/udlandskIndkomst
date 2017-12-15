import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import * as _ from 'lodash';

export interface RadiobuttonUX {
    value: string;
    text: string;
}

@Component ({

    selector: 'app-radio-button',
    template: `
        <div class="row form-group">

            <div class = "col-sm-12">

                <label class = "lable-for-radio">{{ label }}
                    <span
                        *ngIf = "showHelper()"
                        class = "skts-rounded-icon hover"
                        (click) = "toggleHelpTxt = !toggleHelpTxt">?
                    </span>
                </label>
                <div
                    *ngIf = "showHelper()"
                    [hidden] = "toggleHelpTxt"
                    class = "helper-txt"
                >
                    {{ helpTxt }}
                </div>
                <div class = "btn-group-vertical">
                    <label
                        *ngFor = " let radio of options"
                        class = "btn skts-btn-radio"
                        [class.active] = "setChecked(radio.value)"
                    >
                        <input
                            #radiohtml
                            type="radio"
                            (click) = "valueChange.emit(radio.value);clicked(radio.value)"
                            [attr.name] = "name"
                            [checked] = "setChecked(radio.value)"
                        >
                        {{ radio.text }}
                    </label>
                </div>
            </div>
        </div>

    `
})

export class RadioButtonListComponent implements OnInit {

    toggleHelpTxt = true;

    name: string;

    @Input()
    helpTxt: string;

    @Output()
    changed: EventEmitter<any> = new EventEmitter();

    @Input()
    options: RadiobuttonUX [];

    @Input()
    default: string;

    @Input()
    label: string;

    @Input() value: string;

    @Output()
    valueChange: EventEmitter<any> = new EventEmitter();

    @Output()
    change: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
        this.name = `_name_${_.random(1, 9999999999999)}`;
    }

    setChecked (value: any) {
        return (value === this.value) ? true : false;
    }

    clicked(isChecked: string, radio: Object) {
        this.value = isChecked;
        this.changed.emit(isChecked);
        this.change.emit(null);
    }

    showHelper () {
        return (this.helpTxt && this.helpTxt.length > 2);
    }



}
