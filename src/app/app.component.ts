import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Texts } from './textServices/testServices';
import { TxtDap, TxtKey } from './textServices/textInterface';
import { GetText } from './textServices/getTxt';
import { TxtSharedService } from './TxtSharedService/txtSharedService';
import { RadiobuttonUX } from './sharedServices/radiobutton.skts';
import { Keylist } from './chosen/keylist';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  test: string;

  constructor (
    public _txt: TxtSharedService

  ) {}

  testValues() {

    const val: Keylist[] = [
      {
        id: 'valA',
        value: 'dette er A'
      },
      {
        id: 'valB',
        value: 'dette er B'
      },
      {
        id: 'valC',
        value: 'dette er C'
      }
    ];

    return val;

  }


  ngOnInit() {

  }



}
