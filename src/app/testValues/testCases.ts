import { Injectable } from '@angular/core';
import { StateService } from '../state/stateContainer';
import { PeriodState } from '../state/periodClass';
import { PeriodsOf183Days } from '../state/periode183Service';
import { environment } from '../../environments/environment';
import { CommonUdlandsService } from '../servicesUdenlandskIndkomst/commonServices';
import { Router } from '@angular/router';

@Injectable()
export class TestService {
    constructor (
        private state: StateService,
        private periode: PeriodState,
        private taxPerioder: PeriodsOf183Days,
        private commons: CommonUdlandsService,
        private router: Router
    ) {}

    setState() {

        if (!environment.production) {

            const
                from = new Date(2018, 2, 10),
                to = new Date(2019, 9, 9),
                type = 'loon',
                arbejdsgiverOrigin = 'DK', // workCountry, other
                privatOffentlig = 'privat',
                land = 'Frankrig', // Storbritannien Australien
                fastKontor = true,
                startrout = 'intro', // 'intro', 'type', 'land', 'periode', 'arbejdsgiver', 'diverse', 'betingelse33A', 'opholdOver183dage'
                udlejet = false,
                vilAnvende33A = true,
                kompleks183dage = [true, false, true],
                simple183dage = true;

            this.state.mainState.type = type;
            this.periode.from = from;
            this.periode.to = to;
            this.state.mainState.land = this.commons.getCountryID(land);
            this.state.arbejdsgiverForhold.originOfFirm = arbejdsgiverOrigin;
            this.state.arbejdsgiverForhold.publicPrivate = privatOffentlig;
            this.state.arbejdsgiverForhold.fixedOfficeInCountry = fastKontor;
            this.state.diverse.arbejdsudlejet = udlejet;
            this.state.betingelser33A.vilAnvende33A = vilAnvende33A;

            /**
             * skal kaldes hvis vi starter på en sent trin
             * this.taxPerioder.periods = this.taxPerioder.getPeriods()
             * OBS kræver at periods fra og til er sat + land
             */

             /*

            this.taxPerioder.periods = this.taxPerioder.getPeriods();
            this.taxPerioder.periods.forEach((el, i) => {
                el.userAbove_183 = kompleks183dage[i];
            });

            */

            this.router.navigateByUrl(startrout);




        } else {

            this.router.navigateByUrl('intro');

        }
    }
}
