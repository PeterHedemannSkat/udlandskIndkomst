import { Component, OnInit } from '@angular/core';
import { PeriodsOf183Days } from '../../state/periode183Service';
import { PrintService } from '../../TxtSharedService/printServices';
import { CommonUdlandsService } from '../../servicesUdenlandskIndkomst/commonServices';
import { StateService } from '../../state/stateContainer';
import { PeriodState } from '../../state/periodClass';

@Component({
  selector: 'app-opholdi-land-over183dage',
  templateUrl: './opholdi-land-over183dage.component.html',
  styles: []
})
export class OpholdiLandOver183dageComponent implements OnInit {

  constructor(
    public specialPeriods: PeriodsOf183Days,
    public printService: PrintService,
    public commonService: CommonUdlandsService,
    public state: StateService,
    public period: PeriodState
  ) { }

  ngOnInit() {

    if (this.render()) {
      this.specialPeriods.periods = this.specialPeriods.getPeriods();
    }

  }

  render() {

    const period = this.specialPeriods.periods;

    if (period) {

      const
        sameCountry = period[0].land === this.state.mainState.land,
        isSameFrom = period[0].stay.from.getTime() === this.period.from.getTime(),
        isSameTo = period[0].stay.to.getTime() === this.period.to.getTime(),
        dataUnchanged = sameCountry && isSameFrom && isSameTo;

      return !dataUnchanged;

    } else {

        return true;

    }
  }

  labelTxt() {
    return `Opholder du dig i mere end 183 dage i ${this.commonService.getCountryNameReg()} i denne periode?`;
  }


}
