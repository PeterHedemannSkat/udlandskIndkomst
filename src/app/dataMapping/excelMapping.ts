import { ExcelType } from '../components/excel-type/interfaces';
import { StateContainer } from './stateContainer';

export const indtagter: ExcelType[] = [
    {
        id: 'vareSalg',
        value: null,
        txt: 'salg af varer'
    },
    {
        id: 'ydelserSalg',
        value: null,
        txt: 'salg af ydelser'
    }

];

export const udgifter: ExcelType[] = [
    {
        id: 'vareforbrug',
        value: null,
        txt: 'vareforbrug'
    },
    {
        id: 'transport',
        value: null,
        txt: 'transport'
    },
    {
        id: 'lokaleeje',
        value: null,
        txt: 'lokaleeje'
    }
];

export const dataSructure = [
    new StateContainer('indtaegter', indtagter, 'indtægter', 'total indtægter', 'indtægt'),
    new StateContainer('udgifter', udgifter, 'udgifter', 'total udgifter', 'udgift'),
];
