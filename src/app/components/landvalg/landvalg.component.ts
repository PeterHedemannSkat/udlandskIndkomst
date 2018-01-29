import {
  Component,
  OnInit
} from '@angular/core';
import { countries } from '../../dataSkatUdlandsModul/countries.data';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';

@Component({
  selector: 'app-landvalg',
  templateUrl: './landvalg.component.html',
  styles: []
})
export class LandvalgComponent implements OnInit {

  landLabel = 'Fra hvilket land kommer indkomsten?';
  countries: any[] = [];
  test = "";

  constructor(
    public state: StateService,
    public text: TxtSharedService
  ) {}

  ngOnInit() {
    this.setCountries();
  }

  setCountries() {
    this.countries = countries.map(country => {
      return {
        id: country.id,
        value: country.land
      };
    });
  }



}
