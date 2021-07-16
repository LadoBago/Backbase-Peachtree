import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductSummaryListWidgetModule } from '@backbase/retail-ang/product-summary';
import { ProductSummaryWidgetAccountSelectorModule  } from '@backbase/retail-ang/product-summary';
import { TransactionsListWidgetModule } from '@backbase/retail-ang/transactions';

import { ContainersModule } from "@backbase/universal-ang/containers";
import { LayoutContainerModule } from "@backbase/universal-ang/layouts";
import { NavigationSpaWidgetModule } from "@backbase/universal-ang/navigation";
import { ProductSummaryListWidgetExtendedModule } from '@peachtree/product-summary-list-widget-extended';
import { UiComponentsModule } from '@peachtree/ui-components';
import { ExchangeRateDataModule } from '@peachtree/exchange-rate-data';
import { ExchangeRateWidgetModule } from '@peachtree/exchange-rate-widget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BackbaseCoreModule,
    RouterModule.forRoot([], { initialNavigation: false, useHash: true }),
    ProductSummaryListWidgetModule,
    ProductSummaryWidgetAccountSelectorModule,
    TransactionsListWidgetModule,
    ContainersModule,
    LayoutContainerModule,
    NavigationSpaWidgetModule,
    ProductSummaryListWidgetExtendedModule,
    UiComponentsModule,
    ExchangeRateDataModule,
    ExchangeRateWidgetModule
  ],
  providers: [...environment.mockProviders || []],
  bootstrap: [AppComponent]
})
export class AppModule { }
