import { Injectable } from '@angular/core';
import { StateService } from '../state/stateContainer';
import { pensionsSaerligeBeskatningsTyper } from '../dataSkatUdlandsModul/pension/beskatningsTyper';
import { grupper } from '../dataSkatUdlandsModul/pension/landegrupper';
import * as _ from 'lodash';
import { UrlRessourceService } from '../urlRessource/urlressource';

@Injectable()
export class PensionsSkatteTypeService {

  get privatPension() {
    return this.ressource.getData('app/privatPension');
  }

  get offPension() {
    return this.ressource.getData('app/offentligPension');
  }

  get socialPension() {
    return this.ressource.getData('app/socialPension');
  }

  constructor (
    public state: StateService,
    private ressource: UrlRessourceService
  ) {}

  getPensionsBeskatning() {

    if (this.isRegular()) {

      const type = <any[]>this.getPensionData();

      if (type && type.length) {

        const country_ = type.find(el => {
          return el.land === this.state.mainState.land;
        });

        const a = {
          indkomst: country_.Indkomst,
          skat: country_.Skat
        };

        return this.taxTranslation({skatningstype: a}).toString();

      }


    } else {
      const obj_ = this.getPensionType();
      return this.taxTranslation(obj_).toString();
    }



  }

  isRegular() {

    const isRegular = !this.countryGroup();

    if (isRegular) {

      return true;

    } else {

      const type = <any[]>this.getPensionData();

      if (type && type.length) {

        const country_ = type.find(el => {
          return el.land === this.state.mainState.land;
        });

        return country_ ? country_.Indkomst !== '-' : false;

      }

      return false;

    }

  }


  getPensionData() {

    const type = this.state.pension.type;

    switch (type) {
      case 'off':
        return this.offPension;
      case 'privat':
        return this.privatPension;
      case 'social':
        return this.socialPension;
    }

  }

  getPensionType() {

    const
      countryGroup = this.countryGroup(),
      pensionType = this.state.pension.type,
      land = this.state.mainState.land,
      valuesInModel = this.state.pension.values;

    const a = pensionsSaerligeBeskatningsTyper.find(el => {

      const match =
        (el.pensionsType.split(',').indexOf(pensionType) > -1 || el.pensionsType === '*') &&
        ((countryGroup && el.LandGruppe === countryGroup.gruppe) || el.LandId === land);

      let values;


      if (el.firstBoolean.state === true) {

        values = el.firstBoolean.value === valuesInModel[0];

      }

      if (el.firstBoolean.state === false || (el.firstBoolean.value !== valuesInModel[0])) {

        values = el.values.some(el_ => {

          if (el_.length === valuesInModel.length) {

            let allEqual = true;

            for (let i = 0; i < el_.length; i++) {
              if (el_[i] !== valuesInModel[i]) {
                allEqual = false;
              }
            }

            return allEqual;

          }

        });

      }

      return match && values;

    });


    return a;

  }

  taxTranslation(raw: any) {

    const translate = [
      {
        skat: 786,
        indkomst: 290,
        type: 1
      },
      {
        indkomst: 320,
        skat: '-',
        type: 3
      },
      {
        indkomst: 228,
        skat: '-',
        type: 2
      },
      {
        indkomst: 295,
        skat: '-',
        type: 3
      }
    ];

    if (!raw) {
      return -1;
    }

    const type = translate.find(el => el.indkomst === raw.skatningstype.indkomst && el.skat === raw.skatningstype.skat);

    return type ? type.type : -1;

  }

  countryGroup() {

    const country = this.state.mainState.land;

    return grupper.find(el => el.lande.indexOf(country) > -1);

  }

  pensionOptions() {

    const pensionGroup_ = grupper.find(el => el.lande.indexOf(this.state.mainState.land) > -1);

    const group = pensionGroup_ ? pensionGroup_.gruppe : 'none';

    const a = pensionsSaerligeBeskatningsTyper
      .filter(el => {

        const
          isCountry = el.LandId === this.state.mainState.land,
          isSameGroup = el.LandGruppe === group;

        return isCountry || isSameGroup;

      })
      .map(el => el.pensionsType);

    const uniuq = _.intersection(a);

    return uniuq;

  }

}
