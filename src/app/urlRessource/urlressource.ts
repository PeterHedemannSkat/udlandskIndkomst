import { Injectable } from '@angular/core';
import { urlMapper } from '../dataMapping/urlMapping';
import { environment } from '../../environments/environment';

@Injectable()
export class UrlRessourceService {

    relativeMainUrl = 'websrv/jsong.ashx?Id=';
    skatdkOfIcons = 'style/images/marketing/godt-fra-start/';
    pathLocal = 'assets/';
    linksPath = 'skat.aspx?oid=';
    absoluteSkatdkUrl = '//skat.dk';
    clear = '&clear=1';

    getDapOidOfId(id: string) {

        const oId = urlMapper.find(el => el.local === id).skatdk;
        return `${this.relativeMainUrl}${oId}${this.clear}`;

    }


}
