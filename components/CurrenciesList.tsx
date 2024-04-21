import BottomSheet, { BottomSheetFlatList, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { forwardRef, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { CurrencyFlag } from './CurrencyFlag';
import { useStyles } from './CurrencyStyle';
import { currencies, Currency } from '../constants/currencies';
import currenciesImages from '../constants/currencies-images';
import { useCurrency } from '../context/CurrencyContext';
import { Colors } from '../styles/colors';

type CurrenciesListRef = {
  expand: () => void;
  collapse: () => void;
  close: () => void;
  snapToIndex: (index: number) => void;
  snapToPosition: (position: string | number) => void;
  forceClose: () => void;
};

const CurrenciesList = forwardRef<CurrenciesListRef>(function CurrenciesList(_, ref) {
  const [search, setSearch] = useState('');

  const { setCurrency } = useCurrency();

  const initialSnapPoints = useMemo(() => ['80%'], []);

  const listOfCurrencies = Object.entries(currencies);

  const filteredListOfCurrencies = listOfCurrencies.filter((currency) => {
    const { code, name, symbol } = currency[1];
    const propretiesToSearchIn = [code, name, symbol];

    return propretiesToSearchIn.some((prop) => prop.toLowerCase().includes(search.toLowerCase()));
  });

  const styles = useStyles();

  const renderItem = ({ item }: { item: [string, Currency] }) => {
    const [key, currency] = item;
    return (
      <Pressable
        onPress={() => {
          setCurrency(currency);
          ref?.current?.close();
        }}
        style={[styles.item]}
      >
        <CurrencyFlag currency={key as keyof typeof currenciesImages} />
        <Text style={[styles.currencyName]}>{currency.code}</Text>
        <Text style={[styles.commonName]}>{currency.name}</Text>
        <Text style={[styles.commonSymbolCode]}>{currency.symbol}</Text>
      </Pressable>
    );
  };

  const handleFilterChange = (text: string) => {
    setSearch(text);
  };

  return (
    <BottomSheet enablePanDownToClose ref={ref} snapPoints={initialSnapPoints}>
      <View style={styles.search}>
        <View style={[styles.textInputContainer]}>
          <BottomSheetTextInput
            onChangeText={(text) => handleFilterChange(text)}
            value={search}
            placeholder="Search for a currency"
            placeholderTextColor={Colors.textFieldColor}
            style={[styles.textTitleSmallerWhite, styles.textInput]}
          />
        </View>
      </View>
      <BottomSheetFlatList
        data={filteredListOfCurrencies}
        renderItem={renderItem}
        keyExtractor={(item) => item[1].code}
        ListEmptyComponent={() => (
          <View style={styles.listNullContainer}>
            <Text style={styles.txtEmpty}>No data found</Text>
          </View>
        )}
      />
    </BottomSheet>
  );
});

export default CurrenciesList;