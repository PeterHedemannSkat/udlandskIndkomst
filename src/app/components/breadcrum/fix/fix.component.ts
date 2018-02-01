import { Component, OnInit, Output, EventEmitter, ElementRef, Input } from '@angular/core';
import { RoutingService } from '../../../routing/routingLogic';
import { TxtSharedService } from '../../../TxtSharedService/txtSharedService';
import { Element } from '@angular/compiler';
import { SimpleChanges, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-fix',
  templateUrl: './fix.component.html',
  styles: []
})
export class FixComponent implements OnInit, OnChanges {

  @Output()
  width = new EventEmitter();

  @Input()
  renderBreadCrum: any;

  constructor(
    public routingService: RoutingService,
    public text: TxtSharedService,
    private element: ElementRef

  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    
    
  }

  /*
  renderBreadCrum() {

    const steps = this.routingService.allSteps().map(el => {
      return {
        name: this.text.get(el),
        id: el
      };
    });

    this.width.emit(this.horizontalPxLength());
    return steps;

  }
  */
  currentRoute(el: string) {

    const current = this.routingService.currentRouteId();
    return el === current;

  }

  horizontalPxLength() {

    const
      nodelist: NodeList = this.element.nativeElement.querySelectorAll('li'),
      len = nodelist.length;

    let width = 0;

    for (let i = 0; i < len; i++) {
      const node = <HTMLElement>nodelist.item(i);
      width += node.offsetWidth;
    }

    width += 10;

    return `${width}px`;

  }


}
