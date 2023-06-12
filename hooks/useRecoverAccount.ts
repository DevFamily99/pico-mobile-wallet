import AsyncStorage from '@react-native-async-storage/async-storage';
import useGetAccountList from './useGetAccountList';
import ecc from 'eosjs-ecc-rn';
const bip39 = require('@medardm/react-native-bip39');

export default function useRecoverAccount() {
  const {getAccountList} = useGetAccountList();

  const recoverAccount = async (phrase: string[]) => {
    try {
      for (let i=0; i < phrase.length; i++) {
        if (phrase[i].replace(' ', '') == '') {
          throw new Error('Please insert all seed phrases');
        }
      }
      let strPhrase = phrase[0];
      for (let i = 1; i < phrase.length; i++) {
        strPhrase += ' ' + phrase[i];
      }

      const seed = bip39.mnemonicToSeedSync(strPhrase).toString('hex');
      const privateKey = await ecc.seedPrivate(seed);
      const publicKey = await ecc.privateToPublic(privateKey);

      const data = await getAccountList(publicKey);
      if (data.account_names.length != 0) {
        const name = data.account_names[0];
        await AsyncStorage.setItem('@MySuperStore:mnemonic', strPhrase);
        await AsyncStorage.setItem('@MySuperStore:public', publicKey);
        await AsyncStorage.setItem('@MySuperStore:private', privateKey);
        await AsyncStorage.setItem('@MySuperStore:name', name);
        return name;
      } else {
        throw new Error(`Failed to get the account information.
        \nPlease confirm the Seed Phrases.`);
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return {
    recoverAccount,
  };
}
