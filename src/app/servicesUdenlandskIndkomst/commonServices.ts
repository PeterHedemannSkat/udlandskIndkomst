import { Injectable } from '@angular/core';
import { countries } from '../dataSkatUdlandsModul/countries.data';
import { StateService } from '../state/stateContainer';
import { TxtSharedService } from '../TxtSharedService/txtSharedService';
import { error } from 'selenium-webdriver';

@Injectable()
export class CommonUdlandsService {

    constructor (

        private state: StateService
    ) {}

    getCountryNameReg() {

        const countryProp = this.getCountryPropertries();
        return countryProp ? countryProp.land : 'ukendt';

    }

    getCountryGroup() {

        const countryProp = this.getCountryPropertries();
        return countryProp ? countryProp.group : -1;

    }

    getCountryID(countryName: string) {

        const countryProp = countries.find(el => el.land === countryName);

        if (countryProp) {
            return countryProp.id;
        } else {
            throw new Error('Fandt ikke land');
        }

    }



    private getCountryPropertries () {
        return countries.find(countryObj => countryObj.id === this.state.mainState.land);
    }

}
