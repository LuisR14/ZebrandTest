import React from 'react';
import {SafeAreaView, Switch, View} from 'react-native';
import {Text} from 'react-native';
import {saveUserTheme} from '@app/functions/saveUserTheme';
import Margin from '@app/components/margin';
import {
  createStyleSheet,
  UnistylesRuntime,
  useStyles,
} from 'react-native-unistyles';

const SettingsScreen = () => {
  const {styles} = useStyles(stylesheet);
  const onChangeSwitch = () => {
    if (UnistylesRuntime.themeName === 'dark') {
      UnistylesRuntime.setTheme('light');
      saveUserTheme('light');
    } else {
      UnistylesRuntime.setTheme('dark');
      saveUserTheme('dark');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>Settings</Text>
      <Margin bottom={20} />
      <View style={styles.settingComponent}>
        <Text style={styles.textSubTitle}>Dark mode</Text>
        <View style={styles.switchContainer}>
          <Switch
            onValueChange={onChangeSwitch}
            value={UnistylesRuntime.themeName === 'dark' ? true : false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textTitle: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 50,
    fontSize: theme.fonts.xlarge,
    color: theme.colors.textTitle,
  },
  textSubTitle: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    fontSize: theme.fonts.large,
    color: theme.colors.textSubTitle,
  },
  textSwitch: {
    paddingHorizontal: 10,
    fontSize: theme.fonts.normal,
    color: theme.colors.textSubTitle,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  settingComponent: {
    width: runtime.screen.width - 20,
    height: runtime.screen.height / 10,
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: theme.colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: theme.colors.white,
  },
}));
export default SettingsScreen;
