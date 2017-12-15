import { Injectable } from '@angular/core';
import { indtagter, udgifter, dataSructure } from '../dataMapping/excelMapping';
import { StateContainer } from '../dataMapping/stateContainer';
import { TxtDap, TxtKey } from '../textServices/textInterface';
import { TxtSharedService } from '../TxtSharedService/txtSharedService';

@Injectable()
export class StateService {

    constructor () {}

    data: StateContainer[] = dataSructure;


}

