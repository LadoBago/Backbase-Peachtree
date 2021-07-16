import { createMocks } from '@backbase/foundation-ang/data-http';
import { Provider } from '@angular/core';
import { EXCHANGE_RATE_DATA_CONFIG } from './exchange-rate-data.service';
const examples = [
    {
        "urlPattern": "/{version}/exchange/currencies",
        "method": "GET",
        "responses": [
            {
                "status": 500,
                "body": {
                    "message": "Description of error"
                },
                "type": "GeneratedTraitsInternalServerError"
            },
            {
                "status": 403,
                "body": {
                    "message": "Access to requested resource denied.",
                    "errors": [
                        {
                            "message": "Resource access denied due to an insufficient user quota of {quota}.",
                            "key": "common.api.quota",
                            "context": {
                                "quota": "someQuota"
                            }
                        }
                    ]
                },
                "type": "GeneratedTraitsForbiddenError"
            },
            {
                "status": 400,
                "body": {
                    "message": "Bad Request",
                    "errors": [
                        {
                            "message": "Value Exceeded. Must be between {min} and {max}.",
                            "key": "common.api.shoesize",
                            "context": {
                                "max": "50",
                                "min": "1"
                            }
                        }
                    ]
                },
                "type": "GeneratedTraitsBadRequestError"
            },
            {
                "status": 200,
                "body": [
                    {
                        "code": "EUR"
                    },
                    {
                        "code": "GBP"
                    },
                    {
                        "code": "USD"
                    }
                ],
                "type": "CurrenciesGet"
            }
        ]
    },
    {
        "urlPattern": "/{version}/exchange/rates",
        "method": "GET",
        "responses": [
            {
                "status": 500,
                "body": {
                    "message": "Description of error"
                },
                "type": "GeneratedTraitsInternalServerError"
            },
            {
                "status": 403,
                "body": {
                    "message": "Access to requested resource denied.",
                    "errors": [
                        {
                            "message": "Resource access denied due to an insufficient user quota of {quota}.",
                            "key": "common.api.quota",
                            "context": {
                                "quota": "someQuota"
                            }
                        }
                    ]
                },
                "type": "GeneratedTraitsForbiddenError"
            },
            {
                "status": 400,
                "body": {
                    "message": "Bad Request",
                    "errors": [
                        {
                            "message": "Value Exceeded. Must be between {min} and {max}.",
                            "key": "common.api.shoesize",
                            "context": {
                                "max": "50",
                                "min": "1"
                            }
                        }
                    ]
                },
                "type": "GeneratedTraitsBadRequestError"
            },
            {
                "status": 200,
                "body": [
                    {
                        "rate": 1.1279,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-03-13"
                    },
                    {
                        "rate": 1.12504,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-03-12"
                    },
                    {
                        "rate": 1.12235,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-03-11"
                    },
                    {
                        "rate": 1.12341,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-03-10"
                    },
                    {
                        "rate": 1.12341,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-03-09"
                    },
                    {
                        "rate": 1.11859,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-03-08"
                    },
                    {
                        "rate": 1.11789,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-03-07"
                    },
                    {
                        "rate": 1.12911,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-03-06"
                    },
                    {
                        "rate": 1.1291,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-03-05"
                    },
                    {
                        "rate": 1.13099,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-03-04"
                    },
                    {
                        "rate": 1.13638,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-03-03"
                    },
                    {
                        "rate": 1.13638,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-03-02"
                    },
                    {
                        "rate": 1.13547,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-03-01"
                    },
                    {
                        "rate": 1.13627,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-02-28"
                    },
                    {
                        "rate": 1.13647,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-02-27"
                    },
                    {
                        "rate": 1.1347,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-02-26"
                    },
                    {
                        "rate": 1.13377,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-02-25"
                    },
                    {
                        "rate": 1.13319,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-02-24"
                    },
                    {
                        "rate": 1.13319,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-02-23"
                    },
                    {
                        "rate": 1.1321,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-02-22"
                    },
                    {
                        "rate": 1.13243,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-02-21"
                    },
                    {
                        "rate": 1.13276,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-02-20"
                    },
                    {
                        "rate": 1.1278,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-02-19"
                    },
                    {
                        "rate": 1.12945,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-02-18"
                    },
                    {
                        "rate": 1.12411,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-02-15"
                    },
                    {
                        "rate": 1.12523,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-02-14"
                    },
                    {
                        "rate": 1.12508,
                        "source": "EUR",
                        "target": "USD",
                        "time": "2019-02-13"
                    }
                ],
                "type": "ExchangeRatesGet"
            }
        ]
    }
];
export const ExchangeRateDataMocksProvider: Provider = createMocks(examples, EXCHANGE_RATE_DATA_CONFIG);
