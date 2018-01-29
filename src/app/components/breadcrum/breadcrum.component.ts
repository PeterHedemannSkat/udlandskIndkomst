import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { RoutingService } from '../../routing/routingLogic';
import { TxtSharedService } from '../../TxtSharedService/txtSharedService';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';





@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styles: []
})
export class BreadcrumComponent implements OnInit, OnChanges {

  @Input()
  test: any;

  constructor(
    public routingService: RoutingService,
    public text: TxtSharedService,
    private element: ElementRef
  ) { }

  ngOnInit() {

  }

  ngOnChanges() {

    setTimeout(el => {

      window.scroll(0, 0);

      const
        scrollElement = this.element.nativeElement.querySelector('div.horizontal-test'),
        widthOuter = scrollElement.offsetWidth,
        scroll = scrollElement.scrollLeft,
        inviewto = scroll + widthOuter,
        inviewCenter = scroll + widthOuter / 2,
        nodelist: NodeList = this.element.nativeElement.querySelectorAll('li'),
        len = nodelist.length;

      let width = 0;

      let dynScroll = scroll;

      for (let i = 0; i < len; i++) {

        const node_ = <HTMLElement>nodelist.item(i);

        if (node_.className === 'active') {

          if (width + node_.offsetWidth  > inviewto || width < scroll) {

            const lock = node_.clientWidth;

            const a = setInterval(() => {

              if ((width + lock) > inviewto && dynScroll < width) {
                dynScroll += 10;
                scrollElement.scroll(dynScroll, 0);
              } else if (width < scroll && dynScroll > width) {
                dynScroll -= 10;
                scrollElement.scroll(dynScroll, 0);
              } else {
                clearInterval(a);
              }

            }, 10);

          }

        break;

        } else {
          width += node_.offsetWidth;
        }

      }
    }, 1);



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

  renderBreadCrum() {

    return this.routingService.allSteps().map(el => {
      return {
        name: this.text.get(el),
        id: el
      };
    });

  }

  currentRoute(el: string) {

    const current = this.routingService.currentRouteId();
    return el === current;

  }

}

