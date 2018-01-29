import { Component, OnInit } from '@angular/core';
import { CommonUdlandsService } from '../../servicesUdenlandskIndkomst/commonServices';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { PrintService } from '../../TxtSharedService/printServices';

@Component({
  selector: 'app-diverse',
  templateUrl: './diverse.component.html',
  styles: []
})
export class DiverseComponent implements OnInit {

  constructor(
    public commons: CommonUdlandsService,
    public state: StateService,
    public text: TxtSharedService,
    public print: PrintService
  ) { }

  ngOnInit() {
  }

  setSpecial() {
    if (this.state.diverse.notSpecial === true) {
      this.state.diverse.specialCircumstances = '';
    }
  }

  toggleCheckBox() {
    this.state.diverse.notSpecial = false;
  }


}
