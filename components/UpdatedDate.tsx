import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { useStyles } from './CurrencyStyle';
import { useCurrency } from '../context/CurrencyContext';

const UpdatedDate = () => {
  const { updateDate, fetchCurrencyData } = useCurrency();
  const styles = useStyles();

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
          fontSize: 12,
          color: styles.secondaryText.color,
          fontWeight: '700',
        }}
      >
        {updateDate.toLocaleDateString()} {updateDate.toLocaleTimeString()}
      </Text>
      <Pressable onPress={fetchCurrencyData}>
        <Ionicons name="refresh" size={18} color={styles.secondaryText.color} />
      </Pressable>
    </View>
  );
};

export default UpdatedDate;