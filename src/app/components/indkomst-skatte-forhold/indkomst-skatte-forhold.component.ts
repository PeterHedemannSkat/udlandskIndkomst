import { Component, OnInit } from '@angular/core';
import { UrlRessourceService } from '../../urlRessource/urlressource';
import { SkatteForholdIndkomstService } from '../../servicesUdenlandskIndkomst/skatteTypeIndkomst';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';

@Component({
  selector: 'app-indkomst-skatte-forhold',
  templateUrl: './indkomst-skatte-forhold.component.html',
  styles: []
})
export class IndkomstSkatteForholdComponent implements OnInit {

  private d: any;

  get data () {
    return this.data_.getData('app/skattetypeIndkomst');
  }

  constructor(
    private data_: UrlRessourceService,
    public text: TxtSharedService,
    public skatteforhold: SkatteForholdIndkomstService
  ) {}

  ngOnInit() {}

  printTextSkatteType() {

    const skattetype = this.skatteforhold.getBeskatningsType();
    return this.text.get(skattetype.toString(), 'skatteTyperConclusion');
  }





}
