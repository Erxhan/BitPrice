import { Text } from 'react-native';

import { useStyles } from './CurrencyStyle';
import { useCurrency } from '../context/CurrencyContext';

const UpdatedDate = () => {
  const { updateDate } = useCurrency();
  const styles = useStyles();

  return (
    <Text
      style={{
        fontSize: 12,
        color: styles.secondaryText.color,
        fontWeight: '700',
      }}
    >
      {updateDate.toDateString()}
    </Text>
  );
};

export default UpdatedDate;