import React, { useState } from 'react'
import { StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import IconButton from '../../components/IconButton';
import PicoWalletIcon from '../../components/PicoWalletIcon'; 
import StyledCheckbox from '../../components/StyledCheckbox'
import { LoginStackScreenProps, RootStackScreenProps } from '../../types';
import StyledInput from '../../components/StyledInput';
import { StyledText } from '../../components/StyledText'
import GlobalStyle from '../../constants/GlobalStyle';

export default function RestoreNewPassword({navigation, route}: LoginStackScreenProps<'RestoreNewPassword'>) {
  const [saved, setSaved] = useState(false); 
  const [state, setpasswordState] = useState(false); 
  const [state2, setpasswordState2] = useState(false); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSuccee = async () => {
    setErrMsg('')
    if(password.length < 8 || password != confirmPassword) {
      setErrMsg('The password is incorrect.')
      return;
    }

    await AsyncStorage.setItem("@MySuperStore:key", password);
    navigation.navigate('Success', {name: route.params.name});
  }

  return (
		<View style={styles.container}>
			{/*<Text style={styles.title}>Welcome back {accountName}</Text>*/}
      
			<Text style={[styles.text]}>YOUR PASSWORD</Text>
			<StyledInput
        defaultText="password"
        inputType = "password"
        passwordState={state}
        value={password}
        onPress={()=>setpasswordState(!state)}
        handleChange={(text)=>setPassword(text)}
      />
			<Text style={styles.text}>CONFIRM PASSWORD</Text>
			<StyledInput
        defaultText="password"
        inputType = "password"
        passwordState={state2}
        value={confirmPassword}
        onPress={()=>setpasswordState2(!state2)}
        handleChange={(text) => setConfirmPassword(text)}
      />
      <StyledText style={{fontSize: 18}}>(min 8 characters)</StyledText>
      <View style={[GlobalStyle.bottom_buttons, {paddingHorizontal: 40,paddingVertical: 40}]}>
        <Text style={GlobalStyle.err_msg}>{errMsg}</Text>
        <StyledButton label="SET PASSWORD"    onPress={handleSuccee} />
      </View>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 50,
    paddingVertical: 90,
  },
  buttonsContainer:{
    justifyContent: 'space-between',
    width: '100%',
    height: 160
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: '#D83A0C',
  },
  logo: {
    padding: 50,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#D83A0C',
    }

});
