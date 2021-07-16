import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectionToken, ModuleWithProviders, Optional } from "@angular/core";
import { createServiceDataHttpConfig, DATA_HTTP_CONFIG, DataHttpModule, ServiceDataHttpConfig } from "@backbase/foundation-ang/data-http";
import { EXCHANGE_RATE_DATA_CONFIG, ExchangeRateDataService } from "./exchange-rate-data.service";
export const CONFIG_VALUE = new InjectionToken("ExchangeRateData Data Service :: Custom Http Config");
export function createExchangeRateDataServiceDataHttpConfig(globalConfig: ServiceDataHttpConfig, serviceConfig?: Partial<ServiceDataHttpConfig>) {
    return createServiceDataHttpConfig(globalConfig, serviceConfig ? serviceConfig : { "servicePath": "" });
}
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        DataHttpModule
    ],
    providers: [ExchangeRateDataService, {
           provide: EXCHANGE_RATE_DATA_CONFIG,
           useFactory: createExchangeRateDataServiceDataHttpConfig,
           deps: [DATA_HTTP_CONFIG, [new Optional(), CONFIG_VALUE]],
        }]
})
export class ExchangeRateDataModule {
    static forRoot(config: Partial<ServiceDataHttpConfig>): ModuleWithProviders<ExchangeRateDataModule> {
        return {
            ngModule: ExchangeRateDataModule,
            providers: [
                {
                    provide: CONFIG_VALUE,
                    useValue: config,
                },
            ],
        };
    }
}
