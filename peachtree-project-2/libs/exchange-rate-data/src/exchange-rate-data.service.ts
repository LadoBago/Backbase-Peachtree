import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Inject, InjectionToken } from "@angular/core";
import { ServiceDataHttpConfig, HTTP_PARAMS_FACTORY, HttpParamsFactory } from "@backbase/foundation-ang/data-http";
import { ExchangeRatesGet, ExchangeRate, CurrenciesGet, Currency } from "./exchange-rate-data.interfaces";
const version = 'v1';
export const EXCHANGE_RATE_DATA_CONFIG = new InjectionToken("ExchangeRateData Data Service :: HTTP Config");
@Injectable({
    providedIn: 'root'
})
export class ExchangeRateDataService {
    constructor(private readonly http: HttpClient, 
    @Inject(EXCHANGE_RATE_DATA_CONFIG)
    private readonly config: ServiceDataHttpConfig, 
    @Inject(HTTP_PARAMS_FACTORY)
    private readonly toHttpParams: HttpParamsFactory) { }
    getExchangeCurrencies(params?: undefined, headers: HttpHeaders = new HttpHeaders({})): Observable<HttpResponse<CurrenciesGet>> {
        const uri = `${this.config.apiRoot}${this.config.servicePath}/${version}/exchange/currencies`;
        return this.http.request<CurrenciesGet>('get', uri, {
            params: this.toHttpParams(params || {}),
            headers,
            observe: 'response',
            responseType: 'json',
            withCredentials: false,
        });
    }
    getExchangeRates(params: {
        source: string;
        target: string;
        from?: string;
        to?: string;
    }, headers: HttpHeaders = new HttpHeaders({})): Observable<HttpResponse<ExchangeRatesGet>> {
        const uri = `${this.config.apiRoot}${this.config.servicePath}/${version}/exchange/rates`;
        return this.http.request<ExchangeRatesGet>('get', uri, {
            params: this.toHttpParams(params || {}),
            headers,
            observe: 'response',
            responseType: 'json',
            withCredentials: false,
        });
    }
}
