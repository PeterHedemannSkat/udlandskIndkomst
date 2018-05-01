import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { AktieSkatteTypeService } from '../../servicesUdenlandskIndkomst/aktierSkattetype';
import { UrlRessourceService } from '../../urlRessource/urlressource';
import { KapitalIndkomstSkatteTypeService } from '../../servicesUdenlandskIndkomst/kapitalIndkomstSkatteType';
import { PensionsSkatteTypeService } from '../../servicesUdenlandskIndkomst/pensionsSkattetype';
import { IntOrgService } from '../../servicesUdenlandskIndkomst/intOrg';
import { BestyrelsesHonorarService } from '../../servicesUdenlandskIndkomst/bestyrelseshonorar';
import { CommonUdlandsService } from '../../servicesUdenlandskIndkomst/commonServices';

@Component({
  selector: 'app-simple-conclusion',
  templateUrl: './simple-conclusion.component.html',
  styles: []
})
export class SimpleConclusionComponent implements OnInit {

  constructor(
    public text: TxtSharedService,
    public state: StateService,
    public aktier: AktieSkatteTypeService,
    private rente: KapitalIndkomstSkatteTypeService,
    public pension: PensionsSkatteTypeService,
    public intOrg: IntOrgService,
    public bestyr: BestyrelsesHonorarService,
    public common: CommonUdlandsService
  ) { }

  ngOnInit() {
  }

  getTaxType() {

    switch (this.state.mainState.type) {
      case 'capitalIncome':
        return this.rente.getTaxTypeRente().toString();
      case 'stocks':
        return this.aktier.getGeneralSkatteType().toString();
      case 'pension':
        return this.pension.getPensionsBeskatning();
      case 'intOrg':
        return this.intOrg.getResultType().toString();
      case 'bestyrelsesHon':
        return this.bestyr.getTaxType().toString();

    }
  }

  isUdbytte() {
    return this.state.aktier.type === 'udbytte' &&
      this.state.mainState.type === 'stocks' &&
      this.common.getCountryGroup() !== 8 &&
      !this.noShowForUdbytte();
  }

  noShowForUdbytte() {
    const 
      specialCountries = ['BM','KY', 'VG', 'GG', 'IM', 'JE'],
      country = this.state.mainState.land

    return specialCountries.indexOf(country) > -1;
  }

  uncertainCountries() {
    return ['CL','IN', 'MX'].indexOf(this.state.mainState.land) > -1
  }

  isRente() {
    return this.state.mainState.type === 'capitalIncome' &&
      this.common.getCountryGroup() !== 8 &&
      this.state.mainState.land !== 'GL' &&
      this.getRentePct() !== 0 &&
      this.getRentePct() < 100 &&
      !this.uncertainCountries(); 
  }

  isGronland() {
    return this.state.mainState.land === 'GL'
  }

  getUdbyttePct() {

    const pctMap = [

      {
        country: 'GR',
        pct: 18
      },
      {
        country: 'IN',
        pct: 25
      },
      {
        country: 'ID',
        pct: 20
      },
      {
        country: 'KE',
        pct: 30
      },
      {
        country: 'KE',
        pct: 30
      },
      {
        country: 'MA',
        pct: 25
      },
      {
        country: 'TT',
        pct: 20
      },
      {
        country: 'TR',
        pct: 20
      },
      {
        country: 'BR',
        pct: 25
      }
    
    ];

    ['GE', 'IL', 'CN', 'HR', 'PT', 'RU', 'SG', 'TW', 'TH'].forEach(country => {
      pctMap.push({country: country, pct: 10})
    })

    const specialCountry = pctMap.find(el => el.country === this.state.mainState.land);

    return specialCountry ? specialCountry.pct : 15;

  }

  /* 0 satser skal ikke vises ???  */

  getRentePct() {

    const country = this.state.mainState.land;

    const satser: Object = {
      10: ['AU', 'BD', 'BE', 'CA', 'EE', 'PH', 'ID', 'IT', 'JP', 'CN', 'LV', 'LT', 'MA', 'NZ', 'PT', 'RO', 'RS', 'SG', 'LK', 'UA', 'VN', 'ZM', 'TW', 'UG'],
      12: ['AR', 'TN'],
      15: ['BR', 'CL', 'IN', 'KR', 'MX', 'TH', 'PK', 'TT', 'TR'],
      8: ['GH', 'GR'],
      5: ['IL', 'HR', 'PL', 'SI', 'VE'],
      20: ['KE', 'EG'],
      100: ['MY'],
      special12: ['JM', 'TZ']
    }

    const sats = Object.keys(satser)
      .find(el => {
        return satser[el].indexOf(country) > -1 
      })

    return sats 
      ? sats === 'special12' ? 12.5 : sats
      : 0
    

  }

}

