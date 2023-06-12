import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-easy-icon';
import Colors from '../../constants/Colors';
import GlobalStyle from '../../constants/GlobalStyle';
import {StyledText} from '../StyledText';

export default function LoadingSpinner() {
  return (
    <View
      style={[
        GlobalStyle.container_main,
        GlobalStyle.align_center,
        GlobalStyle.justify_center,
        {backgroundColor: Colors.light.background},
      ]}>
      <Icon
        type="material-community"
        name="loading"
        color={Colors.light.text}
        size={40}
      />
      <StyledText>Loading...</StyledText>
    </View>
  );
}
