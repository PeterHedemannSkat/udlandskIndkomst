import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Texts } from './textServices/testServices';
import { TxtDap, TxtKey } from './textServices/textInterface';
import { GetText } from './textServices/getTxt';
import { TxtSharedService } from './TxtSharedService/txtSharedService';
import { RadiobuttonUX } from './sharedServices/radiobutton.skts';
import { Keylist } from './chosen/keylist';
import { RoutingService } from './routing/routingLogic';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  constructor (
    public _txt: TxtSharedService,
    private route: Router,

  ) {}


  ngOnInit() {

  }

  getRouteNameId() {
    return this.route.url.substr(1);
  }



}
