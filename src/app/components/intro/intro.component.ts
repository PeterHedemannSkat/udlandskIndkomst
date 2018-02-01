import { Component, OnInit } from '@angular/core';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styles: []
})
export class IntroComponent implements OnInit {

  constructor(
    public text: TxtSharedService
  ) { }

  ngOnInit() {
  }

}
