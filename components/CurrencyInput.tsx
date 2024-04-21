import { Ionicons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Bitcoin } from '../constants/currencies';
import { useCurrency } from '../context/CurrencyContext';

export const BitcoinInput = () => {
  const { bitcoinValue, setBitcoinValue } = useCurrency();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          fontWeight: '700',
        }}
      >
        {Bitcoin.code}
      </Text>
      <TextInput
        style={{
          fontSize: 25,
          color: 'black',
          fontWeight: '700',
          textAlign: 'right',
          flex: 1,
        }}
        value={bitcoinValue.toString()}
        onChange={(e) => setBitcoinValue(Number(e.nativeEvent.text))}
        placeholder="0"
        keyboardType="numeric"
      />
      <Text
        style={{
          fontSize: 20,
          color: 'grey',
          fontWeight: '700',
        }}
      >
        {Bitcoin.symbol}
      </Text>
    </View>
  );
};

export const CurrencyInput = ({ onPress }: { onPress: () => void }) => {
  const { currency, currencyValue } = useCurrency();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={onPress}
      >
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            fontWeight: '700',
          }}
        >
          {currency.code}
        </Text>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30 - currencyValue.toString().length / 1.5,
          color: 'black',
          fontWeight: '700',
          textAlign: 'right',
          flex: 1,
        }}
      >
        {currencyValue.toString()}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'grey',
          fontWeight: '700',
        }}
      >
        {currency.symbol}
      </Text>
    </View>
  );
};