import { Injectable } from '@angular/core';
import { PeriodsOf183Days } from '../state/periode183Service';
import { StateService } from '../state/stateContainer';
import { PeriodState } from '../state/periodClass';
import { stepMapper } from './step-mapper';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonUdlandsService } from '../servicesUdenlandskIndkomst/commonServices';

@Injectable()
export class RoutingService {

    constructor (
        public taxPeriod: PeriodsOf183Days,
        public state: StateService,
        public period: PeriodState,
        private route: Router,
        private commons: CommonUdlandsService

    ) {}

    allSteps() {

      const
        type = this.state.mainState.type,
        brutto = stepMapper.find(el => el.type === type).steps,
        copy = brutto.slice(0);


      if (type === 'loon') {

        const nonBDO = this.commons.getCountryGroup() === 8;

        if (nonBDO) {
            this.deleteElement(copy, ['opholdOver183dage']);

        }

        if (!this.period.moreThan6Month()) {
            this.deleteElement(copy, ['opholdOver183dage', 'betingelse33A']);
        }

      }

      return copy;

    }

    deleteElement(array: string[], toDelete: string[]) {

        const int_delele = (array_: string[], id_: string) => {
            const i = array_.findIndex(el => el === id_);

            if (i > -1) {
                array_.splice(i, 1);
            }
        };

        toDelete.forEach(el => int_delele(array, el));

    }

    currentRouteId() {
       return this.route.url.substr(1);
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
