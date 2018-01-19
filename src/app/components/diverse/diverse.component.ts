import { Component, OnInit } from '@angular/core';
import { CommonUdlandsService } from '../../servicesUdenlandskIndkomst/commonServices';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { specialCircum } from './saerligeOptions';

@Component({
  selector: 'app-diverse',
  templateUrl: './diverse.component.html',
  styles: []
})
export class DiverseComponent implements OnInit {

  specialCircum = specialCircum;


  constructor(
    public commons: CommonUdlandsService,
    public state: StateService,
    public text: TxtSharedService
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
