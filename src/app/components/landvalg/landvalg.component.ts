import {
  Component,
  OnInit
} from '@angular/core';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { UrlRessourceService } from '../../urlRessource/urlressource';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-landvalg',
  templateUrl: './landvalg.component.html',
  styles: []
})
export class LandvalgComponent implements OnInit {


  newCountryState = this.ressource.getData_('app/countries')
    .map((el: {id, land}[])  => {
      return el.map(el_ => {
        return {
          id: el_.id,
          value: el_.land
        };
      });
    });


  constructor(
    public state: StateService,
    public text: TxtSharedService,
    private ressource: UrlRessourceService
  ) {}

  ngOnInit() {

  }



}
