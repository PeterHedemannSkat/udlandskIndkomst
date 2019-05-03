import { Component, OnInit } from '@angular/core'
import { RoutingService } from '../../routing/routingLogic'
import { TxtSharedService } from '../../TxtSharedService/txtSharedService'

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styles: []
})
export class ButtonsComponent implements OnInit {
  constructor(
    public routingService: RoutingService,
    public text: TxtSharedService
  ) {}

  ngOnInit() {}

  router(direction: string) {
    return this.routingService.findRoute(direction)
  }

  disabled() {
    return !this.routingService.disabled()
  }

  public log(event: Event, data: string) {
    var loggingEvent = new CustomEvent('CustomTrackingEvent', {
      bubbles: true,
      detail: {
        name: data,
        url: document.location.href
      }
    })
    var target = <HTMLElement>event.target
    target.parentNode.dispatchEvent(loggingEvent)
  }
}
