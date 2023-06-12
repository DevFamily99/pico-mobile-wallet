import {Api, JsonRpc} from 'eosjs';
import {JsSignatureProvider} from 'eosjs/dist/eosjs-jssig'; // development only
import {EOS_SERVER_URL} from '@env';
import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {RPCProviderInterface} from '../types';
import {TextDecoder, TextEncoder} from 'text-encoding-polyfill';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RPCContext = createContext<RPCProviderInterface | undefined>(undefined);
const RPCContextProvider = ({children}: {children: ReactNode}) => {
  const rpc = new JsonRpc(EOS_SERVER_URL);
  const [api, setApi] = useState<Api>();

  useEffect(() => {
    (async () => {
      const privateKeyStore = await AsyncStorage.getItem('@MySuperStore:private');
      if (privateKeyStore) {
        const privateKeys = [privateKeyStore];
        const signatureProvider = new JsSignatureProvider(privateKeys);
        const apiAux = new Api({
          rpc,
          signatureProvider,
          textDecoder: new TextDecoder(),
          textEncoder: new TextEncoder(),
        });
        setApi(apiAux);
      }
    })();
  }, []);

  return (
    <RPCContext.Provider
      value={{
        rpc,
        api,
      }}>
      {children}
    </RPCContext.Provider>
  );
};

function useRPC() {
  const context = useContext(RPCContext);
  if (context === undefined) {
    throw new Error('useRPC must be used within a RPCContextProvider');
  }
  return context;
}

export {RPCContextProvider, useRPC};
