import { Injectable } from '@angular/core';
import { TxtSharedService } from '../TxtSharedService/txtSharedService';
import { StateService } from '../state/stateContainer';
import { CommonUdlandsService } from '../servicesUdenlandskIndkomst/commonServices';

@Injectable()
export class TxtStringReplacerService {


    constructor (
        public commons: CommonUdlandsService
    ) {}

    mapper = [
        {
            id: 'country',
            txtKey: () => this.commons.getCountryNameReg()
        }
    ];

    check(txt: string) {

        this.mapper.forEach(element => {

            const reg = new RegExp(`&#${element.id}#&`, 'g');
            txt = txt.replace(reg, element.txtKey());

        });

        return txt;

    }

}
