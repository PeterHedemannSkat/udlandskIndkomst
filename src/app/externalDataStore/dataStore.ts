import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { monthNames } from './texts/monthnamesDK';
import { periodTerms } from './texts/periodTerms';
import { weekdays } from './texts/weekDaysDK';
import { udlandstekster } from './texts/udlandsTekster';
import { overskrifter } from './texts/overskrifter';




export interface ManualDeadLines {

    Id: string;
    year: number;
    Periode: number;
    Frist: string;

}


export class ExternalData implements InMemoryWebApiModule {

        createDb() {

            return {
                udlandstekster,
                monthNames,
                overskrifter
            };
        }
    }
