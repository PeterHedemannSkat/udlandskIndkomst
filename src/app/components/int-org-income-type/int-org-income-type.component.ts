import { Component, OnInit } from '@angular/core';
import { CommonUdlandsService } from '../../servicesUdenlandskIndkomst/commonServices';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { PeriodState } from '../../state/periodClass';
import { PrintService } from '../../TxtSharedService/printServices';

@Component({
  selector: 'app-int-org-income-type',
  templateUrl: './int-org-income-type.component.html',
  styles: []
})
export class IntOrgIncomeTypeComponent implements OnInit {

  constructor(
    public commons: CommonUdlandsService,
    public state: StateService,
    public text: TxtSharedService,
    public period: PeriodState,
    public print: PrintService
  ) { }

  ngOnInit() {
  }

}
