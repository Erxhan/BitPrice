import { useLocales } from 'expo-localization';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

import { BitcoinData, BitcoinDataUrl, CurrencyData, CurrencyDataUrl } from '../constants/api';
import { currencies, Currency } from '../constants/currencies';

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  currencyValue: number;
  setCurrencyValue: (value: number) => void;
  bitcoinValue: number;
  setBitcoinValue: (value: number) => void;
  updateDate: Date;
};

const CurrencyContext = createContext<CurrencyContextType>({
  currency: currencies.EUR,
  setCurrency: () => {},
  currencyValue: 1,
  setCurrencyValue: () => {},
  bitcoinValue: 1,
  setBitcoinValue: () => {},
  updateDate: new Date(),
});

export const CurrencyContainer = ({ children }: PropsWithChildren<any>) => {
  const locale = useLocales()[0];

  const defaultCurrency = currencies[locale.currencyCode as keyof typeof currencies];

  const [currency, setCurrency] = useState<Currency>(defaultCurrency);
  const [bitcoinValue, setBitcoinValue] = useState<number>(1);
  const [currencyValue, setCurrencyValue] = useState<number>(0);

  const [data, setData] = useState<BitcoinData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currencyData, setCurrencyData] = useState<CurrencyData | null>(null);
  const [currencyLoading, setCurrencyLoading] = useState(true);
  const [currencyError, setCurrencyError] = useState(null);

  const updateDate = data?.time.updatedISO ? new Date(data.time.updatedISO) : new Date();

  useEffect(() => {
    fetch(CurrencyDataUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.statusText);
        }
      })
      .then((data) => {
        setCurrencyData(data);
        setCurrencyLoading(false);
      })
      .catch((error) => {
        setCurrencyError(error.message);
        setCurrencyLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(BitcoinDataUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.statusText);
        }
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const currencyRate = Number(currencyData?.rates[currency.code].rate) ?? 1;
    const euroRate = data?.bpi[currencies.EUR.code].rate_float ?? 1;
    const rate = euroRate * currencyRate;

    setCurrencyValue(rate * bitcoinValue);
  }, [bitcoinValue, currency, currencyData, data]);

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        currencyValue,
        setCurrencyValue,
        bitcoinValue,
        setBitcoinValue,
        updateDate,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  return useContext(CurrencyContext);
};

export default CurrencyContext;