import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Texts } from './textServices/testServices';
import { TxtDap, TxtKey } from './textServices/textInterface';
import { GetText } from './textServices/getTxt';
import { TxtSharedService } from './TxtSharedService/txtSharedService';
import { RadiobuttonUX } from './sharedServices/radiobutton.skts';
import { Keylist } from './chosen/keylist';
import { RoutingService } from './routing/routingLogic';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  constructor (
    public _txt: TxtSharedService,

  ) {}


  ngOnInit() {

  }



}
