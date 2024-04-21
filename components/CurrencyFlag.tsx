import React from 'react';
import { Image, View } from 'react-native';
import currenciesImages from '../constants/currencies-images';

type CurrencyFlagProps = {
  currency: keyof typeof currenciesImages;
};

export const CurrencyFlag = ({ currency }: CurrencyFlagProps) => {
  const img: string = currenciesImages[currency];
  if (!img) return <View style={{ width: 50, height: 30 }} />;
  return (
    <Image
      source={{ uri: img }}
      style={{
        borderRadius: 5,
      }}
      width={50}
      height={30}
    />
  );
};
