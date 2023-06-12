import React, {useState} from 'react';
import {View} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import {ScrollView} from 'react-native';
import {StyledText} from '../../components/StyledText';
import GlobalStyle from '../../constants/GlobalStyle';
import StyledInput from '../../components/StyledInput';
import StyledImage from '../../components/StyledImage';
import Colors from '../../constants/Colors';
import ReturnButton from '../../components/General/ReturnButton';

interface TransferFormProps {
  receiver: string;
  setTransferState: (state: 'none' | 'form' | 'confirm' | 'success') => void;
  setQuantity: (q: string) => void;
  memo: string;
  setMemo: (q: string) => void;
  note: string;
  setNote: (q: string) => void;
}

export default function TransferForm({
  receiver,
  setTransferState,
  setQuantity,
  memo,
  setMemo,
  note,
  setNote,
}: TransferFormProps) {
  const [quantityInput, setQuantityInput] = useState('');
  const [image] = useState('');

  const goToConfirm = ()=>{
    const quantityFloat = parseFloat(quantityInput.replace(/[^0-9.]/g, ''));
    if (isNaN(quantityFloat)) {
      setQuantityInput('');
      return;
    }
    const quantityString = (Math.round(quantityFloat * 100) / 100).toFixed(2);
    setQuantity(quantityString);
    setTransferState('confirm');
  };
  return (
    <ScrollView>
      <View style={GlobalStyle.container_main}>
        <ReturnButton onPress={() => setTransferState('none')} />
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
          <View style={[GlobalStyle.align_center]}>
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
            <View style={GlobalStyle.align_center}>
              <StyledText style={GlobalStyle.h1_bold}>PICO</StyledText>
              <StyledInput
                numberOfLines={1}
                containerStyle={{marginVertical: 15}}
                value={quantityInput}
                handleChange={setQuantityInput}
              />
            </View>
            <View>
              <StyledText style={GlobalStyle.align_left}>Memo</StyledText>
              <StyledInput
                numberOfLines={1}
                containerStyle={{marginVertical: 15}}
                value={memo}
                handleChange={setMemo}
              />
            </View>
            <View>
              <StyledText style={GlobalStyle.align_left}>Note</StyledText>
              <StyledInput
                numberOfLines={1}
                containerStyle={{marginVertical: 15}}
                value={note}
                handleChange={setNote}
              />
            </View>
            <View style={GlobalStyle.row_full}>
              <StyledButton
                label="SEND"
                onPress={goToConfirm}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
