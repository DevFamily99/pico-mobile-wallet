const bip39 = require('@medardm/react-native-bip39');
import ecc from 'eosjs-ecc-rn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {EOS_SERVER_URL, EOS_PRIVATE_KEY} from '@env';
import {JsSignatureProvider} from 'eosjs/dist/eosjs-jssig';
import {Api, JsonRpc} from 'eosjs';
import {TextDecoder, TextEncoder} from 'text-encoding-polyfill';

export default function useCreateAccount() {
  const createAccount = async (
      phrase: string[],
      username: string,
  ) => {
    if (!username || username=='' || !phrase || phrase.length==0) {
      throw new Error('could not create account');
    }

    let strPhrase = phrase[0];
    for (let i = 1; i < phrase.length; i++) {
      strPhrase += ' ' + phrase[i];
    }

    const seed = bip39.mnemonicToSeedSync(strPhrase).toString('hex');
    const privateKey = await ecc.seedPrivate(seed);
    const publicKey = await ecc.privateToPublic(privateKey);

    // nodejs.channel.send
    // ('create_account', EOS_SERVER_URL, EOS_PRIVATE_KEY, username, publicKey)
    const privateKeys = [EOS_PRIVATE_KEY];
    const signatureProvider = new JsSignatureProvider(privateKeys);
    const rpc = new JsonRpc(EOS_SERVER_URL);
    const api = new Api({
      rpc,
      signatureProvider,
      textDecoder: new TextDecoder(),
      textEncoder: new TextEncoder(),
    });
    const result = await api.transact({
      actions: [{
        account: 'eosio',
        name: 'newaccount',
        authorization: [{
          actor: 'eosio',
          permission: 'active',
        }],
        data: {
          creator: 'eosio',
          name: username,
          owner: {
            threshold: 1,
            keys: [{
              key: publicKey,
              weight: 1,
            }],
            accounts: [],
            waits: [],
          },
          active: {
            threshold: 1,
            keys: [{
              key: publicKey,
              weight: 1,
            }],
            accounts: [],
            waits: [],
          },
        },
      }],
    }, {
      blocksBehind: 3,
      expireSeconds: 30,
    });
    // store data after account is created successfuly
    await AsyncStorage.setItem('@MySuperStore:mnemonic', strPhrase);
    await AsyncStorage.setItem('@MySuperStore:public', publicKey);
    await AsyncStorage.setItem('@MySuperStore:private', privateKey);
    console.log('seed: ', seed);
    console.log('privKey: ', privateKey);
    console.log('pubKey: ', publicKey);
    return result;
  };

  return {
    createAccount,
  };
}
