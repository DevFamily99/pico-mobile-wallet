import React, {useState} from 'react';
import {View} from '../../components/Themed';
import {MainTabScreenProps} from '../../types';
import {ScrollView, StyleSheet} from 'react-native';
import {StyledText} from '../../components/StyledText';
import PicoWalletIcon from '../../components/PicoWalletIcon';
import AccountActionItem from '../../components/AccountActionItem';
import GlobalStyle from '../../constants/GlobalStyle';
import StyledModal from '../../components/StyledModal';
import Info from './Info';
import Deposit from './Deposit';
import StyledInput from '../../components/StyledInput';
import Icon from '../../components/icons/Icon';

export default function Governance({navigation}: MainTabScreenProps<'Governance'>) {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const changeShowInfoModal = ()=> setShowInfoModal(!showInfoModal);
  const changeShowDepositModal = ()=> setShowDepositModal(!showDepositModal);

  return (
    <View style={GlobalStyle.container_main}>
      <StyledModal visible={showInfoModal} changeShowModal={changeShowInfoModal} >
        <Info />
      </StyledModal>
      <StyledModal visible={showDepositModal} changeShowModal={changeShowDepositModal} >
        <Deposit />
      </StyledModal>
      <View style={styles.topInfoContainer}>
        <View style={GlobalStyle.hr} />
        <View style={GlobalStyle.row_justify}>
          <StyledText style={GlobalStyle.h2}>MY TOTAL WEIGHT</StyledText>
        </View>
        <View style={GlobalStyle.hr} />
      </View>
      <View style={GlobalStyle.row_justify}>
        <PicoWalletIcon />
        <StyledText style={[GlobalStyle.h1_bold, {marginLeft: 10}]}>123,456,789,012</StyledText>
      </View>

      <View style={GlobalStyle.container_padding}>
        <View style={[GlobalStyle.row_full]}>
          <View style={{width: '100%'}}>
            <View style={[GlobalStyle.row_full, {marginBottom: 15}]}>
              <View style={GlobalStyle.align_left }>
                <StyledText style={GlobalStyle.bold}>MY WEIGHT</StyledText>
                <View style={GlobalStyle.row_space} >
                  <PicoWalletIcon />
                  <StyledText >123,456,789</StyledText>
                </View>
              </View>
              <Icon name="print" size={50} style={GlobalStyle.highlight} />
            </View>

            <View style={[GlobalStyle.row_full, {marginBottom: 15}]}>
              <View style={GlobalStyle.align_left}>
                <StyledText style={GlobalStyle.bold}>DELEGATED</StyledText>
                <View style={GlobalStyle.row_center}>
                  <PicoWalletIcon />
                  <StyledText >123,456,789</StyledText>
                </View>
              </View>
              <Icon name="print" size={50} style={GlobalStyle.highlight} />
            </View>
          </View>
        </View>
        <View>
          <StyledText style={[GlobalStyle.text_left, GlobalStyle.bold]}>MY VOTES</StyledText>
          <StyledInput inputType="search" defaultText="Search Recipient" containerStyle={{marginVertical: 5}} />
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView >
            <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
            <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
            <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
            <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
            <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
            <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    ...GlobalStyle.row_evenly,
    width: '100%',
  },
  topInfoContainer: {
    ...GlobalStyle.row_center,
    height: 40,
    width: '100%',
  },
  scrollContainer: {
    width: '100%',
    marginHorizontal: 0,
    paddingHorizontal: 0,
    height: '60%',
    marginTop: 5,
    paddingTop: 10,
    marginBottom: 10,
  },
});
