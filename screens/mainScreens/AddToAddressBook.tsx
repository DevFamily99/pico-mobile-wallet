import React from 'react';
import StyledInput from '../../components/StyledInput';
import {StyledText} from '../../components/StyledText';
import {View, ViewProps} from '../../components/Themed';
import GlobalStyle from '../../constants/GlobalStyle';

export default function AddToAddressBook(props:ViewProps) {
  return (
    <View style={{marginTop: 10}} >
      <StyledText style={GlobalStyle.bold}>ADD TO ADDRESS BOOK</StyledText>
      <View style={{marginTop: 15, minWidth: '100%'}}>
        <View style={[GlobalStyle.align_left, {minWidth: '100%', marginBottom: 15}]} >
          <StyledText style={[GlobalStyle.align_left, GlobalStyle.bold]}>Account name</StyledText>
          <StyledInput inputType="default" defaultText="@Account1" containerStyle={{marginTop: 5}} />
        </View>
        <View style={[GlobalStyle.align_left, {minWidth: '100%', marginBottom: 25}]} >
          <StyledText style={[GlobalStyle.align_left, GlobalStyle.bold]}>Add notes</StyledText>
          <StyledInput inputType="default" defaultText="@Account1" containerStyle={{marginTop: 5}}/>
        </View>
        {props.children}
      </View>
    </View>
  );
}
