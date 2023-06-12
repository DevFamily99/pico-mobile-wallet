import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';
import Colors from '../constants/Colors';
import {MainAppTabParamList} from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import Whitepaper from '../screens/mainScreens/Whitepaper';
import FAQ from '../screens/mainScreens/FAQ';
import Governance from '../screens/mainScreens/Governance';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNavigation from './HomeNavigation';

export default function MainAppNavigation({colorScheme}: { colorScheme: ColorSchemeName }) {
  const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors['light']['background'],
    },
  };
  const colorSchemeProp = (colorScheme === 'dark') ? DarkTheme : CustomDefaultTheme;

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorSchemeProp}>
      <StackNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<MainAppTabParamList>();

function StackNavigator() {
  /*
    screenOptions={{
    tabBarActiveTintColor: Colors[colorScheme].gradient_start,
    tabBarInactiveTintColor: Colors[colorScheme].disabled,
    tabBarIndicatorStyle: { backgroundColor: Colors[colorScheme].text},
    tabBarStyle:{ backgroundColor: Colors[colorScheme].navbar, justifyContent: 'center'}
  }}*/
  const headerOptions = {
    headerTitle: () => <></>,
    headerStyle: {
      backgroundColor: '#F25D10',
      height: 100,
      borderRadius: 100,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
  };

  return (
    <Stack.Navigator
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeNavigation} options={{headerShown: false}} />
      <Stack.Screen name="Whitepaper" component={Whitepaper} options={headerOptions} />
      <Stack.Screen name="FAQ" component={FAQ} options={headerOptions}/>
      <Stack.Screen name="Governance" component={Governance} options={headerOptions}/>
    </Stack.Navigator>
  );
}
