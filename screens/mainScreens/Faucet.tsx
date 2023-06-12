import React, {useEffect, useState} from 'react';
import {View} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import CircleGraph from '../../components/CircleGraph';
import {HomeScreenProps} from '../../types';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BalanceInfo from '../../components/BalanceInfo';
import {StyledText} from '../../components/StyledText';
import GlobalStyle from '../../constants/GlobalStyle';
import Colors from '../../constants/Colors';
import StyledImage from '../../components/StyledImage';
import useFaucet from '../../hooks/useFaucet';

export default function Faucet({navigation}: HomeScreenProps<'Faucet'>) {
  const [image, setImage] = useState('');
  useEffect(() => {
    const getLocalStorage = async () => {
      const avatar = await AsyncStorage.getItem('@MySuperStore:avatar');
      if (avatar) {
        setImage(avatar);
      }
    };

    getLocalStorage();
  }, []);

  return (
    <View style={[GlobalStyle.container_main, {paddingTop: 50}]}>
      <View style={styles.topInfoContainer}>
        <View style={styles.leftContainer}>
          <StyledText style={GlobalStyle.h2}>Claim</StyledText>
          <StyledText style={GlobalStyle.h2_bold} >123,456</StyledText>
        </View>
        <View style={GlobalStyle.align_center}>
          <StyledImage source = {image ? {uri: image} : {}} defaultText='user picture' size={80} round />
        </View>
        <View style={styles.rightContainer}>
          <StyledText style={GlobalStyle.h2}>Ref%</StyledText>
          <StyledText style={GlobalStyle.h2_bold}>123,456</StyledText>
        </View>
      </View>
      <CircleGraph thickness={4} percentage={40} quantity={'123,456,789,012'} />
      <View style={GlobalStyle.container_padding}>
        <View >
          <BalanceInfo label='Claimers:' balance='123,456,789'/>
          <BalanceInfo label='PICO value:' balance='$123,456,789'/>
        </View>
        <StyledButton 
    label="Claim"
    style={styles.orangeButton}
    onPress={() => {/* Add your button action here */}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topInfoContainer: {
    ...GlobalStyle.row_space,
    height: 80,
    width: '100%',
  },
  leftContainer: {
    ...GlobalStyle.align_center,
    borderBottomColor: Colors.light.gradient_start,
    borderBottomWidth: 3,
    paddingLeft: 20,
    paddingRight: 5,
    alignItems: 'flex-end',
  },
  rightContainer: {
    ...GlobalStyle.align_center,
    borderBottomColor: Colors.light.gradient_start,
    borderBottomWidth: 3,
    paddingLeft: 5,
    paddingRight: 20,
    alignItems: 'flex-start',
  },
  orangeButton: {
    backgroundColor: 'orange',
    width: '70%',
  },
});
