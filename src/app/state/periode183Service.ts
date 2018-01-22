import { Period } from "./helperClasses/periodClass";
import { mapPeriods } from '../dataSkatUdlandsModul/countryTaxPeriod.data';
import { TaxPeriod } from './helperClasses/taxPeriodClass';
import { Injectable } from "@angular/core";
import { StateService } from './stateContainer';
import { PeriodState } from "./periodClass";
import { DateWithYear } from "./helperClasses/DateInYear";


/**
 * kræver fra og til dato er sat
 */

@Injectable()
export class PeriodsOf183Days {

    countryID: string;
    stay: Period;
    periods: TaxPeriod[];
    over183dageNormalCase: boolean;


    constructor (
        public model: StateService,
        public periode: PeriodState
    ) {}

    getPeriodIdTypeForCountry() {

        const data = mapPeriods.find(el => el.id === this.model.mainState.land);

        if (data) {
            return data.value;
        } else {
            return 2;
        }
    }

    getAssymetricFiscalYear_baseYear() {
        try {
            if (this.getPeriodIdTypeForCountry() !== 3) {

                throw Error('expects assymtric fiscal year');

            } else {

                const countryID     = this.model.mainState.land,
                 dateString         = mapPeriods.find(el => el.id === countryID),
                 _from_date         = dateString.startDate.split('-'),
                 from               = this.periode.from,
                 year               = from.getFullYear(),
                 FiscalYBreak       = new Date(year, Number(_from_date[1]) - 1, Number(_from_date[0]));

                 return (from < FiscalYBreak) ? year - 1 : year;

            }

        } catch (e) {
            console.log('***');
        }
    }

    getPeriods() {

        const
            container   = [],
            periodStart = this.periodStartDay(),
            startYear = this.getStartYear();

        /* kan denne laves bedre med while opbygning. enddate er afhænhig af startdate */
        const periodOfYear = (year: number) => {

            const
                startDate   = new Date(year, periodStart.month, periodStart.day),
                endDate     = new Date(startDate.getFullYear() + 1, startDate.getMonth(), startDate.getDate() - 1);

            container.push(new Period(startDate, endDate));

            if (this.periode.to > endDate) {
                periodOfYear(++year);
            }

        };

        periodOfYear(startYear);

        const stayPeriod = new Period (this.periode.from, this.periode.to);

        const enrichedContainer = container.map(el => {

            return new TaxPeriod(stayPeriod, el, this.model.mainState.land);

        });

        return enrichedContainer;

    }

    periodStartDay(): DateWithYear  {

        const type        = this.getPeriodIdTypeForCountry();

        switch (type) {
            case 1:

                return new DateWithYear(1, 0);

            case 2:
                const day = this.periode.from.getDate(),
                    month = this.periode.from.getMonth();

                return new DateWithYear(day, month);

            case 3:
                const countryID     = this.model.mainState.land,
                 dateString         = mapPeriods.find(el => el.id === countryID),
                 _from_date         = dateString.startDate.split('-');

                return new DateWithYear(Number(_from_date[0]), Number(_from_date[1]) - 1);

        }
    }

    getStartYear() {

        const type = this.getPeriodIdTypeForCountry();

        if (type === 1 || type ===  2) {
            return this.periode.from.getFullYear();
        } else {
            return this.getAssymetricFiscalYear_baseYear();
        }

    }

}