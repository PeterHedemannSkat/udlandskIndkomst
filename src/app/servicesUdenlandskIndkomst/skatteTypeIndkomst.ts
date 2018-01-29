import { Injectable } from '@angular/core';
import { PeriodsOf183Days } from '../state/periode183Service';
import { PrintService } from '../TxtSharedService/printServices';
import { CommonUdlandsService } from './commonServices';
import { StateService } from '../state/stateContainer';
import { PeriodState } from '../state/periodClass';
import { UrlRessourceService } from '../urlRessource/urlressource';
import { loonIndkomstType } from '../dataMapping/loonIndkomstMap';


@Injectable()
export class SkatteForholdIndkomstService {

    constructor (
        public specialPeriods: PeriodsOf183Days,
        public printService: PrintService,
        public commonService: CommonUdlandsService,
        public state: StateService,
        public period: PeriodState,
        public dataService: UrlRessourceService
    ) {}

    get data () {
        /**
         * returnerer null indtil data er hentet, hvorefter Angular opdaterer og kalder data ...
         */
        return this.dataService.getData('app/skattetypeIndkomst');
    }

    getBeskatningsType() {

        if (this.data) {

            const
                pos = this.translateToBeskatningstype(this.getType_(this.buildVariableSet(true))),
                neg = this.translateToBeskatningstype(this.getType_(this.buildVariableSet(false)));

            return {truthly183Rule: pos, falsy183Rule: neg};

        } else {

            throw new Error('data er ikke hentet!');

        }
    }

    private translateToBeskatningstype(data: any) {

        return loonIndkomstType
            .find(el => {
                return el.indkomst.indexOf(Number(data.result.indkomst)) > -1  && el.skat === data.result.skat;
            })
            .value;

    }

    private getType_(set: any) {

        return this.data
            .find(ruleSet => {
                return set.every(el => {
                    return ruleSet.rowParameters[el.key] === el.value;
                });
            });

    }


    private buildVariableSet(over183dage: boolean) {

        const set = [
            {
                key: 'A',
                value: this.commonService.getCountryGroup()
            },
            {
                key: 'B',
                value: this.getPrivatePublic()
            },
            {
                key: 'C',
                value: this.getOriginOfFirm()
            },
            {
                key: 'D',
                value: this.period_()
            },
            {
                key: 'E',
                value: this.lempelse_33A()
            },
            {
                key: 'F',
                value: this.over183dage(over183dage)
            },
            {
                key: 'H', /* g er social secured og ikke bestyrelseshonorar */
                value: this.socialSecured()
            },
            {
                key: 'I',
                value: this.arbejdsUdlejet()
            }

        ];

        return set;
    }

    private arbejdsUdlejet() {

        const countryGroup = this.commonService.getCountryGroup();

        return (countryGroup !== 8) ? this.state.diverse.arbejdsudlejet === true ? 'JA' : 'NEJ' : '-';

    }

    private socialSecured() {

        const countryGroup = this.commonService.getCountryGroup();

        return (this.state.diverse.socialSecured === true && countryGroup === 6) ? 'JA'
         : (countryGroup === 6) ? 'NEJ' : '-';

    }

    private over183dage(over183dage: boolean) {

        const countryGroup = this.commonService.getCountryGroup();

        return countryGroup !== 8 ? over183dage ? 'JA'
         : this.period_() === 'JA' ? '-' : 'NEJ' : '-';

    }

    private period_() {
        return this.period.moreThan6Month() ? 'NEJ' : 'JA';
    }

    private lempelse_33A() {

        return this.state.betingelser33A.vilAnvende33A ? 'JA'
              : this.period_() === 'JA' ? '-' : 'NEJ';

    }

    private getPrivatePublic() {

        const
            origin      = this.state.arbejdsgiverForhold.originOfFirm,
            type        = this.state.arbejdsgiverForhold.publicPrivate,
            originMap   = origin === 'workCountry' || origin === 'other' ? 'abroad' : 'DK';

        const map = [
            {
                origin: 'DK',
                type: 'privat',
                value: 1
            },
            {
                origin: 'abroad',
                type: 'privat',
                value: 2
            },
            {
                origin: 'DK',
                type: 'offentlig',
                value: 3
            },
            {
                origin: 'abroad',
                type: 'offentlig',
                value: 4
            }
        ];

        const _obj = map.find(el => type === el.type && originMap === el.origin);

        return _obj ? _obj.value : -1;

    }

    private getOriginOfFirm() {

        const
            fixed      = this.state.arbejdsgiverForhold.fixedOfficeInCountry,
            origin     = this.state.arbejdsgiverForhold.originOfFirm,
            isNotWC    = this.state.arbejdsgiverForhold.originOfFirm !== 'workCountry';

        const map = [
            {
                notWorkingCountry: true,
                fixed: false,
                value: 1
            },
            {
                notWorkingCountry: true,
                fixed: true,
                value: 2
            },
            {
                notWorkingCountry: false,
                value: 3,
                fixed: false
            }
        ];

          const _var3 = map.find(el => el.notWorkingCountry === isNotWC && (isNotWC === false || el.fixed === fixed));

          /* overwrite for country type 8 (non-DBO) for example France */

          const countryGroup = this.commonService.getCountryGroup();

          if (countryGroup === 8) {
              return 1;
          }

          return _var3 ? _var3.value : -1;
      }

}
