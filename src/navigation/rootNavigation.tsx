/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useStyles} from 'react-native-unistyles';
import HomeScreen from '@app/screens/home';
import RepoScreen from '@app/screens/repo';
import SettingsScreen from '@app/screens/settings';
import {Routes} from './types';

const Tab = createBottomTabNavigator();

export const RootNavigation = () => {
  const {theme} = useStyles();
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: theme.colors.sceneContainerBackground,
      }}
      initialRouteName={Routes.HOME}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          const icons: any = {
            Users: 'account-search',
            Repositories: 'source-repository',
            Settings: 'cog',
          };

          return <Icons name={icons[route.name]} color={color} size={30} />;
        },
        headerShown: false,
        tabBarItemStyle: {
          alignItems: 'center',
        },
        tabBarStyle: {
          height: 86,
          backgroundColor: theme.colors.tabBar,
        },
        tabBarLabelStyle: {
          fontSize: theme.fonts.normal,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: theme.colors.white,
        tabBarActiveBackgroundColor: theme.colors.black,
        tabBarInactiveTintColor: theme.colors.iconColor,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen name={Routes.HOME} component={HomeScreen} />
      <Tab.Screen name={Routes.REPOSITORIES} component={RepoScreen} />
      <Tab.Screen name={Routes.SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  );
};
