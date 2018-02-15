import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { UrlRessourceService } from '../../urlRessource/urlressource';

@Component({
  selector: 'app-int-org',
  templateUrl: './int-org.component.html',
  styles: []
})
export class IntOrgComponent implements OnInit {

  intOrg: {id, value}[] = [];

  get privatPension(): {Type, Id, Organisation}[] {
    return this.ressource.getData('app/InternationalOrg');
  }

  constructor(
    public state: StateService,
    public text: TxtSharedService,
    private ressource: UrlRessourceService
  ) {}

  ngOnInit() {
  }

  getIntorganizations() {

    return this.privatPension
    ?
      this.privatPension.map(org => {

        return {
          id: org.Id,
          value: org.Organisation
        };
      })
    : [];


  }
}
