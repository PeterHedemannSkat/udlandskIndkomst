import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Texts } from '../textServices/testServices';
import { urlMapper } from '../dataMapping/urlMapping';
import { GetText } from '../textServices/getTxt';
import { neededTxt } from '../dataMapping/needTxt';
import { StateService } from '../state/stateContainer';
import { TxtKey } from '../textServices/textInterface';


@Injectable()
export class TxtSharedService implements OnInit {

    txt: GetText = new GetText();

    constructor (
       public _lang: Texts,
       public _state: StateService
    ) {
        this.ngOnInit();
    }

    ngOnInit() {

        this._lang.setRessources(urlMapper);
        this._lang.getMultipleTxt(neededTxt).subscribe(el => {

        this.txt.add(el);
        this.updateTxt(el);

        });

    }

    updateTxt(txt: TxtKey[]) {

        this._state.data.forEach(el => {
            el.data.forEach(el_ => {
                el_.txt = this.txt.get(el_.id);
            });
        });

    }

}
