import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, View} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import PicoWalletIcon from '../../components/PicoWalletIcon';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/Colors';
import {StyledText} from '../../components/StyledText';
import GlobalStyle from '../../constants/GlobalStyle';
import StyledImage from '../../components/StyledImage';
import StyledInput from '../../components/StyledInput';
import {useUserInfo} from '../../context/UserInfoContext';
import useAuth from '../../hooks/useAuth';
const accountName :string = "@picofriend";

export default function LoginScreen({navigation}: {navigation: any}) {
  const {name, avatar} = useUserInfo();
  const {signIn} = useAuth();
  const [savePassword, setSavePassword] = useState('');
  const [state, setpasswordState] = useState(false);
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    const getStorageData = async () => {
      const passwordStore = await AsyncStorage.getItem('@MySuperStore:key');
      if (passwordStore) {
        setSavePassword(passwordStore);
      }
    };
    getStorageData();
  }, []);

  const handleLogin = () => {
    setErrMsg('');
    if (password !== savePassword) {
      setErrMsg('The password is incorrect.');
    } else {
      signIn({name: 'Nicky'});
    }
  };

  return (
    <View style={[styles.container_padding, {paddingTop: 44}]}>
      <LinearGradient
        colors={[ Colors.light.gradient_end,Colors.light.gradient_middle,Colors.light.gradient_start]}
        style={styles.background}
      />
      <View style={{backgroundColor: 'transparent',}}>
        <StyledText style={[{ color: 'white', fontSize: 25}]} >Welcome back</StyledText>
        <StyledText style={[{ color: 'white', fontSize: 35, fontWeight: 'bold'}]} >{name}</StyledText>
		  </View>
      <View style={[GlobalStyle.align_center,{backgroundColor: 'transparent', position:'relative'}]}>
        <PicoWalletIcon color = {"white"} size={150} style={styles.logo}/>
        {avatar ?
          <StyledImage source = {{uri:avatar}} defaultText='user picture' size={125} round style={styles.userPicture}/> :
          <></>
        }
      </View>
      <StyledInput
        defaultText="password"
        inputType = "password"
        passwordState={state}
        value={password}
        noborder={true}
        onPress={()=>setpasswordState(!state)}
        handleChange={(text) => setPassword(text)}
      />
      
      <View style={{backgroundColor:'transparent', width: '100%'}}>
        <Text style={styles.err_msg}>{errMsg}</Text>
      </View>
      <StyledButton secondary label="LOGIN" style={{marginTop: 10}} noborder={true} onPressIn={handleLogin} />
      
      <View style={{marginTop: 100, backgroundColor: 'transparent'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('LoginSplit')}>
          <StyledText style={[{ color: 'white', fontSize: 21, fontWeight: 'bold'}]} >not you? logout</StyledText>
        </TouchableOpacity>
      </View>
		</View>
	)
}

const styles = StyleSheet.create({
  container_padding: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 30,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
  button:{
    fontSize: 2,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 150,
    width: 150
  },
  labelstyle:
  {
    fontSize: 15,
  },
  logo: {
    padding: 30,
    color: 'white',
    backgroundColor: "transparent"
  },
  userPicture: {
    position: 'absolute',
    marginTop: 30,
    borderColor: 'white',
    borderWidth: 5
  },
  err_msg: {
    marginTop:'auto', 
    marginBottom:10,
    color: 'white',
  }
});
