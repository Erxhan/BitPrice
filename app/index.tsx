import { FontAwesome } from '@expo/vector-icons';
import BottomSheet, { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { Keyboard, KeyboardAvoidingView, Pressable, SafeAreaView, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import CurrenciesList from '../components/CurrenciesList';
import { BitcoinInput, CurrencyInput } from '../components/CurrencyInput';
import { useStyles } from '../components/CurrencyStyle';
import UpdatedDate from '../components/UpdatedDate';
import { CurrencyContainer } from '../context/CurrencyContext';

export default function App() {
  const sheetRef = useRef<BottomSheet>(null);

  const styles = useStyles();

  return (
    <BottomSheetModalProvider>
      <GestureHandlerRootView>
        <SafeAreaView>
          <KeyboardAvoidingView>
            <Pressable onPress={Keyboard.dismiss}>
              <CurrencyContainer>
                <View style={styles.container}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                      marginBottom: 50,
                    }}
                  >
                    <Text style={styles.title}>BitPrice</Text>
                    <FontAwesome name="bitcoin" size={40} color="black" />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      gap: 30,
                    }}
                  >
                    <BitcoinInput />
                    <FontAwesome name="arrow-down" size={24} color="black" />
                    <CurrencyInput onPress={() => sheetRef.current?.expand()} />
                    <UpdatedDate />
                  </View>
                  <CurrenciesList ref={sheetRef} />
                </View>
              </CurrencyContainer>
            </Pressable>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </GestureHandlerRootView>
    </BottomSheetModalProvider>
  );
}