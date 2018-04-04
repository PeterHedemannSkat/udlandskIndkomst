import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import * as _ from 'lodash';
import { Keylist } from './keylist';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';




declare var $: any;

@Component({
  selector: 'app-chosen',
  templateUrl: './chosen.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChosenComponent implements AfterViewInit, OnChanges {

  isDynamicalupdated: boolean;

  loaded = 0;

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

  constructor() {}

  ngOnChanges(changes: SimpleChanges ) {

    const options = changes['options'];

    if (options && options.currentValue) {

      if (!options.previousValue && options.currentValue) {

        setTimeout(() => {

          $('#' + this.idDom).trigger("chosen:updated");
        }, 0);

      } else {
        for (let i = 0; i < options.currentValue.length; i++) {

          if (options.previousValue !== undefined && ((!options.previousValue[i]) || (options.currentValue[i].id !== options.previousValue[i].id))) {

            setTimeout(() => {
              $('#' + this.idDom).trigger("chosen:updated");
            }, 0);

            break;
          }
        }
      }
    }
  }

    //


  ngAfterViewInit() {


    const jqueryEle =  $('#' + this.idDom);

    jqueryEle.val(this.model);

    jqueryEle.chosen({no_results_text: 'Ingen lande fundet'});

    jqueryEle.chosen().change(() => {
       this.model = jqueryEle.val();
    });

  }
}
