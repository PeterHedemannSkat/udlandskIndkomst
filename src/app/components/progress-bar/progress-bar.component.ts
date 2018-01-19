import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../routing/routingLogic';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styles: []
})
export class ProgressBarComponent implements OnInit {

  constructor(
    public routerLogic: RoutingService
  ) { }

  ngOnInit() {
  }

}
