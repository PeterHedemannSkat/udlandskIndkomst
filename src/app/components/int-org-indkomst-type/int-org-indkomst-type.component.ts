import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { PrintService } from '../../TxtSharedService/printServices';

@Component({
  selector: 'app-int-org-indkomst-type',
  templateUrl: './int-org-indkomst-type.component.html',
  styles: []
})
export class IntOrgIndkomstTypeComponent implements OnInit {

  constructor(

    public state: StateService,
    public text: TxtSharedService,
    public print: PrintService
  ) { }

  ngOnInit() {


  }

}
