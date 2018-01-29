import { CalenderServices } from '../../sharedServices/dateServices';
import * as moment from 'moment';

export class Period {

    constructor(public from: Date, public to: Date) {

    }
    daysBetween() {

      const
        from = moment(this.from),
        to = moment(this.to);

      return from.diff('days');

      // return this.daysBetweenTwoDates(this.from, this.to);
    }

}
