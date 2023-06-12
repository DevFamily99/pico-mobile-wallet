import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {UserInfoProviderInterface} from '../types';
import {useRPC} from './RPCContext';

const UserInfoContext = createContext < UserInfoProviderInterface | undefined>(undefined);

const UserInfoContextProvider = ({children}: {children: ReactNode}) => {
  const updateWalletDataInterval = 30*1000;
  const [name, setName] = useState<string>();
  const [avatar, setAvatar] = useState('');
  const [mnemonic, setMnemonic] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [balance, setBalance] = useState<number>(0);
  const {rpc} = useRPC();
  // get Local Storage data
  useEffect(() => {
    (async () => {
      const nameStore = await AsyncStorage.getItem('@MySuperStore:name');
      const avatarStore = await AsyncStorage.getItem('@MySuperStore:avatar');
      const mnemonicStore = await AsyncStorage.getItem('@MySuperStore:mnemonic');
      const publicKeyStore = await AsyncStorage.getItem('@MySuperStore:public');
      const privateKeyStore = await AsyncStorage.getItem('@MySuperStore:private');
      if (nameStore) setName(nameStore);
      if (avatarStore) setAvatar(avatarStore);
      if (mnemonicStore) setMnemonic(mnemonicStore);
      if (publicKeyStore) setPublicKey(publicKeyStore);
      if (privateKeyStore) setPrivateKey(privateKeyStore);
    })();
  }, []);

  // get Wallet Info
  const getWalletInfo = async () => {
    if (name) {
      try {
        const data = await rpc.get_currency_balance('pico.token', name, 'PICO');
        if (data && data.length>0) {
          const balanceData = parseFloat(data[0].split(' ')[0]);
          setBalance(balanceData);
          return balanceData;
        }
        setBalance(0.0);
        return 0.0;
      } catch (error: any) {
        console.log(error.message);
      }
    }
    return;
  };
  useEffect(() => {
    if (name) {
      getWalletInfo();
      const intervalGetWalletInfo = setInterval(getWalletInfo, updateWalletDataInterval);
      return () => clearInterval(intervalGetWalletInfo);
    }
  }, [name]);

  return (
    <UserInfoContext.Provider
      value={{
        name,
        setName,
        avatar,
        mnemonic,
        publicKey,
        privateKey,
        balance,
        updateBalance: getWalletInfo,
      }}>
      {children}
    </UserInfoContext.Provider>
  );
};

function useUserInfo() {
  const context = useContext(UserInfoContext);
  if (context === undefined) {
    throw new Error('useUserInfo must be used within a UserInfoProvider');
  }
  return context;
}

export {UserInfoContext, UserInfoContextProvider, useUserInfo};
