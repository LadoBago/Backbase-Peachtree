import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardItemUiComponent } from './lib/credit-card-item-ui/credit-card-item-ui.component';
import { AmountModule } from '@backbase/ui-ang';

@NgModule({
  declarations: [CreditCardItemUiComponent],
  imports: [
    CommonModule,
    AmountModule
  ],
  exports: [CreditCardItemUiComponent]
})
export class UiComponentsModule { }