import React, {memo} from 'react';
import {Text, View} from 'react-native';
import NoDataIcon from '@app/assets/icons/github.svg';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

export const EmptyComponent = memo(() => {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.center}>
      <NoDataIcon />
      <Text style={styles.text}>search without results</Text>
    </View>
  );
});
const stylesheet = createStyleSheet(theme => ({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: theme.colors.disabled,
    fontSize: theme.fonts.xlarge,
    marginTop: 10,
  },
}));
