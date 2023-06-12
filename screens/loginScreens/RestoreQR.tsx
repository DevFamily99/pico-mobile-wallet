import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ecc from 'eosjs-ecc-rn';
import { Text, View} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import IconButton from '../../components/IconButton';
import PicoWalletIcon from '../../components/PicoWalletIcon';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { LoginStackScreenProps, RootStackScreenProps } from '../../types';
import GlobalStyle from '../../constants/GlobalStyle';
import {EOS_SERVER_URL, EOS_PRIVATE_KEY} from "@env";

export default function RestoreQR({
  navigation,
}: LoginStackScreenProps<"RestoreQR">) {

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setListener();
  }, []);

/*
  const setListener = () => {
		nodejs.channel.addListener(
      'message',
      async (msg) => {
        let jsonData = JSON.parse(msg);
        if(jsonData.type == 'get_account_list') {
					if(jsonData.code == 200 && jsonData.message.account_names.length != 0) {
            await AsyncStorage.setItem("@MySuperStore:name", jsonData.message.account_names[0]);
            navigation.navigate('AlmostThere', {name:jsonData.message.account_names[0]});
					} else {
            setErrMsg('Failed to get the account information.');
						console.log(jsonData.message);
					}
        }
			}
    );
	} 
  */

  const onSuccess = async (e:any) => {
    let privateKey = await ecc.seedPrivate(e.data);
    let publicKey = await ecc.privateToPublic(privateKey);

    await AsyncStorage.setItem("@MySuperStore:public", publicKey);
    await AsyncStorage.setItem("@MySuperStore:private", privateKey);
    // nodejs.channel.send('get_account_list', EOS_SERVER_URL, EOS_PRIVATE_KEY, '', publicKey.toString())
  }

  return (
    <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        bottomContent={
          <Text style={GlobalStyle.err_msg}>{errMsg}</Text>
        }
      />
    
  );


}


const styles = StyleSheet.create({
  container: {
    ...GlobalStyle.container_main,
    backgroundColor: 'rgba(0, 0, 0, .0)'
    
  },
  scanner: {
    // flex: 1,
    width: 400,
    height:400,
  },
  buttonsContainer:{
    flex:1,
    width: '100%',
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .0)'
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
  logo: {
    padding: 50,
  }

});
