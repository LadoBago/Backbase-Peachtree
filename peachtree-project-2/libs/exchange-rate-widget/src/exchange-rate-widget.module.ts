import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { ExchangeRateWidgetComponent } from './exchange-rate-widget.component';

@NgModule({
  declarations: [ExchangeRateWidgetComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { ExchangeRateWidgetComponent }
    })
  ]
})
export class ExchangeRateWidgetModule { }