import { Injectable } from '@angular/core';
import { countries } from '../dataSkatUdlandsModul/countries.data';
import { StateService } from '../state/stateContainer';

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
        return countryProp.group;

    }

    private getCountryPropertries () {
        return countries.find(countryObj => countryObj.id === this.state.mainState.land);
    }

}
