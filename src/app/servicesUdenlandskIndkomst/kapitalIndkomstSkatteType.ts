import { Injectable } from '@angular/core';
import { StateService } from '../state/stateContainer';
import { UrlRessourceService } from '../urlRessource/urlressource';


@Injectable()
export class KapitalIndkomstSkatteTypeService {

  get rente() {
    return this.ressource.getData('app/rente');
  }

  constructor(
    public state: StateService,
    public ressource: UrlRessourceService
  ) {}

  getTaxTypeRente() {

    if (this.rente) {

      const map = [{
        ind: 298,
        skat: 588,
        type: 1
      },
      {
        ind: 298,
        skat: 0,
        type: 2
      },
      {
        ind: 298,
        skat: '-',
        type: 3
      }
    ];



    const
      country = this.state.mainState.land,
      result = this.rente.find(el => el.land === country),
      type = map.find(el => {
        return el.skat === Number(result.skat);
      }).type;


    return type;
    } else {
      return -1;
    }
  }
}

