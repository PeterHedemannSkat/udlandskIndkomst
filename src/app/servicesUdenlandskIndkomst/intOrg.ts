import { Injectable } from '@angular/core';
import { IntOrg } from '../dataSkatUdlandsModul/IntOrg';
import { StateService } from '../state/stateContainer';
import { UrlRessources } from '../dataMapping/interfacesMapping';
import { UrlRessourceService } from '../urlRessource/urlressource';

@Injectable()
export class IntOrgService {

  get privatPension(): {Type, Id, Organisation}[] {
    return this.ressource.getData('app/InternationalOrg');
  }

  constructor(
    private state: StateService,
    private ressource: UrlRessourceService
  ) {}

  getResultType() {

    const a = IntOrg.find(el => {

      const privat = this.privatPension;

      if (privat && el.indkomsttype === this.state.intOrg.incometype) {
        const resul_ = privat.find(el_ => el_.Id === Number(this.state.intOrg.orgId));
        return !!resul_;
      }

      return false;

    });

    return a ? a.beskatningstype : -1;

  }

}
