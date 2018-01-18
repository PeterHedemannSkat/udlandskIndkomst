import { Injectable } from '@angular/core';
import { PeriodsOf183Days } from '../state/periode183Service';
import { StateService } from '../state/stateContainer';
import { PeriodState } from '../state/periodClass';
import { stepMapper } from './step-mapper';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class RoutingService {

    index = 0;

    constructor (
        public taxPeriod: PeriodsOf183Days,
        public state: StateService,
        public period: PeriodState,
        private route: Router,

    ) {}

    allSteps() {
      return stepMapper.find(el => el.type === this.state.mainState.type).steps;
    }



    findRoute(direction: string) {

        const
            allsteps = this.allSteps(),
            name = this.route.url.substr(1),
            currentIndex = allsteps.findIndex(el => el === name);

        if (allsteps.length - 1 === currentIndex && direction === 'forward')  {
            return null;
        } else if (currentIndex === 0 && direction === 'back') {
            return null;
        } else {
            const d = (direction === 'forward') ? 1 : -1;
            return this.allSteps()[currentIndex + d];
        }

    }

}
