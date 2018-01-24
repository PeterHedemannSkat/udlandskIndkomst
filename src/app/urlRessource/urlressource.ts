import { Injectable } from '@angular/core';
import { urlMapper } from '../dataMapping/urlMapping';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import { StoredData } from '../interfaces/commonInterfaces';

@Injectable()
export class UrlRessourceService {

    private relativeMainUrl = 'websrv/jsong.ashx?Id=';
    private skatdkOfIcons = 'style/images/marketing/godt-fra-start/';
    private pathLocal = 'assets/';
    private linksPath = 'skat.aspx?oid=';
    private absoluteSkatdkUrl = '//skat.dk';
    private clear = '&clear=1';

    store: StoredData[] = [];

    constructor (private http: Http) {}

    getDapOidOfId(id: string) {

        const oId = urlMapper.find(el => el.local === id).skatdk;
        return `${this.relativeMainUrl}${oId}${this.clear}`;

    }

    getData(id: string) {

        const isInStore = this.store.find(el => el.id === id);
        return isInStore ? isInStore.data : this.getDataEntry(id);

    }

    private getDataEntry(id: string) {

        const isInStore = this.store.find(el => el.id === id);

        if (!isInStore) {
            const observable = this.getData_(id);
            this.store.push({id: id, observable: observable, data: null});
            observable.subscribe(el => {


                const cached = this.store.find(el_ => el_.id === id);
                cached.data = el;

            });

            return null;
        }

        return null;
    }

    private getData_(id: string) {

        const
            url_ = urlMapper.find(el => el.local === id),
            pointer = environment.production ? 'skatdk' : 'local',
            url = url_[pointer];

        return this.http.get(url).share().map(el => el.json());
    }




}
