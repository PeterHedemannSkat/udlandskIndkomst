import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/stateContainer';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { PrintService } from '../../TxtSharedService/printServices';

@Component({
  selector: 'app-aktieindkomst',
  templateUrl: './aktieindkomst.component.html',
  styles: []
})
export class AktieindkomstComponent implements OnInit {

  constructor(
    public state: StateService,
    public text: TxtSharedService,
    public print: PrintService
  ) { }

  ngOnInit() {
  }

}
