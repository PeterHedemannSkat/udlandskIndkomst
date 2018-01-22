import { Component, OnInit } from '@angular/core';
import { CommonUdlandsService } from '../../servicesUdenlandskIndkomst/commonServices';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { PeriodState } from '../../state/periodClass';

@Component({
  selector: 'app-periode',
  templateUrl: './periode.component.html',
  styles: []
})
export class PeriodeComponent implements OnInit {

  testDisabled = false;

  constructor(
    public commons: CommonUdlandsService,
    public state: StateService,
    public text: TxtSharedService,
    public period: PeriodState
  ) { }

  ngOnInit() {

  }

}
