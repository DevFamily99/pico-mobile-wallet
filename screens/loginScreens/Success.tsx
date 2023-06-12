import React, { useEffect, useState } from 'react'
import { StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as MediaLibrary from '@pontusab/react-native-media-library';
import { Text, View} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import IconButton from '../../components/IconButton';
import PicoWalletIcon from '../../components/PicoWalletIcon';
import { LoginStackScreenProps, RootStackScreenProps } from '../../types';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/Colors';
import { StyledText } from '../../components/StyledText';
import GlobalStyle from '../../constants/GlobalStyle';
import StyledImage from '../../components/StyledImage';
import useAuth from '../../hooks/useAuth';

const accountName :string = "@picofriend";

export default function Success({navigation, route}: LoginStackScreenProps<'Success'>) {
  const [image, setImage] = useState('');

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const avatar = await AsyncStorage.getItem("@MySuperStore:avatar");
    if(avatar) {
      setImage(avatar);
    }
  }

  const {signIn} = useAuth();
  const signInHandler = async () => {
    await AsyncStorage.setItem("@MySuperStore:name", route.params.name?route.params.name:'');
    signIn({name:route.params.name?route.params.name:''});
  };

  return (
    <View style={[GlobalStyle.container_padding, {paddingTop: 80}]}>
        <LinearGradient
        // Background Linear Gradient
        colors={[ Colors.light.gradient_end,Colors.light.gradient_middle,Colors.light.gradient_start]}
        style={styles.background}
      />
      <View style={[GlobalStyle.align_center,{backgroundColor: 'transparent', position:'relative'}]}>
        <PicoWalletIcon color = {"white"} size={200} style={styles.logo}/>
        {image ?
          <StyledImage source = {{uri:image}} defaultText='user picture' size={165} round style={styles.userPicture}/> :
          <></>
        }
      </View>
      <View style={{backgroundColor: 'transparent'}}>
        <StyledText style={[GlobalStyle.h2, { color: 'white'}]} >Welcome {route.params.name?route.params.name:''}</StyledText>
      </View>
      <StyledButton gray labelStyle={styles.labelstyle} style={styles.button} label="Go"  onPressIn={signInHandler} />
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
  },
  userPicture: {
    position: 'absolute',
    marginTop: 52,
    borderColor: 'white',
    borderWidth: 5
  }
});
