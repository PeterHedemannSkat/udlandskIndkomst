import { Component, OnInit } from '@angular/core';
import { PeriodsOf183Days } from '../../state/periode183Service';

@Component({
  selector: 'app-opholdi-land-over183dage',
  templateUrl: './opholdi-land-over183dage.component.html',
  styles: []
})
export class OpholdiLandOver183dageComponent implements OnInit {

  constructor(
    public specialPeriods: PeriodsOf183Days

  ) { }

  ngOnInit() {
  }

}
