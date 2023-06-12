/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome} from 'react-native-vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Pressable, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
// import BasicComponents from '../screens/loginScreens/Welcome';
// import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {
  LoginStackParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';
import Welcome from '../screens/loginScreens/Welcome';
import LoginScren from '../screens/loginScreens/LoginScreen';
import Referral from '../screens/loginScreens/Referral';
import SeedPhrase from '../screens/loginScreens/SeedPhrase';
import SeedVerify from '../screens/loginScreens/SeedVerify';
import SelectName from '../screens/loginScreens/SelectName';
import Restore from '../screens/loginScreens/Restore';
import RestoreQR from '../screens/loginScreens/RestoreQR';
import LoginSplit from '../screens/loginScreens/LoginSplit';
import RestoreNewPassword from '../screens/loginScreens/RestoreNewPassword';
import RestoreSeedPhrase from '../screens/loginScreens/RestoreSeedPhrase';
import Success from '../screens/loginScreens/Success';
import SaveBackup from '../screens/loginScreens/SaveBackup';
import UploadPicture from '../screens/loginScreens/UploadPicture';
import NewPassword from '../screens/loginScreens/NewPassword';
import SeedReveal from '../screens/loginScreens/SeedReveal';
import ReferralSearch from '../screens/loginScreens/ReferralSearch';
import SaveBackupCloud from '../screens/loginScreens/SaveBackupCloud';
import AlmostThere from '../screens/loginScreens/AlmostThere';
import RestorePicture from '../screens/loginScreens/RestorePicture';
import SplashScreen from '../screens/loginScreens/SplashScreen';

export const navigationRef:any = React.createRef();

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
  const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors['light']['background']
    },
  };
  // (colorScheme === 'dark') ? DarkTheme : CustomDefaultTheme;
  let colorSchemeProp = CustomDefaultTheme;
  const [password, setPassword] = React.useState('');
  const [check, setCheck] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  React.useEffect(() => {
    setIsLogin(true);
    const getPassword = async () => {
      navigationRef.current = await AsyncStorage.getItem('@MySuperStore:key');
      setCheck(true);
    };
    getPassword();
  }, []);
  // if(!check) return null;

  return (
    <NavigationContainer>
      <View />
      {/* {setTimeout(() => { */}
      <RootNavigator />
      {/* }, 1000)} */}
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginStackNavigator}
        options={{ headerShown: false }}
      />
      {/*
        <Stack.Screen name="Root"
          component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="NotFound"
          component={NotFoundScreen} options={{ title: 'Oops!' }} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch
 * screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

/*Login Screens Stack Navigation */
const LoginStack = createNativeStackNavigator<LoginStackParamList>();

function LoginStackNavigator() {
  const colorScheme = useColorScheme();
  const headerOptions = {
    headerTitle: () => <></> ,
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
    <LoginStack.Navigator initialRouteName={'SplashScreen'} screenOptions={{headerTitleAlign: 'center'}} >
      <LoginStack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
      <LoginStack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
      <LoginStack.Screen name="LoginScreen" component={LoginScren} options={{headerShown: false}} />
      <LoginStack.Screen name="LoginSplit" component={LoginSplit} options={headerOptions} />
      <LoginStack.Screen name="Restore" component={Restore} options={headerOptions} />
      <LoginStack.Screen name="RestoreSeedPhrase" component={RestoreSeedPhrase} options={headerOptions} />
      <LoginStack.Screen name="RestoreQR" component={RestoreQR} options={headerOptions} />
      <LoginStack.Screen name="RestoreNewPassword" component={RestoreNewPassword} options={headerOptions} />
      <LoginStack.Screen name="RestorePicture" component={RestorePicture} options={headerOptions} />
      <LoginStack.Screen name="Referral" component={Referral} options={headerOptions} />
      <LoginStack.Screen name="ReferralSearch" component={ReferralSearch} options={headerOptions} />
      <LoginStack.Screen name="SeedPhrase" component={SeedPhrase} options={headerOptions} />
      <LoginStack.Screen name="SeedReveal" component={SeedReveal} options={headerOptions} />
      <LoginStack.Screen name="SeedVerify" component={SeedVerify} options={headerOptions} />
      <LoginStack.Screen name="SelectName" component={SelectName} options={headerOptions} />
      <LoginStack.Screen name="UploadPicture" component={UploadPicture} options={headerOptions} />
      <LoginStack.Screen name="NewPassword" component={NewPassword} options={headerOptions} />
      <LoginStack.Screen name="SaveBackup" component={SaveBackup} options={headerOptions} />
      <LoginStack.Screen name="SaveBackupCloud" component={SaveBackupCloud} options={headerOptions} />
      <LoginStack.Screen name="AlmostThere" component={AlmostThere} options={{headerShown: false}} />
      <LoginStack.Screen name="Success" component={Success} options={{headerShown: false}} />
      <LoginStack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}} />
    </LoginStack.Navigator>
  );
}






