import { Component, OnInit } from '@angular/core';
import { CommonUdlandsService } from '../../servicesUdenlandskIndkomst/commonServices';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { typeOptions } from './indkomstTyper';

@Component({
  selector: 'app-indkomsttype',
  templateUrl: './indkomsttype.component.html',
  styles: []
})
export class IndkomsttypeComponent implements OnInit {

  typeOptions = typeOptions;

  constructor(
    public commons: CommonUdlandsService,
    public state: StateService,
    public text: TxtSharedService
  ) { }

  ngOnInit() {
  }

}
