import React, {useState} from 'react';
import {View} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import {StyledText} from '../../components/StyledText';
import GlobalStyle from '../../constants/GlobalStyle';
import StyledImage from '../../components/StyledImage';
import Colors from '../../constants/Colors';
import ReturnButton from '../../components/General/ReturnButton';

interface TransferConfirmProps {
  receiver: string;
  setTransferState: (state: 'none' | 'form' | 'confirm' | 'success') => void;
  quantity: string;
  memo: string;
  note: string;
  transfer: () => void;
}
export default function TransferConfirm({
  receiver,
  setTransferState,
  transfer,
  quantity,
  memo,
  note,
}: TransferConfirmProps) {
  const [image] = useState('');

  return (
    <View style={GlobalStyle.container_main}>
      <ReturnButton onPress={() => setTransferState('form')} />
      <View style={GlobalStyle.pictureContainer}>
        <View style={GlobalStyle.hr} />
        <View style={GlobalStyle.row_justify}>
          <StyledImage
            source={image ? {uri: image} : {}}
            defaultText="user picture"
            size={80}
            round
          />
        </View>
        <View style={GlobalStyle.hr} />
      </View>
      <View style={GlobalStyle.container_padding}>
        <View style={[GlobalStyle.align_center, GlobalStyle['w-full']]}>
          <StyledText style={GlobalStyle.h1_bold}>
            Sending to&nbsp;
            <StyledText
              style={[
                GlobalStyle.h1_bold,
                {color: Colors.light.gradient_start},
              ]}>
              {receiver}
            </StyledText>
          </StyledText>
          <View style={[GlobalStyle.align_center, GlobalStyle['w-full']]}>
            <StyledText style={GlobalStyle.h1_bold}>{`${quantity} PICO`}</StyledText>
          </View>
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
            <StyledButton label="CONFIRM" onPress={transfer} />
            <StyledButton
              label="CANCEL"
              style={{marginTop: 10}}
              onPress={() => setTransferState('none')}
              secondary
            />
          </View>
        </View>
      </View>
    </View>
  );
}
