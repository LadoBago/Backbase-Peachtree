export interface Additions {
    [key: string]: any;
}
export interface Customizable {
    additions?: Additions;
}
export type ExchangeRatesGet = Array<ExchangeRate>;
export interface ExchangeRate extends Customizable {
    rate?: number;
    source?: string;
    target?: string;
    time?: string;
}
export type CurrenciesGet = Array<Currency>;
export interface Currency extends Customizable {
    code?: string;
}
