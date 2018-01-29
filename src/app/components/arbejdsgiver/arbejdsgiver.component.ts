import { Component, OnInit } from '@angular/core';
import { CommonUdlandsService } from '../../servicesUdenlandskIndkomst/commonServices';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { PeriodState } from '../../state/periodClass';
import { PrintService } from '../../TxtSharedService/printServices';


@Component({
  selector: 'app-arbejdsgiver',
  templateUrl: './arbejdsgiver.component.html',
  styles: []
})
export class ArbejdsgiverComponent implements OnInit {


  constructor(
    public commons: CommonUdlandsService,
    public state: StateService,
    public text: TxtSharedService,
    public period: PeriodState,
    public print: PrintService
  ) { }

  ngOnInit() {}

  isNotLocalCountry () {

    const hjemland = this.state.arbejdsgiverForhold.originOfFirm;
    return hjemland === 'DK' || hjemland === 'other';

  }

  getoptionsOrigin() {

    const list = this.print.transformToOptions('employeeOrigin');

    if (list.length > 0) {
      list.find(el => el.value === 'workCountry').text = this.commons.getCountryNameReg();
      return list;
    } else {
      return [];
    }

  }

}
