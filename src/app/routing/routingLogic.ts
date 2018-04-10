import { Injectable } from '@angular/core';
import { PeriodsOf183Days } from '../state/periode183Service';
import { StateService } from '../state/stateContainer';
import { PeriodState } from '../state/periodClass';
import { stepMapper } from './step-mapper';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonUdlandsService } from '../servicesUdenlandskIndkomst/commonServices';
import { grupper } from '../dataSkatUdlandsModul/pension/landegrupper';
import { PensionsSkatteTypeService } from '../servicesUdenlandskIndkomst/pensionsSkattetype';

@Injectable()
export class RoutingService {

    constructor (
        public taxPeriod: PeriodsOf183Days,
        public state: StateService,
        public period: PeriodState,
        private route: Router,
        private commons: CommonUdlandsService,
        private pension: PensionsSkatteTypeService

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

        if (this.state.diverse.notSpecial !== true) {
            this.deleteElement(copy, ['opholdOver183dage', 'betingelse33A']);
        }

      }

      if (type === 'pension') {

        const isAnExceptionPensionCountry = grupper.find(el => {
            return el.lande.indexOf(this.state.mainState.land) > -1;
        });

        const newExceo = this.pension.isRegular();

        if (newExceo) {
            this.deleteElement(copy, ['PensionComplex']);
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

    disabled() {

        const validation = [

            {
              id: 'type',
              fn: () => {
                return !!this.isSet(this.state.mainState.type) 
                
              }
            },
            {
              id: 'land',
              fn: () => {
                return !!this.isSet(this.state.mainState.land) 
              }
            },
            {
              id: 'periode',
              fn: () => {
                return !!this.period.from && !!this.period.to
              }
            },
            {
              id: 'arbejdsgiver',
              fn: () => {
                const basic = this.isSet(this.state.arbejdsgiverForhold.publicPrivate) &&
                this.isSet(this.state.arbejdsgiverForhold.originOfFirm) 

                if (this.isNotLocalCountry() && this.commons.getCountryGroup() !== 8) {
                    return basic && this.state.arbejdsgiverForhold.fixedOfficeInCountry !== null &&
                    this.state.arbejdsgiverForhold.fixedOfficeInCountry !== undefined;
                } else {
                    return basic;
                }       
              }
            },
            {
                id: 'diverse',
                fn: () => {
                  const socialsecured = (this.commons.getCountryGroup() === 6) 
                    ? this.booleanIsSet(this.state.diverse.socialSecured) 
                    : true;

                  const udlej = (this.commons.getCountryGroup() !== 8) 
                    ? this.booleanIsSet(this.state.diverse.arbejdsudlejet) 
                    : true;

                
                    return socialsecured && udlej;
            
                }
            },
            {
                id: 'betingelse33A',
                fn: () => {
                    return this.booleanIsSet(this.state.betingelser33A.vilAnvende33A)
                }
            },
            {
                id: 'opholdOver183dage',
                fn: () => {
                    return this.taxPeriod.getPeriodIdTypeForCountry() === 2 
                        ? this.booleanIsSet(this.taxPeriod.over183dageNormalCase)
                        : this.taxPeriod.periods.every(el => this.booleanIsSet(el.userAbove_183))

                }
            },
            {
                id: 'pensionType',
                fn: () => {
                    return this.isSet(this.state.pension.type)
                }
            },
            {
                id: 'PensionComplex',
                fn: () => {

                    const dataArray = this.state.pension.values
                    console.log(dataArray)
                    return dataArray.length && dataArray.every(el => el === false || el === true);
                }
            },

            
          ]

        const routeId = this.currentRouteId();

        const val = validation.find(el => el.id === routeId)

        return val ? val.fn() : true;


    }

    isSet(id: string) {
        return id && id.length > 0;
    }

    booleanIsSet(val: boolean) {
        return val === false || val === true
    }

    isNotLocalCountry () {

        const hjemland = this.state.arbejdsgiverForhold.originOfFirm;
        return hjemland === 'DK' || hjemland === 'other';
    
      }

}
