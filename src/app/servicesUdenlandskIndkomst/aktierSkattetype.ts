import { Injectable } from '@angular/core';
import { StateService } from '../state/stateContainer';

@Injectable()
export class AktieSkatteTypeService {

    constructor (
        public state: StateService
    ) {

    }

    stocks() {

      const resultMap = [{
          type: 'udbytte',
          noterede: false,
          result: 1
        },
        {
          type: 'udbytte',
          noterede: true,
          result: 1
        },
        {
          type: 'gevinst',
          noterede: false,
          result: 2
        },
        {
          type: 'gevinst',
          noterede: true,
          result: 2
        }

      ];

      const _aktier = this.state.aktier;

      return resultMap.find(el => el.noterede === _aktier.noterede && el.type === _aktier.type).result.toString();

    }

}
