import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-periode',
  templateUrl: './periode.component.html',
  styles: []
})
export class PeriodeComponent implements OnInit {

  fromDate: Date;
  toDate: Date;

  testDisabled = false;

  constructor() { }

  ngOnInit() {
    const a = '';
  }

}
