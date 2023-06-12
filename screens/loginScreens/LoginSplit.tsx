import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import PicoWalletIcon from '../../components/PicoWalletIcon';
import {LoginStackScreenProps} from '../../types';
import GlobalStyle from '../../constants/GlobalStyle';
import {StyledText} from '../../components/StyledText';

export default function LoginSplit({navigation}: LoginStackScreenProps<'LoginSplit'>) {

  return (
    <View style={styles.container}>
        <PicoWalletIcon size={120} style={styles.logo} gradient/>
        <View style={GlobalStyle.bottom_buttons}>
          <StyledButton label="NEW WALLET" onPressIn={()=>navigation.navigate('Referral')}   />
          <View style={GlobalStyle.row_center}>
            <View style={GlobalStyle.hr} />
            <StyledText style={{marginHorizontal: 5, marginVertical: 15}}>OR</StyledText>
            <View style={GlobalStyle.hr} />
          </View>
          <StyledButton secondary label="RESTORE" onPress={()=>{console.log("hi")}}  onPressIn={()=>navigation.navigate('Restore')} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyle.container_main,
    ...GlobalStyle.align_center,
    paddingHorizontal: 50
  },
  logo: {
    padding: 50,
  }

});
