import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import MainAppNavigation from './navigation/MainAppNavigation';
import {UserInfoContextProvider, useUserInfo} from './context/UserInfoContext';
import {RPCContextProvider} from './context/RPCContext';

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <RPCContextProvider>
          <UserInfoContextProvider>
            <LoginSelect />
          </UserInfoContextProvider>
        </RPCContextProvider>
      </SafeAreaProvider>
    );
  }
}

const LoginSelect = () => {
  const {name} = useUserInfo();
  const colorScheme = useColorScheme();
  if (name) {
    return <MainAppNavigation colorScheme={colorScheme} />;
  } else {
    return <Navigation colorScheme={colorScheme} />;
  }
};
