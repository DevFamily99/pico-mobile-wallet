import React from 'react';
import {View} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import {StyledText} from '../../components/StyledText';
import GlobalStyle from '../../constants/GlobalStyle';
import Colors from '../../constants/Colors';
import Icon from 'react-native-easy-icon';

interface TransferSuccessProps {
  receiver: string;
  setTransferState: (state: 'none' | 'form' | 'confirm' | 'success') => void;
  quantity: string;
  memo: string;
  note: string;
}
export default function TransferSuccess({
  receiver,
  setTransferState,
  quantity,
  memo,
  note,
}: TransferSuccessProps) {
  return (
    <View style={GlobalStyle.container_main}>
      <View style={GlobalStyle.container_padding}>
        <View style={[GlobalStyle.align_center, GlobalStyle['w-full']]}>
          <StyledText style={GlobalStyle.h1_bold}>SUCCESS!</StyledText>
          <Icon
            type="antdesign"
            name="checkcircle"
            color={Colors.light.gradient_start}
            size={150}
            style={{marginVertical: 20}}
          />
          <StyledText style={GlobalStyle.h1_bold}>
            Sent to&nbsp;
            <StyledText
              style={[
                GlobalStyle.h1_bold,
                {color: Colors.light.gradient_start},
              ]}>
              {receiver}
            </StyledText>
          </StyledText>
          <StyledText style={GlobalStyle.h1_bold}>{quantity} PICO</StyledText>
          <View style={[GlobalStyle.row_space, GlobalStyle.align_center]}>
            <StyledText style={GlobalStyle.bold}>Memo</StyledText>
            <StyledText>{memo}</StyledText>
          </View>
          <View style={[GlobalStyle.row_space, GlobalStyle.align_center]}>
            <StyledText style={GlobalStyle.bold}>Note</StyledText>
            <StyledText>{note}</StyledText>
          </View>
          <View
            style={[
              GlobalStyle.align_center,
              GlobalStyle['w-full'],
              {marginTop: 20},
            ]}>
            <StyledButton
              label="OK"
              style={{marginTop: 10}}
              onPress={() => setTransferState('none')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
