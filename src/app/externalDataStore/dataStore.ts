import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { monthNames } from './texts/monthnamesDK';
import { periodTerms } from './texts/periodTerms';
import { weekdays } from './texts/weekDaysDK';
import { udlandstekster } from './texts/udlandsTekster';
import { overskrifter } from './texts/overskrifter';
import { skattetypeIndkomst } from './dataForeignIncome';
import { skatteTyperConclusion } from './texts/skatteTyperIndkomst';
import { labelTxt } from './texts/labelTxt';
import { incomeTypes } from './texts/selects/incomeTypes';
import { employeeOrigin } from './texts/selects/arbejdsgiverLand';
import { offentligPrivat } from './texts/selects/offentligprivat';
import { saerligeOmstaendigheder } from './texts/selects/saerligeomstaendinger';
import { aktietype } from './texts/selects/aktietype';
import { rente } from './rente';


export class ExternalData implements InMemoryWebApiModule {

        createDb() {

            return {
                udlandstekster,
                monthNames,
                overskrifter,
                skattetypeIndkomst,
                skatteTyperConclusion,
                labelTxt,
                incomeTypes,
                employeeOrigin,
                offentligPrivat,
                saerligeOmstaendigheder,
                aktietype,
                rente
            };
        }
    }
