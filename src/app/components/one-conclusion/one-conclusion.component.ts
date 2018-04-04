import { Component, OnInit } from '@angular/core';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { StateService } from '../../state/stateContainer';

@Component({
  selector: 'app-one-conclusion',
  templateUrl: './one-conclusion.component.html',
  styles: []
})
export class OneConclusionComponent implements OnInit {

  constructor(
    public text: TxtSharedService,
    public state: StateService,
  ) {}


  ngOnInit() {
  }

  getTxtId() {
    return `${this.state.mainState.type}_txt`
  }



}
