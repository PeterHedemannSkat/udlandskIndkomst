import { CalenderServices } from '../sharedServices/dateServices';
import { Injectable } from '@angular/core';

@Injectable()
export class PeriodState {

  from: Date;
  to: Date;
  wholeYear: Boolean;
  uncertainEndPeriod = false;
  morethan183User: boolean;
  confirmedMoreThan6Month: Boolean;

  constructor(private calender: CalenderServices) {}

  moreThan6Month() {

    return (this.confirmedMoreThan6Month === true || this.wholeYear === true)
      ? true
      : this.direct6Month();

  }

  direct6Month() {
      return (this.to && this.from) ? this.to > new Date(this.from.getFullYear(), this.from.getMonth() + 6, this.from.getDay()) : false;
  }

  allSet() {
      const a = typeof this.from === 'string';
      return this.uncertainEndPeriod === false && (this.from && this.isDateType(this.from)) && (this.to && this.isDateType(this.to));
  }

  days() {
    return (this.to) ? this.calender.daysBetweenTwoDates(this.from, this.to) : -1;
  }

  private isDateType(date: any) {
    return Object.prototype.toString.call(date) === '[object Date]';
  }

}
