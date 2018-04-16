import { Injectable } from '@angular/core';
import { StateService } from '../state/stateContainer';
import { CommonUdlandsService } from './commonServices';

@Injectable()
export class AktieSkatteTypeService {

    constructor (
        public state: StateService,
        private common: CommonUdlandsService
    ) {

    }

    getGeneralSkatteType() {

      /**
       * aktiegevinst - antarktisk 
       * Ikke-DBO = credit 
       * 17/4 ændret
       */

      

      const
        type = this.state.aktier.type,
        country = this.state.mainState.land,
        isNonDBO = this.common.getCountryGroup() === 8

      if (type === 'udbytte') {
        return country === 'BR'? 3 : 1; 
      } else {
        const creditCountries = ['BR', 'ID', 'JM', 'GL', 'LV'];
        return (creditCountries.indexOf(country) > -1) || isNonDBO   ? 1 : 2 
      }

    }


}
