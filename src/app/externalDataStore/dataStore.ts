import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { namesMainTypes } from './texts/fristNames';
import { normalNames } from './texts/diverseNames';
import { subTitles } from './texts/subTitles';
import { monthNames } from './texts/monthnamesDK';
import { periodTerms } from './texts/periodTerms';
import { weekdays } from './texts/weekDaysDK';
import { laeringsPakke } from './texts/laeringsPakkeNames';
import { regnskab } from './texts/budgetBeregner';




export interface ManualDeadLines {

    Id: string;
    year: number;
    Periode: number;
    Frist: string;

}


export class ExternalData implements InMemoryWebApiModule {

        createDb() {

            return {

                regnskab

            };
        }
    }
