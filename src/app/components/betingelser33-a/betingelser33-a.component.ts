import { Component, OnInit } from '@angular/core';
import { CommonUdlandsService } from '../../servicesUdenlandskIndkomst/commonServices';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';

@Component({
  selector: 'app-betingelser33-a',
  templateUrl: './betingelser33-a.component.html',
  styles: []
})
export class Betingelser33AComponent implements OnInit {

  constructor(
    public commons: CommonUdlandsService,
    public state: StateService,
    public text: TxtSharedService
  ) { }

  ngOnInit() {
  }

}
