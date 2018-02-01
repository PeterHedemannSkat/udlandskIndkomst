import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { AktieSkatteTypeService } from '../../servicesUdenlandskIndkomst/aktierSkattetype';
import { UrlRessourceService } from '../../urlRessource/urlressource';
import { KapitalIndkomstSkatteTypeService } from '../../servicesUdenlandskIndkomst/kapitalIndkomstSkatteType';

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
    private rente: KapitalIndkomstSkatteTypeService
  ) { }

  ngOnInit() {
  }

  getTaxType() {

    switch (this.state.mainState.type) {
      case 'capitalIncome':
        return this.rente.getTaxTypeRente();
      case 'stocks':
        return this.aktier.stocks();

    }
  }

}

