import React from 'react';
import {View, Text} from 'react-native';
import StyledButton from '../../components/StyledButton';
import GlobalStyle from '../../constants/GlobalStyle';
import {useUserInfo} from '../../context/UserInfoContext';
import useAuth from '../../hooks/useAuth';

export default function Exchange() {
  const {name} = useUserInfo();
  const {signOut} = useAuth();
  return (
    <View style={[
      GlobalStyle.container_padding,
      {alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'},
    ]}>
      <Text style={GlobalStyle.h1_bold}>Coming Soon {name}</Text>
      <View style={[GlobalStyle.hr, {width: '80%'}]}/>
      <StyledButton
        label="signout"
        onPress={() => signOut()}
        style={{marginTop: 10}}
      />
    </View>
  );
}
