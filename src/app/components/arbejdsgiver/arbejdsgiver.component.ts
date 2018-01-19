import { Component, OnInit } from '@angular/core';
import { CommonUdlandsService } from '../../servicesUdenlandskIndkomst/commonServices';
import { offentligPrivat } from './optionsOffentligPrivat';
import { employeeOrigin } from './arbejdsgiversHjemland';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';

@Component({
  selector: 'app-arbejdsgiver',
  templateUrl: './arbejdsgiver.component.html',
  styles: []
})
export class ArbejdsgiverComponent implements OnInit {

  privatOffentlig = offentligPrivat;
  hjemland        = employeeOrigin;

  constructor(
    public commons: CommonUdlandsService,
    public state: StateService,
    public text: TxtSharedService
  ) { }

  ngOnInit() {

    this.hjemland.find(el => el.value === 'workCountry').text = this.commons.getCountryNameReg();

  }

  isNotLocalCountry () {

    const hjemland = this.state.arbejdsgiverForhold.originOfFirm;
    return hjemland === 'DK' || hjemland === 'other';

  }


}
