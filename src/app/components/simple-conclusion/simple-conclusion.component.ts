import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { AktieSkatteTypeService } from '../../servicesUdenlandskIndkomst/aktierSkattetype';
import { UrlRessourceService } from '../../urlRessource/urlressource';
import { KapitalIndkomstSkatteTypeService } from '../../servicesUdenlandskIndkomst/kapitalIndkomstSkatteType';
import { PensionsSkatteTypeService } from '../../servicesUdenlandskIndkomst/pensionsSkattetype';
import { IntOrgService } from '../../servicesUdenlandskIndkomst/intOrg';

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
    public intOrg: IntOrgService
  ) { }

  ngOnInit() {
  }

  getTaxType() {

    switch (this.state.mainState.type) {
      case 'capitalIncome':
        return this.rente.getTaxTypeRente().toString();
      case 'stocks':
        return this.aktier.stocks();
      case 'pension':
        return this.pension.getPensionsBeskatning();
      case 'intOrg':
        return this.intOrg.getResultType().toString();

    }
  }

}

