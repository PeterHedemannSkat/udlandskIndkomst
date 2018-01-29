import { Injectable } from '@angular/core';
import { TxtSharedService } from './txtSharedService';
import { DAPDataType } from '../interfaces/commonInterfaces';

@Injectable()
export class PrintService {

    constructor (
        private text: TxtSharedService
    ) {}

    printPeriod(from: Date, to: Date) {

        return `${this.printdate(from)} - ${this.printdate(to)}`;

    }

    printdate(date: Date) {

        const monthGroup = this.text.get(date.getMonth().toString(), 'monthNames');

        if (monthGroup) {
            return `${date.getDate()}. ${monthGroup.slice(0, 3)} ${date.getFullYear()}`;
        } else {
            return '';
        }

    }

    transformToOptions(group_: string) {

        const group = this.text.getGroup(group_);

        if (group) {
          return group.map(el => {
            return {
              text: el.txt,
              value: el.id
            };
          });
        } else {
          return [];
        }

    }
}
