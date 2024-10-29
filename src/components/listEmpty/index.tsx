import React from 'react';
import {View} from 'react-native';
import EmptyListIcon from '../../assets/icons/listEmpty.svg';
import EmptyDarkListIcon from '../../assets/icons/listEmptyDark.svg';
import {Text} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import colors from '../../themes/colors';

export const CryptoListEmpty = () => {
  const Settings = useSelector((state: any) => state.userSettings);
  const Theme = Settings?.darkMode;
  return (
    <View style={styles.listEmpty}>
      {Theme === 'dark' ? <EmptyDarkListIcon /> : <EmptyListIcon />}
      <Text
        style={{
          ...styles.titleError,
          color: Theme === 'dark' ? colors.white : colors.black,
        }}>
        Empty List
      </Text>
    </View>
  );
};
