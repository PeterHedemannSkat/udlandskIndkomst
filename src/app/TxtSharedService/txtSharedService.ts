import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Texts } from '../textServices/testServices';
import { GetText } from '../textServices/getTxt';
import { neededTxt } from '../dataMapping/needTxt';
import { StateService } from '../state/stateContainer';
import { TxtKey } from '../textServices/textInterface';
import { urlMapper } from '../dataMapping/urlMapping';


@Injectable()
export class TxtSharedService implements OnInit {

    txt: GetText = new GetText();

    constructor (
       public _lang: Texts,
    ) {
        this.ngOnInit();
    }

    ngOnInit() {

        this._lang.setRessources(urlMapper);
        this._lang.getMultipleTxt(neededTxt).subscribe(el => {

        this.txt.add(el);


        });

    }


}
