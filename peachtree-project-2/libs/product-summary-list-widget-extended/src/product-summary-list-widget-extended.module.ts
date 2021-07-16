import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { ProductSummaryListWidgetExtendedComponent } from './product-summary-list-widget-extended.component';

import { ProductSummaryListWidgetModule } from "@backbase/retail-ang/product-summary";
import { ProductItemBasicAccountModule } from '@backbase/ui-ang';

import { UiComponentsModule } from '@peachtree/ui-components';

@NgModule({
  declarations: [ProductSummaryListWidgetExtendedComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { ProductSummaryListWidgetExtendedComponent }
    }),
    ProductSummaryListWidgetModule,
    ProductItemBasicAccountModule,
    UiComponentsModule
  ]
})
export class ProductSummaryListWidgetExtendedModule { }