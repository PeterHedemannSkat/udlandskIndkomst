import { CalenderServices } from '../../sharedServices/dateServices';

export class Period extends CalenderServices {

    constructor(public from: Date, public to: Date) {
      super();
    }
    daysBetween() {
      return this.daysBetweenTwoDates(this.from, this.to);
    }

}
