import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Texts } from '../textServices/testServices';
import { GetText } from '../textServices/getTxt';
import { neededTxt } from '../dataMapping/needTxt';
import { StateService } from '../state/stateContainer';
import { TxtKey } from '../textServices/textInterface';
import { urlMapper } from '../dataMapping/urlMapping';
import { TxtStringReplacerService } from '../textServices/txtSubReplacerService';
import { CommonUdlandsService } from '../servicesUdenlandskIndkomst/commonServices';


@Injectable()
export class TxtSharedService implements OnInit {

    txtrep: TxtKey[] = [];

    constructor (
       public _lang: Texts,
       public commons: CommonUdlandsService
    ) {
        this.ngOnInit();
    }

    /**
     * mapper bruges til at identificere variabler i textstrings &* text *& , som erstattes med indholdet
     * i propertien txtKey. Denne array skal derfor tilpasses fra projekt til projekt. Derfor mulighed for
     * dynamisk indsættelse af tekst koplet til logikken i applikationen. For at den skal have adgang til tekst
     * skal den placeres i denne service.
     */

    mapper = [
        {
            id: 'country',
            txtKey: () => this.commons.getCountryNameReg()
        }
    ];


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

                return (txt_) ? this.check(txt_.txt) : '';

            } else {

                const txt_ = this.txtrep.find(el => el.id === id);
                return txt_ ? this.check(txt_.txt) : '';

            }
        }
    }

    getGroup(groupId: string) {
        return this.txtrep.filter(el => el.groupId === groupId);
    }

    check(txt: string) {

        this.mapper.forEach(element => {

            const reg = new RegExp(`&#${element.id}#&`, 'g');
            txt = txt.replace(reg, element.txtKey());

        });

        return txt;

    }


}
