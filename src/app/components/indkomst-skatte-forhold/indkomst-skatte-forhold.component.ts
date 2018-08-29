import { Component, OnInit } from '@angular/core';
import { UrlRessourceService } from '../../urlRessource/urlressource';
import { SkatteForholdIndkomstService } from '../../servicesUdenlandskIndkomst/skatteTypeIndkomst';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { PeriodsOf183Days } from '../../state/periode183Service';
import { PrintService } from '../../TxtSharedService/printServices';
import { Period } from '../../state/helperClasses/periodClass';

@Component({
  selector: 'app-indkomst-skatte-forhold',
  templateUrl: './indkomst-skatte-forhold.component.html',
  styles: []
})
export class IndkomstSkatteForholdComponent implements OnInit {

  private d: any;

  get data () {
    return this.data_.getData('app/skattetypeIndkomst');
  }

  constructor(
    private data_: UrlRessourceService,
    public text: TxtSharedService,
    public taxPeriods: PeriodsOf183Days,
    public skatteforhold: SkatteForholdIndkomstService,
    public txtCalender: PrintService
  ) {}

  ngOnInit() {

    const is = !!this.taxPeriods.periods;

    if (!is) {
      this.taxPeriods.periods = this.taxPeriods.getPeriods()
    }

  }

  printTextSkatteType() {

    const
      skattetype = this.skatteforhold.getBeskatningsType(),
      key = this.taxPeriods.over183dageNormalCase ? 'truthly183Rule' : 'falsy183Rule';

    return this.text.get(skattetype[key].toString(), 'skatteTyperConclusion');

  }

  printDifferentiated(over183: boolean) {

    const
      skattetype = this.skatteforhold.getBeskatningsType(),
      key = over183 ? 'truthly183Rule' : 'falsy183Rule';

    return this.text.get(skattetype[key].toString(), 'skatteTyperConclusion');


  }

  beskatningsTypeIsIndifferent() {

    const skattetype = this.skatteforhold.getBeskatningsType();
    return skattetype.falsy183Rule === skattetype.truthly183Rule;

  }

  renderMultiBeskatningReglerAar() {

    const periods = this.getModyfiedPeriod();

    return this.getYears().map(el => {

      const a = periods.filter(el_ => el_.year === el);

      const same = a.length === 2 ? a[0].over183 === a[1].over183 : false;

      return {
        year: el,
        periods: a,
        same: same
      };


    });

  }

  private periodsIsEqual() {

  }

  private getModyfiedPeriod() {

    const periods = [];

    this.taxPeriods.periods.forEach(el => {

      const twosepYears = el.stayInPeriod.from.getFullYear() !== el.stayInPeriod.to.getFullYear();

      if (twosepYears) {

        const
          firstPeriod = new Period(el.stayInPeriod.from, new Date(el.stayInPeriod.from.getFullYear(), 11, 31)),
          secondPeriod = new Period(new Date(el.stayInPeriod.to.getFullYear(), 0, 1), el.stayInPeriod.to);

        periods.push(
          {year: el.stayInPeriod.from.getFullYear(), period: firstPeriod, over183: el.userAbove_183},
          {year: el.stayInPeriod.to.getFullYear(), period: secondPeriod, over183: el.userAbove_183}
        );

      } else {

        periods.push({year: el.stayInPeriod.from.getFullYear(), period: el.stayInPeriod, over183: el.userAbove_183});

      }

    });

    return periods;

  }

  private getYears(): number[] {

    const years = [];

    this.taxPeriods.periods.forEach(el => {
      const
        from = el.stayInPeriod.from.getFullYear(),
        to = el.stayInPeriod.to.getFullYear();

      if (years.indexOf(from) === -1) {
        years.push(from);
      }

      if (years.indexOf(to) === -1) {
        years.push(to);
      }

    });

    return years;

  }


}
