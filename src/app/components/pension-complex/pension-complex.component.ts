import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { PrintService } from '../../TxtSharedService/printServices';
import { CommonUdlandsService } from '../../servicesUdenlandskIndkomst/commonServices';
import { mainLogic } from '../../dataSkatUdlandsModul/pension/mainLogic';
import { grupper } from '../../dataSkatUdlandsModul/pension/landegrupper';

@Component({
  selector: 'app-pension-complex',
  templateUrl: './pension-complex.component.html',
  styles: []
})
export class PensionComplexComponent implements OnInit {

  constructor(
    public state: StateService,
    public text: TxtSharedService,
    public print: PrintService,
    private commons: CommonUdlandsService
  ) { }

  ngOnInit() {
  }

  getSpg_(spgGroup: number) {

    const
      gruppe  = this.countryGroup(),
      country = this.state.mainState.land,
      type    = this.state.pension.type;

    return mainLogic.filter(el => {

      const match =
        (el.Type.split(',').indexOf(type) > -1 || el.Type === 'all') &&
        (country === el.LandId || (gruppe && el.LandGruppe === gruppe.gruppe)) &&
        el.SpgNr === spgGroup;

      return match;
    });

  }

  countryGroup() {

    const country = this.state.mainState.land;
    return grupper.find(el => el.lande.indexOf(country) > -1);

  }

  showGroupTwo() {

    const isEqualTo   = this.state.pension.values[0];

    return this.getSpg_(2).filter(el => {
      return el.ShowIfSpg1EqualTo === isEqualTo;
    });
  }

}