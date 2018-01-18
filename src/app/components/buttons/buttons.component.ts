import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../routing/routingLogic';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor(
    public routingService: RoutingService
  ) { }

  ngOnInit() {

  }

  router(direction: string) {
    return this.routingService.findRoute(direction);
  }





}
