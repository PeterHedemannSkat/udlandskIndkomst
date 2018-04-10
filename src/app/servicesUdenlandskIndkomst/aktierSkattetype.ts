import { Injectable } from '@angular/core';
import { StateService } from '../state/stateContainer';

@Injectable()
export class AktieSkatteTypeService {

    constructor (
        public state: StateService
    ) {

    }

    getGeneralSkatteType() {

      const
        type = this.state.aktier.type,
        country = this.state.mainState.land

      if (type === 'udbytte') {
        return country === 'BR' ? 3 : 1; 
      } else {
        const creditCountries = ['BR', 'ID', 'JM', 'GL', 'LV'];
        return (creditCountries.indexOf(country) > -1) ? 1 : 2 
      }

    }


}
