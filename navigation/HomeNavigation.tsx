import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { HomeParamList, MainTabScreenProps } from '../types';
import { Text, View } from '../components/Themed';
import TopDrawer from '../components/TopDrawer';
import Faucet from '../screens/mainScreens/Faucet';
import Savings from '../screens/mainScreens/Savings';
import Transfer from '../screens/mainScreens/Transfer';
import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import Exchange from '../screens/mainScreens/Exchange';
import { Icon } from '@rneui/themed'
import ChatNavigation from './ChatNavigation';

export default function HomeNavigation({ colorScheme, navigation }: { colorScheme: ColorSchemeName, navigation: MainTabScreenProps<'Home'> }) {
  const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors['light']['background']
    }
  }
  let colorSchemeProp = (colorScheme === 'dark') ? DarkTheme : CustomDefaultTheme;

  return (
    <>
      <TopDrawer navigation={navigation} />
      <TopTabNavigator />
    </>
  );
}

const TopTab = createMaterialTopTabNavigator<HomeParamList>();

function TopTabNavigator() {
  return (
    <TopTab.Navigator
      initialRouteName="Faucet"
      tabBarPosition="bottom"
      tabBar={props => <CustomTabBar {...props} />}>
      <TopTab.Screen name="Faucet" component={Faucet} options={{ title: "FAUCET" }} />
      {/* <TopTab.Screen name="Vote" component={Vote}  options={{title:"VOTE"}} /> */}
      <TopTab.Screen name="Savings" component={Savings} options={{ title: "SAVINGS" }} />
      <TopTab.Screen name="Transfer" component={Transfer} options={{ title: "TRANSFER" }} />
      <TopTab.Screen name="Chats" component={ChatNavigation} options={{ title: "CHATS" }} />
      <TopTab.Screen name="Exchange" component={Exchange} options={{ title: "OPTIONS" }} />
    </TopTab.Navigator>
  );
}

// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome5Icon>['name'];
//   color: string;
// }) {
//   return (
//     <View style={{ width: 80, alignSelf: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
//       <StyledText>
//         <FontAwesome5Icon size={30} style={{ width: '100%' }} {...props} />
//       </StyledText>
//     </View>
//   )
// }

function CustomTabBar({ state, descriptors, navigation }: MaterialTopTabBarProps) {
  const colorScheme = useColorScheme();
  return (
    <View style={{ flexDirection: 'row', backgroundColor: Colors[colorScheme].navbar, height: 60, justifyContent: "space-evenly", alignItems: "center", paddingEnd: 10 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined ? options.tabBarLabel
            : options.title !== undefined ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key || '',
            canPreventDefault: true
          });

          if (!isFocused && !event?.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const icons = {
          'Faucet': 'faucet/font-awesome-5',
          'Vote': 'vote-yea/font-awesome-5',
          'Savings': 'piggy-bank/material-community',
          'Transfer': 'transfer/material-community',
          'Chats': 'message1/antdesign',
          'Exchange': 'gear/font-awesome',
        }
        const name = route.name as keyof typeof icons;
        const icon = icons[name];
        const tintColor = isFocused ? Colors[colorScheme].gradient_start : Colors[colorScheme].disabled;

        const renderIcons = (icon: string) => {
          const [name, type] = icon.split('/')
          return <Icon name={name} type={type} style={{ width: '100%', textAlign: 'center' }} size={30} color={tintColor} />
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
            key={index}
          >
            <View style={{ width: 80, alignSelf: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
              {renderIcons(icon)}
            </View>
            <Text style={{ color: tintColor, fontSize: 12 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}