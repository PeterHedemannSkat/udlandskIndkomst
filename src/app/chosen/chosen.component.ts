import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { Keylist } from './keylist';


declare var $: any;

@Component({
  selector: 'app-chosen',
  templateUrl: './chosen.component.html'
})
export class ChosenComponent implements AfterViewInit {

  public value: string;

  @Output() modelChange = new EventEmitter();

  @Input()
    get model() {
        return this.value;
    }

    set model(input: string) {
        this.value = input;
        this.modelChange.emit(this.value);
    }

  @Input() options: Keylist[];
  @Input() label: string;

  public idDom = `id_${_.uniqueId('name')}`;

  constructor() { }

  ngAfterViewInit() {

    const jqueryEle =  $('#' + this.idDom);

    jqueryEle.val(this.model);

    jqueryEle.chosen({no_results_text: 'Ingen lande fundet'});

    jqueryEle.chosen().change(() => {
       this.model = jqueryEle.val();
    });

  }
}
