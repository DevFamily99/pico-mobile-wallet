import React, {useState} from 'react';
import {View} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import {HomeScreenProps} from '../../types';
import {RefreshControl, ScrollView, StyleSheet} from 'react-native';
import {StyledText} from '../../components/StyledText';
import PicoWalletIcon from '../../components/PicoWalletIcon';
import AccountActionItem from '../../components/AccountActionItem';
import GlobalStyle from '../../constants/GlobalStyle';
import IconButton from '../../components/IconButton';
import StyledModal from '../../components/StyledModal';
import Info from './Info';
import Deposit from './Deposit';
import PicoTreeIcon from '../../components/icons/PicoTreeIcon';
import {useUserInfo} from '../../context/UserInfoContext';

export default function Savings({navigation}: HomeScreenProps<'Savings'>) {
  const {balance, updateBalance} = useUserInfo();
  const [refreshing, setRefreshing] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const changeShowInfoModal = ()=> setShowInfoModal(!showInfoModal);
  const changeShowDepositModal = ()=> setShowDepositModal(!showDepositModal);
  const onRefresh = ()=> {
    setRefreshing(true);
    updateBalance().finally(()=>setRefreshing(false));
  };

  return (
    <View style={GlobalStyle.container_main}>
      <ScrollView
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        }>
        <StyledModal visible={showInfoModal} changeShowModal={changeShowInfoModal} >
          <Info />
        </StyledModal>
        <StyledModal visible={showDepositModal} changeShowModal={changeShowDepositModal} >
          <Deposit />
        </StyledModal>
        <View style={styles.topInfoContainer}>
          <View style={GlobalStyle.hr} />
          <View style={GlobalStyle.row_justify}>
            <StyledText style={GlobalStyle.h2}>NET WORTH</StyledText>
            <IconButton icon="info" size={30} onPress={changeShowInfoModal}/>
          </View>
          <View style={GlobalStyle.hr} />
        </View>
        <View style={GlobalStyle.align_center} onTouchStart={updateBalance}>
          <StyledText style={GlobalStyle.h1_bold}>
            {balance} PICO
          </StyledText>
        </View>

        <View style={GlobalStyle.container_padding}>
          <View style={styles.buttonsContainer}>
            <View style={GlobalStyle.align_center}>
              <StyledButton label="DEPOSIT" secondary onPress={changeShowDepositModal} />                 
            </View>
            <View style={GlobalStyle.align_center}>
              <StyledButton label="WITHDRAW" secondary onPress={changeShowDepositModal} />
            </View>
          </View>

          <View style={[GlobalStyle.row_full, {marginTop: 20}]}>
            <View>
              <View style={[GlobalStyle.align_left, {marginBottom: 10}]}>
                <StyledText style={GlobalStyle.bold}>Estimated earnings</StyledText>
                <View style={GlobalStyle.row_space} >
                  <PicoWalletIcon />
                  <StyledText >10/hr</StyledText>
                </View>
                <StyledText style={[GlobalStyle.bold, {color: '#06A49A'}]}>+1/hr</StyledText>
              </View>

              <View style={GlobalStyle.align_left}>
                <StyledText style={GlobalStyle.bold}>Total locked in savings</StyledText>
                <View style={GlobalStyle.row_center}>
                  <PicoWalletIcon />
                  <StyledText >123,456,789</StyledText>
                </View>
              </View>
            </View>
            <PicoTreeIcon size={140}/>
          </View>

          <View style={styles.scrollContainer}>
            <ScrollView >
              <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
              <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
              <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
              <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
              <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
              <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
              <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
              <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
              <AccountActionItem action="vote" username={'user10'} balance={'123456789'} />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
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
    height: 200,
    marginTop: 10,
    paddingTop: 10,
    marginBottom: 10,
  },
});
