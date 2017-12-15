import { ExcelType } from '../components/excel-type/interfaces';
export class StateContainer {
    constructor (
        public id: string,
        public data: ExcelType[],
        public headingTxt: string,
        public sumTxt: string,
        public singleTxt: string
    ) {}

    value: number;
}
