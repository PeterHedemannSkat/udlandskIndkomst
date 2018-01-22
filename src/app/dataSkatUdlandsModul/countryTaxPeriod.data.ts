import { CountryPeriodMap } from '../interfaces/commonInterfaces';

const calenderYear = [
    'AR',
    'AZ',
    'BE',
    'BR',
    'BG',
    'CA',
    'EG',
    'EE',
    'GR',
    'IE',
    'JE',
    'JP',
    'JE',
    'YU',
    'KE',
    'LU',
    'MY',
    'MA',
    'PL',
    'RO',
    'SG',
    'SK',
    'TZ',
    'TN'
];

const startPeriod = [
    '...',
];

const wierdPeriods = [
    {
        id: 'AU',
        startDate: '1-7'
    },
    {
        id: 'BD',
        startDate: '1-7'
    },
    {
        id: 'IN',
        startDate: '1-4'
    },
    {
        id: 'NZ',
        startDate: '1-4'
    },
    {
        id: 'PK',
        startDate: '1-7'
    },
    {
        id: 'GB',
        startDate: '6-4'
    },
    {
        id: 'ZA',
        startDate: '1-3'
    },
    {
        id: 'TT',
        startDate: '1-10'
    },
    {
        id: 'ZM',
        startDate: '1-4'
    }
];


export const mapPeriods: CountryPeriodMap[] = [].concat(
    calenderYear.map(el => {
        return {
            id: el,
            value: 1
        };
    }),
    startPeriod.map(el => {
        return {
            id: el,
            value: 2
        };
    }),
    wierdPeriods.map(el => {
        return {
            id: el.id,
            value: 3,
            startDate: el.startDate
        };
    })
);




