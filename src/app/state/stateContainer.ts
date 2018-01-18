import { Injectable } from '@angular/core';
import { TxtDap, TxtKey } from '../textServices/textInterface';
import { TxtSharedService } from '../TxtSharedService/txtSharedService';
import { Arbejdsgiver } from './simpleStateClasses/arbejdsgiverClass';
import { Diverse } from './simpleStateClasses/diverse';
import { MainStates } from './simpleStateClasses/mainStateClass';
import { Eligible33A } from './simpleStateClasses/betingelser33AClass';
import { Pension } from './simpleStateClasses/pensionClass';

@Injectable()
export class StateService {

    arbejdsgiverForhold = new Arbejdsgiver();   // Off-privat
    diverse             = new Diverse();        // Mærkelig spg. som offshore, lufthavn
    mainState           = new MainStates();     // Land
    betingelser33A      = new Eligible33A();    // 33A bliver ikke brugt
    Pension             = new Pension();


}

