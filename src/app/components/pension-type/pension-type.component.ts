import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { PrintService } from '../../TxtSharedService/printServices';
import { PensionsSkatteTypeService } from '../../servicesUdenlandskIndkomst/pensionsSkattetype';

@Component({
  selector: 'app-pension-type',
  templateUrl: './pension-type.component.html',
  styles: []
})
export class PensionTypeComponent implements OnInit {

  constructor(
    public state: StateService,
    public text: TxtSharedService,
    public print: PrintService,
    private pension: PensionsSkatteTypeService
  ) { }

  ngOnInit() {
    this.state.pension.values = [];
  }

  test() {
    return this.pension.pensionOptions();
  }

}
