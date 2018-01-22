
import { Period } from './periodClass';
import { CalenderServices } from "../../sharedServices/dateServices";

export class TaxPeriod {

  stayInPeriod: Period;
  userAbove_183: boolean;
  country: string;

  constructor(public stay: Period, public taxPeriod: Period, public land: string) {
    this.stayInPeriod = this.getStayInTaxPeriod();
    this.userAbove_183 = undefined;

  }

  public getStayInTaxPeriod() {

    const
      startAfterTaxYearInit = this.stay.from > this.taxPeriod.from,
      endsBeforeTaxYearEnds = this.stay.to < this.taxPeriod.to,
      baseStart = (startAfterTaxYearInit) ? this.stay.from : this.taxPeriod.from,
      baseEnd = (endsBeforeTaxYearEnds) ? this.stay.to : this.taxPeriod.to;

    return new Period(baseStart, baseEnd);
  }

  public getNumberOfDays() {

    return this.stayInPeriod.daysBetween();

  }

  public getPercentOfMax() {

    const
      daysInTaxPeriod = new Period(this.taxPeriod.from, this.taxPeriod.to).daysBetween(),
      stayDays = this.stayInPeriod.daysBetween(),
      percentage = stayDays / daysInTaxPeriod * 100;

    return percentage;

  }
}

