import { Injectable } from '@angular/core';
import { StateService } from '../state/stateContainer';

@Injectable()
export class BestyrelsesHonorarService {
  
  constructor(
    private state: StateService
  ) {}

  getTaxType() {

    const
      countryRules = [
        {
          ruleId: 2,
          countries: ['BY', 'KG']
        },
        {
          ruleId: 3,
          countries: ['BR']
        },
        {
          ruleId: 13,
          countries: ['TT', 'GL']
        }
      ]

    const countryId = this.state.mainState.land;

    const specialObj = countryRules.find(el => el.countries.indexOf(countryId) > -1);

    return specialObj ? specialObj.ruleId : 1;



  }


}