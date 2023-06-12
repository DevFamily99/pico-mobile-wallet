import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import {LoginStackScreenProps} from '../../types';
import GlobalStyle from '../../constants/GlobalStyle';
import {StyledText} from '../../components/StyledText';

export default function Restore({navigation}: LoginStackScreenProps<'Restore'>) {
  return (
    <View style={styles.container}>
      <View style={[{paddingTop: 150}]}>
        <Text style={{textAlign: 'center'}}>
          Select where you want to restore your wallet from:
        </Text>
      </View>
      <View style={GlobalStyle.bottom_buttons}>
        <StyledButton
          label="RESTORING BY SEED"
          onPressIn={()=>navigation.navigate('RestoreSeedPhrase')}
        />
        <View style={GlobalStyle.row_center}>
          <View style={GlobalStyle.hr} />
          <StyledText style={{marginHorizontal: 5, marginVertical: 15}}>OR</StyledText>
          <View style={GlobalStyle.hr} />
        </View>
        <StyledButton
          secondary
          label="RESTORING BY QR"
          onPressIn={()=>navigation.navigate('RestoreQR')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...GlobalStyle.container_main,
    ...GlobalStyle.align_center,
    paddingHorizontal: 50,
  },
  logo: {
    padding: 50,
  },
});
