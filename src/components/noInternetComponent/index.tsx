import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import styles from './styles';
import NoInternetIcon from '../../assets/icons/no_internet_connection.svg';
import Margin from '../margin';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserOffline} from '../../redux/userSettingSlice';

export const NoInternetComponent = () => {
  const dispatch = useDispatch();
  const Settings = useSelector((state: any) => state.userSettings);
  const Theme = Settings?.darkMode;
  const opacityDark = 0.9;
  const opacityLight = 0.75;

  const handleOfflineMode = () => {
    dispatch(updateUserOffline(true));
  };
  return (
    <View
      style={{
        ...styles.modalComponent,
        opacity: Theme === 'dark' ? opacityDark : opacityLight,
      }}>
      <View style={styles.modalContainer}>
        <NoInternetIcon />
        <Margin bottom={20} />
        <Text style={styles.textCrypto}>NO INTERNET CONNECTION</Text>
        <Margin bottom={100} />
        <TouchableOpacity
          onPress={handleOfflineMode}
          style={styles.buttonOffline}>
          <Text style={styles.textButtonOffline}>OFFLINE MODE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
