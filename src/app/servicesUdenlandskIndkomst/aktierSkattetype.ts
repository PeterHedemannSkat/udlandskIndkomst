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

        if (country === 'GL') return 13; 

        if (country === 'MY') return 2;             

        return country === 'BR'? 3 : 1; 

      } else {

        /**
         * Indonesien ID og Letland LV fjernet Jannies mail d. 30 april
         */

        const creditCountries = ['JM', 'GL'];

        /**
         * Maikens mail af 18. april tilføjes disse lande:  
         */

        const nyeCreditLande = ['BM', 'VG', 'KY', 'GG', 'IM', 'JE', 'BM', 'HK', 'LB', 'TT', 'IR'];

        const allCountries = creditCountries.concat(nyeCreditLande)

        if (country === 'BR') {
          return 13;
        } else {
          return (allCountries.indexOf(country) > -1) || isNonDBO ? 1 : 2 
        }
      
      }

    }


}
