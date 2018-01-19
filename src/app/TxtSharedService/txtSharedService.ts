import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Texts } from '../textServices/testServices';
import { GetText } from '../textServices/getTxt';
import { neededTxt } from '../dataMapping/needTxt';
import { StateService } from '../state/stateContainer';
import { TxtKey } from '../textServices/textInterface';
import { urlMapper } from '../dataMapping/urlMapping';
import { TxtStringReplacerService } from '../textServices/txtSubReplacerService';


@Injectable()
export class TxtSharedService implements OnInit {

    txtrep: TxtKey[] = [];

    constructor (
       public _lang: Texts,
       private replacer: TxtStringReplacerService
    ) {
        this.ngOnInit();
    }

    ngOnInit() {

        this._lang.setRessources(urlMapper);
        this._lang.getMultipleTxt(neededTxt).subscribe(el => {

        this.add(el);


        });

    }

    add(content: TxtKey[]) {
        this.txtrep = this.txtrep.concat(content);
    }

    get(id: string, group?: string) {

        if (this.txtrep.length > 0) {

            if (group) {

                const txt_ = this.txtrep
                    .filter(el => el.groupId === group)
                    .find(el => el.id === id);

                return (txt_) ? this.replacer.check(txt_.txt) : '';

            } else {

                const txt_ = this.txtrep.find(el => el.id === id);
                return txt_ ? this.replacer.check(txt_.txt) : '';

            }
        }
    }

    getGroup(groupId: string) {
        return this.txtrep.filter(el => el.groupId === groupId);
    }


}
