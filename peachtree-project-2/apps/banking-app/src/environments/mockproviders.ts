import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';
import { ProductSummaryDataHttpMocksProvider } from "@backbase/data-ang/product-summary";
import { TransactionsDataHttpMocksProvider } from "@backbase/data-ang/transactions";

export const mockProviders = [
    createMocksInterceptor(),
    ProductSummaryDataHttpMocksProvider,
    TransactionsDataHttpMocksProvider
];