import React, {useEffect, useState} from 'react';
import {View, Text} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import {LoginStackScreenProps} from '../../types';
import {StyleSheet} from 'react-native';
import StyledInput from '../../components/StyledInput';
import {StyledText} from '../../components/StyledText';
import GlobalStyle from '../../constants/GlobalStyle';
import Colors from '../../constants/Colors';
import Spinner from 'react-native-spinkit';
import useCreateAccount from '../../hooks/useCreateAccount';

export default function SelectName({
  navigation, route}: LoginStackScreenProps<'SelectName'>) {
  const {createAccount} = useCreateAccount();
  const [showError, setShowError] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [username, setUserName] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setShowError(false);
    if (username.length == 0 || username.length > 12) {
      setShowButton(false);
      return;
    }
    const reg = new RegExp(/^[1-5a-z.]+$/);
    const match = reg.test(username);
    setShowButton(match);
  }, [username]);

  const handleChangeName = (text:string) => {
    setUserName(text);
  };

  const handleConfirm = async () => {
    setShowError(false);
    setErrMsg('');
    setLoading(true);
    createAccount(
        route.params.phrase,
        username,
    ).then((res)=> {
      setLoading(false);
      navigation.navigate('UploadPicture', {name: username});
    }).catch((err)=>{
      console.log(err);
      setLoading(false);
      if (err.message.includes('name is already taken')) {
        setShowError(true);
      } else {
        setErrMsg('Failed to create new account. Please try again.');
      }
    });
  };

  return (
    <View style={[GlobalStyle.container_padding, {paddingHorizontal: 27}]}>
      <StyledText style={{fontSize: 18}}>Let's get to know each other</StyledText>
      <View>
        <StyledText style={[GlobalStyle.bold, GlobalStyle.highlight ]} >USERNAME</StyledText>
        <StyledInput defaultText="" containerStyle={{marginVertical:10}} value={username} handleChange={handleChangeName}/>
        <StyledText style={[GlobalStyle.small, {textAlign: 'left'}]} >Username must be between 1-12 characters, and must contain only a-z or 1-5. symbols</StyledText>
      </View>
      <Spinner isVisible={loading} size={37} type="Wave" color='#D83A0C'/>
      <View style={[GlobalStyle.bottom_buttons]}>
        {showError?
          <View style={[styles.errorContainer, GlobalStyle.align_left]}>
            <View style={styles.vr} />
            <View style={{paddingLeft: 15, alignItems: 'flex-start', alignSelf: 'center'}}>
              <StyledText style={[GlobalStyle.bold, GlobalStyle.highlight ]}>OOPS!</StyledText>
              <StyledText>The name is already taken</StyledText>
              <StyledText>Try another one</StyledText>
            </View>
          </View>
        :
          showButton?
            <>
              <Text style={GlobalStyle.err_msg}>{errMsg}</Text>
              <StyledButton label="CONFIRM" onPress={handleConfirm} />
            </>
          :
            <View />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  vr:{
  height: 100,
  width:3,
  backgroundColor: Colors.light.gradient_start
  },
  errorContainer:{
    flexDirection: 'row'
  }
});