import { Text } from 'react-native';

import { useCurrency } from '../context/CurrencyContext';

const UpdatedDate = () => {
  const { updateDate } = useCurrency();

  return (
    <Text
      style={{
        fontSize: 12,
        color: 'grey',
        fontWeight: '700',
      }}
    >
      {updateDate.toDateString()}
    </Text>
  );
};

export default UpdatedDate;