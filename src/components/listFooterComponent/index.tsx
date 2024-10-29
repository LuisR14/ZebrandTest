import React, {memo} from 'react';
import {ActivityIndicator} from 'react-native';

const ListFooterComponent = () => {
  return <ActivityIndicator animating />;
};
export default memo(ListFooterComponent);
