import React from 'react';
import {StyleSheet} from 'react-native';
import StyledButton from '../../components/StyledButton';
import StyledInput from '../../components/StyledInput';
import {StyledText} from '../../components/StyledText';
import {View} from '../../components/Themed';
import Colors from '../../constants/Colors';
import GlobalStyle from '../../constants/GlobalStyle';
import Icon from '../../components/icons/Icon';

export default function Deposit() {
  return (
    <View style={{marginTop: 10}} >
      <StyledText style={GlobalStyle.h2_bold}>DEPOSIT</StyledText>
      <View style={{marginTop: 15, minWidth: '100%'}}>
        <View style={[GlobalStyle.align_left, {minWidth: '100%'}]} >
          <StyledText style={[GlobalStyle.align_left, GlobalStyle.bold]}>TOTAL SAVINGS</StyledText>
          <StyledText style={GlobalStyle.align_left}>{'123,456,789'}</StyledText>
          <StyledText style={[GlobalStyle.bold,
            {color: Colors.light.gradient_start, textAlign: 'right', width: '100%'}]}>
            {'- 123,456,789'}
          </StyledText>
        </View>

        <View style={[GlobalStyle.align_left, {minWidth: '100%'}]} >
          <StyledText style={[GlobalStyle.align_left, GlobalStyle.bold]}>WALLET</StyledText>
          <StyledText style={GlobalStyle.align_left}>{'123,456,789'}</StyledText>
          <StyledText style={[GlobalStyle.bold, {color: Colors.light.green, textAlign: 'right', width: '100%'}]}>
            {'+ 123,456,789'}
          </StyledText>
        </View>
        <View>
          <View style={styles.pico_icon}>
            <Icon name='pico' size={20} color={Colors.light.text}/>
          </View>
          <StyledInput defaultText="Add an amount" inputType="balance" containerStyle={{marginVertical: 15}} />
        </View>
        <StyledButton label="CONFIRM" gray disabled />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pico_icon: {
    position: 'absolute',
    top: '40%',
    left: 10,
    zIndex: 1,
  },
});
