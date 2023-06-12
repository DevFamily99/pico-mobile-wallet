import React, { useState } from 'react'
import { View, Text } from '../../components/Themed'
import StyledButton from '../../components/StyledButton'
import { LoginStackScreenProps } from '../../types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import StyledInput from '../../components/StyledInput'
import PicoWalletIcon from '../../components/PicoWalletIcon'
import StyledCheckbox from '../../components/StyledCheckbox'
import KeyIcon from '../../components/icons/KeyIcon'
import GlobalStyle from '../../constants/GlobalStyle'
import { StyledText } from '../../components/StyledText'

export default function NewPassword({navigation, route}: LoginStackScreenProps<'NewPassword'>) {
  const [showOpt, setShowOpt] = useState(false);  
  const [state, setpasswordState] = useState(false); 
  const [state2, setpasswordState2] = useState(false); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [saved, setSaved] = useState(false); 
  const [errMsg, setErrMsg] = useState('');

  const handleSetPassword = async () => {
    setErrMsg('')
    if(password != confirmPassword) {
      setErrMsg("The password doesn't match.");
      return;
    }

    if(password.length < 8) {
      setErrMsg("The legth of password is over 8 characters.");
      return;
    }

    if(!saved) {
      setErrMsg('Please check the confirm.');
      return;
    }

    await AsyncStorage.setItem("@MySuperStore:key", password);
    navigation.navigate('SaveBackup', {name: route.params.name})
  }

 if(showOpt)
 {
  return (
    <View style={styles.container}>  
         <Text style={[styles.text]}>NEW PASSWORD</Text>
         <StyledInput defaultText="password" inputType = "password" passwordState={state}  onPress={()=>setpasswordState(!state)} value={password} handleChange={text => setPassword(text)}/>
        
         <Text style={styles.text}>CONFIRM PASSWORD</Text>
         <StyledInput defaultText="password" inputType = "password" passwordState={state2}  onPress={()=>setpasswordState2(!state2)} value={confirmPassword} handleChange={text => setConfirmPassword(text)}/>
         <StyledCheckbox label={'I understand forgotten passwords cannot be recovered.'} value={saved} onValueChange={()=>setSaved(!saved)} />
          
         {(password && confirmPassword) ?
						<View style={[GlobalStyle.bottom_buttons, {paddingHorizontal: 40,paddingVertical: 40}]}>
              <Text style={GlobalStyle.err_msg}>{errMsg}</Text>
							<StyledButton label="SET PASSWORD"    onPress={handleSetPassword}    />
						</View>
					:
						<View />
				}
          
 </View>




)
}
return(

<View style={styles.container}>
      <StyledText style={{fontSize: 18}}>A password is the best way to keep your Wallet safer.</StyledText>
      <KeyIcon size={120} style={styles.logo} gradient/>
      <StyledButton style={{marginTop: 'auto'}} label="SET PASSWORD" onPressIn={()=>setShowOpt(true)}   />
		</View>

)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingVertical: 90,
  },
  containerPass: {
    
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    paddingVertical:  0,
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
  },
  checkBox:{
    
    paddingHorizontal: 20,
    paddingVertical:10,
    }

});
