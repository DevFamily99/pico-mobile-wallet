import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { Text, View} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import IconButton from '../../components/IconButton';
import PicoWalletIcon from '../../components/PicoWalletIcon';
import { LoginStackScreenProps, RootStackScreenProps } from '../../types';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/Colors';
import { StyledText } from '../../components/StyledText';
import GlobalStyle from '../../constants/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({navigation}: LoginStackScreenProps<'Welcome'>) {
  
  useEffect(() => {
    const getPassword = async () => {
      let key = await AsyncStorage.getItem("@MySuperStore:key");
      setTimeout(() => {
        if(key && key != '') {
          navigation.navigate('LoginScreen')
        } else {
          navigation.navigate('Welcome')
        }
      }, 3000);
    }
    getPassword();
  }, []);

	return (
    
    <View style={[GlobalStyle.container_padding, {paddingTop: 120}]}>
      <LinearGradient
        // Background Linear Gradient
        colors={[ Colors.light.gradient_end,Colors.light.gradient_middle,Colors.light.gradient_start]}
        style={styles.background}
      />
      <View style={{backgroundColor: 'transparent'}}>
        <PicoWalletIcon color = {"white"} size={200} style={styles.logo}/>
      </View>
		</View>
	)
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
  button:{
  fontSize: 2,
  borderRadius: 100,
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  height: 150,
  width: 150
},
labelstyle:
{
  fontSize: 15,
},
  logo: {
    padding: 50,
    color: 'white',
    backgroundColor: "transparent"
  }

});
