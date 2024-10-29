import React from 'react';
import {View} from 'react-native';

const Margin = ({top, right, bottom, left}: any) => (
  <View
    style={{
      marginTop: top,
      marginRight: right,
      marginBottom: bottom,
      marginLeft: left,
    }}
  />
);

export default React.memo(Margin);
