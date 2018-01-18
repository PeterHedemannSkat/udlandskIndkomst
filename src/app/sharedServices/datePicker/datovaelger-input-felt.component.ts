import { Component, Input, AfterViewInit, EventEmitter, Output, OnInit, AfterContentChecked, OnDestroy } from '@angular/core';
import * as _ from 'lodash';

declare var $: any;
declare var datePicker: any;
declare var datePickerController: any;

@Component({
    selector: 'app-dato-vaelger',
    templateUrl: 'datovaelger-input-felt.component.html'
})

export class DatovaelgerInputFeltComponent implements AfterViewInit, OnInit, AfterContentChecked, OnDestroy   {

    aarstal: string;
    periode: string;
    id: string;

    datePickerIsInit = false;
    datePickerStart: string;
    datePickerSlut: string;

    dato: Date;
    _modelStr = '';
    get modelStr() {
        return this._modelStr;
    }

    set modelStr(value: string) {
        this._modelStr = value;
        this.model = datePickerController.getSelectedDate(this.id);

    }

    @Output() modelChange = new EventEmitter();
    @Input() disabled: boolean;
    @Input() label: string;
    @Input() paakraevet: boolean;

    @Input()
    get model() {
        return this.dato;
    }

    set model(input: Date) {
        this.dato = input;
        this.modelChange.emit(input);
    }

    constructor() {
    }

    ngOnInit() {
        this.id = _.uniqueId('dateId_');
    }

    ngAfterContentChecked () {

        const
            elements = $(`#${this.id}`),
            element = elements ? elements[0] : null;

        if (element && element.value && element.value !== this.model) {
            // Hack: Vent et tick for at undgå devMode fejlen:
            // Expression has changed after it was checked.

            setTimeout(() => this.modelStr = element.value);
        }

    }

    ngAfterViewInit() {

        const element = $('#' + this.id);

        const obj: any = {};
        obj.formElements = {};

        obj.formElements[this.id] = '%d/%m/%Y';
        obj.callbackFunctions = {
            dateset: [() => {
                this.modelStr = element.val();
            }]
        };

        datePickerController.createDatePicker(obj);

    }

    ngOnDestroy() {
        datePickerController.destroyDatePicker(this.id);
    }
}
