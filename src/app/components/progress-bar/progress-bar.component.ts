import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../routing/routingLogic';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styles: []
})
export class ProgressBarComponent implements OnInit {

  constructor(
    public routerLogic: RoutingService,
    public text: TxtSharedService
  ) { }

  ngOnInit() {
  }

}
