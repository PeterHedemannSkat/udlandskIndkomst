import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Texts } from './textServices/testServices';
import { TxtDap, TxtKey } from './textServices/textInterface';
import { GetText } from './textServices/getTxt';
import { urlMapper } from './dataMapping/urlMapping';
import { textMapper } from './dataMapping/textMapper';
import { TxtSharedService } from './TxtSharedService/txtSharedService';
import { RadiobuttonUX } from './sharedServices/radiobutton.skts';
import { ExcelType } from './components/excel-type/interfaces';
import { indtagter, udgifter, dataSructure } from './dataMapping/excelMapping';
import { TableSum } from './components/excel-type/rowType';
import { StateContainer } from './dataMapping/stateContainer';
import { StateService } from './state/stateContainer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {



  constructor (
    public _state: StateService,
    public _txt: TxtSharedService

  ) {}

  data: StateContainer[] = this._state.data;

  ngOnInit() {

  }

  getSum() {

    const
      income = this.data.find(el => el.id === 'indtaegter').value,
      expenditure = this.data.find(el => el.id === 'udgifter').value;

    return (income >= 0 && expenditure >= 0) ? (income - expenditure) : null;
  }

}
