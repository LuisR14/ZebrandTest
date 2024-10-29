/**
 * Zebrands React Native App
 * https://github.com/facebook/react-native
 * Luis.R Brito
 * @format
 */

import React from 'react';
import '@app/config/uniStyles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {UnistylesRuntime, UnistylesThemes} from 'react-native-unistyles';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from '@app/navigation/rootNavigation';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@app/config/queryClient';
import {getUserTheme} from '@app/functions/getUserTheme';
import {ToastProvider} from 'react-native-toast-notifications';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import BootSplash from 'react-native-bootsplash';

const App = () => {
  const userTheme = getUserTheme() as keyof UnistylesThemes | undefined;
  UnistylesRuntime.setTheme(userTheme ? userTheme : 'light');
  const Theme = UnistylesRuntime.getTheme(userTheme);

  return (
    <SafeAreaProvider>
      <ToastProvider
        placement="bottom"
        duration={600000}
        animationType="slide-in"
        animationDuration={250}
        dangerIcon={
          <Icons name="network-strength-off-outline" size={20} color="white" />
        }
        offset={50}
        offsetTop={30}
        offsetBottom={100}
        swipeEnabled={false}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer
            onReady={() => BootSplash.hide({fade: true})}
            theme={Theme}>
            <RootNavigation />
          </NavigationContainer>
        </QueryClientProvider>
      </ToastProvider>
    </SafeAreaProvider>
  );
};
export default App;
