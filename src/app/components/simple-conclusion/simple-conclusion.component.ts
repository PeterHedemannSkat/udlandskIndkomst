import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { AktieSkatteTypeService } from '../../servicesUdenlandskIndkomst/aktierSkattetype';
import { UrlRessourceService } from '../../urlRessource/urlressource';
import { KapitalIndkomstSkatteTypeService } from '../../servicesUdenlandskIndkomst/kapitalIndkomstSkatteType';
import { PensionsSkatteTypeService } from '../../servicesUdenlandskIndkomst/pensionsSkattetype';
import { IntOrgService } from '../../servicesUdenlandskIndkomst/intOrg';
import { BestyrelsesHonorarService } from '../../servicesUdenlandskIndkomst/bestyrelseshonorar';

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
    public bestyr: BestyrelsesHonorarService
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
    return this.state.aktier.type === 'udbytte'
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
      }
    
    ];

    ['GE', 'IL', 'CN', 'HR', 'PT', 'RU', 'SG', 'TW', 'TH'].forEach(country => {
      pctMap.push({country: country, pct: 10})
    })

    const specialCountry = pctMap.find(el => el.country === this.state.mainState.land);

    return specialCountry ? specialCountry.pct : 15;

  }

}

