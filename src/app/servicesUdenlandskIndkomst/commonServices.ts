import { Injectable } from '@angular/core';
import { countries } from '../dataSkatUdlandsModul/countries.data';
import { StateService } from '../state/stateContainer';
import { TxtSharedService } from '../TxtSharedService/txtSharedService';
import { error } from 'selenium-webdriver';
import { UrlRessourceService } from '../urlRessource/urlressource';

@Injectable()
export class CommonUdlandsService {

    get countriesExternal(): {land, id, group}[] {
        return this.ressource.getData('app/countries');
      }

    constructor (
        private state: StateService,
        private ressource: UrlRessourceService
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

        if (this.countriesExternal) {
            const countryProp = this.countriesExternal.find(el => el.land === countryName);

            if (countryProp) {
                return countryProp.id;
            } else {
                return '';
            }
        }
    }



    private getCountryPropertries () {

        if (this.countriesExternal) {
            return this.countriesExternal.find(countryObj => countryObj.id === this.state.mainState.land);
        }

    }

}
