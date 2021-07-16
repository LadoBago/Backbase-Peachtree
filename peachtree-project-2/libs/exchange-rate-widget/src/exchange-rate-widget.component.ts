import { Component, OnInit } from '@angular/core';
import { RoutableWidget } from '@backbase/foundation-ang/core';

@Component({
  selector: 'pt-exchange-rate-widget',
  template: `
    <bb-router-outlet></bb-router-outlet>
  `,
  styles: [
  ]
})

export class ExchangeRateWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
