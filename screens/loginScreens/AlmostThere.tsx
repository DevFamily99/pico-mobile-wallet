import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import PicoWalletIcon from '../../components/PicoWalletIcon';
import {LoginStackScreenProps} from '../../types';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/Colors';
import {StyledText} from '../../components/StyledText';
import GlobalStyle from '../../constants/GlobalStyle';
// import Colors from '../constants/Colors';

export default function AlmostThere({
  navigation,
  route,
}: LoginStackScreenProps<'AlmostThere'>) {
  return (
    <View style={[GlobalStyle.container_padding, {paddingTop: 80}]}>
      <LinearGradient
      // Background Linear Gradient
        colors={[Colors.light.gradient_end, Colors.light.gradient_middle, Colors.light.gradient_start]}
        style={styles.background}
      />
      <View style={{backgroundColor: 'transparent'}}>
        <PicoWalletIcon color = {'white'} size={200} style={styles.logo}/>
        <View style={[{backgroundColor: 'transparent'}]}>
          <StyledText style={[GlobalStyle.h2, {color: 'white'}]} >Almost there,</StyledText>
          <StyledText style={[GlobalStyle.h1_bold, {color: 'white'}]} >{route.params.name}</StyledText>
        </View>
      </View>
      <StyledButton gray
        labelStyle={styles.labelstyle}
        style={styles.button}
        label="One more step"
        onPressIn={()=>navigation.navigate('RestorePicture', {name: route.params.name})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
  button: {
    fontSize: 2,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 150,
    width: 150,
  },
  labelstyle:
  {
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    padding: 50,
    color: 'white',
    backgroundColor: 'transparent',
  },
});
