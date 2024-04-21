import { Platform, StyleSheet, useColorScheme } from 'react-native';

import { ColorDarkMode, ColorLightMode } from '../styles/colors';
import { Styles } from '../styles/common';

export const useStyles = () => {
  const colorScheme = useColorScheme();

  const darkMode = colorScheme === 'dark';

  const Colors = darkMode ? ColorDarkMode : ColorLightMode;

  const marginBottomByPlatform = Platform.OS === 'ios' ? 5 : 0;

  return StyleSheet.create({
    container: {
      backgroundColor: Colors.backgroundModal,
      height: Styles.window.height,
      padding: 20,
    },
    listContainer: {
      backgroundColor: Colors.backgroundModal,
    },
    title: {
      fontSize: 40,
      color: Colors.txtTitleModal,
      fontWeight: '700',
    },
    item: {
      flexDirection: 'row',
      paddingVertical: 15,
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    currencyName: {
      color: Colors.txtCountryName,
      fontWeight: 'bold',
      textAlign: 'center',
      width: 80,
      fontSize: 16,
      marginBottom: marginBottomByPlatform,
    },
    commonName: {
      color: Colors.txtCountryName,
      marginBottom: marginBottomByPlatform,
      marginHorizontal: 20,
      width: 110,
      fontSize: 14,
    },
    commonSymbolCode: {
      color: Colors.txtCallingCode,
      marginBottom: marginBottomByPlatform,
      fontSize: 14,
      flex: 1,
      textAlign: 'right',
    },
    search: {
      ...Styles.justifyCenter,
      height: 40,
      paddingHorizontal: 20,
    },
    textInputContainer: {
      borderRadius: 7,
      backgroundColor: Colors.backgroundInput,
      flex: 1,
      justifyContent: 'center',
    },
    textTitleSmallerWhite: {
      fontSize: 16,
      fontWeight: '500',
      color: Colors.txtTitleModal,
    },
    textInput: {
      padding: 10,
      flex: 1,
    },
    searchClose: {
      alignItems: 'flex-end',
      marginLeft: 10,
    },
    listNullContainer: {
      ...Styles.center,
      marginTop: 50,
    },
    header: {
      ...Styles.justifyContent,
      alignItems: 'center',
      marginBottom: 10,
      marginHorizontal: 20,
    },
    titleModal: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.txtTitleModal,
    },
    btnClose: {
      color: Colors.txtTitleModal,
      fontSize: 20,
      fontWeight: '600',
    },
    txtEmpty: {
      color: Colors.txtCountryCode,
      fontSize: 16,
      fontWeight: '500',
    },
    flag: {
      fontSize: Platform.OS === 'ios' ? 28 : 20,
      lineHeight: 30,
      color: Colors.flagColor,
    },
  });
};