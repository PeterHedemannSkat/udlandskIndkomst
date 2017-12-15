import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExcelType } from './interfaces';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import * as _ from 'lodash';
import { TableSum } from './rowType';

@Component({
  selector: 'app-excel-type',
  templateUrl: './excel-type.component.html',
  styles: []
})
export class ExcelTypeComponent implements OnInit {

  total = 0;
  nameToAdd: string;

  @Input()
  inputRows: ExcelType[];

  @Input()
  heading: string;

  @Input()
  id: string;

  @Input()
  typeName: string;

  @Input()
  pluraltypeName: string;

  @Output()
  totalSum = new EventEmitter();

  @Output()
  valueChange = new EventEmitter();

  @Input()
  get value() {
    return this.sum();
  }

  set value(val) {
    this.total = val;
    this.valueChange.emit(val === undefined ? undefined : this.sum());
  }

  addIsHidden = true;

  constructor() { }

  ngOnInit() {
  }

  getUnique() {
    return `${_.uniqueId('name')}`;
  }


  addRow() {
    this.inputRows.push({
      id: this.getUnique(),
      value: null,
      txt: this.nameToAdd
    });

    this.addIsHidden = true;
    this.nameToAdd = '';

  }


  update() {
    /* skal bare kalde set value som emitter sum */
    this.value = 1;
  }

  sum() {
    return this.inputRows.reduce((acc, cur) => {
      return cur.value >= 0 ? (acc + cur.value) : acc;
    }, 0);
  }

}
