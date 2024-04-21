type BitcoinPriceIndex = {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
};

type Time = {
  updated: string;
  updatedISO: string;
  updateduk: string;
};

export type BitcoinData = {
  time: Time;
  disclaimer: string;
  chartName: string;
  bpi: {
    [key: string]: BitcoinPriceIndex;
  };
};

export const BitcoinDataUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';

type CurrencyRate = {
  currency_name: string;
  rate: string;
  rate_for_amount: string;
};

export type CurrencyData = {
  base_currency_code: string;
  base_currency_name: string;
  amount: string;
  updated_date: string;
  rates: {
    [key: string]: CurrencyRate;
  };
};

export const CurrencyDataUrl =
  'https://api.getgeoapi.com/v2/currency/convert?api_key=a6d2b23eb2ae0f35e5b6aa0bff7541be101bccb6&from=EUR&amount=1&format=json';