import React, { useEffect, useState } from 'react'
import {launchImageLibrary} from 'react-native-image-picker';
import * as MediaLibrary from '@pontusab/react-native-media-library';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import { View, Text } from '../../components/Themed'
import StyledButton from '../../components/StyledButton'
import { LoginStackScreenProps } from '../../types'
import { ImageURISource, StyleSheet, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import StyledInput from '../../components/StyledInput'
import GlobalStyle from '../../constants/GlobalStyle'
import PicoWalletIcon from '../../components/PicoWalletIcon'
import StyledImage from '../../components/StyledImage'
import { StyledText } from '../../components/StyledText'
import NewAccountIcon from '../../components/icons/NewAccountIcon'
import IconButton from '../../components/IconButton'

export default function UploadPicture({navigation, route}: LoginStackScreenProps<'UploadPicture'>) {
  const [image, setImage] = useState(null);
  
  useEffect(() => {
    handleSetPermission();
  }, []);

  const handleSetPermission = async () => {
    check(PERMISSIONS.ANDROID.CAMERA)
    .then((result) => {
      if(result != RESULTS.GRANTED) {
        request(PERMISSIONS.ANDROID.CAMERA).then((result) => {
          console.log(result);
        });
      }
    })
    .catch((error) => {
      // …
    });
  
    // (async () => {
    //   await MediaLibrary.requestPermissionsAsync();
    // })();

    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
    } catch (err) {
      console.warn(err);
    }

    const readGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE); 
    const writeGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    if(!readGranted || !writeGranted) {
      console.log('Read and write permissions have not been granted');
      return;
    }
    
    // const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    // if (permission.status !== 'granted') {
    //   const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //   if (newPermission.status === 'granted') {

    //   } else {

    //   }

    // }
  }

  const handleSelectPhoto = async () => {
    let result: any = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    console.log(result);

    if (!result.didCancel) {
      let resultImage = result.assets;
      setImage(resultImage[0].uri);
    }
  }

  const handleConfirmPicture = async () => {
    if(image == null) return;
    await AsyncStorage.setItem("@MySuperStore:avatar", image);
    navigation.navigate('NewPassword', {name: route.params.name})
  }

  const handleSkip = async () => {
    await AsyncStorage.setItem("@MySuperStore:avatar", '');
    navigation.navigate('NewPassword', {name: route.params.name})
  }

	return (
		<View style={styles.container}>
      <StyledText style={{fontSize: 18}}>{image ? 'Looking good!':'Tap Upload a picture to represent yourself'}</StyledText>
 
      {image ?
        <TouchableOpacity style={[GlobalStyle.align_center,styles.container2]} onPress={handleSelectPhoto}>
          <StyledImage source = {{uri:image}} defaultText='user picture' size={200} round />
        </TouchableOpacity> :
        <TouchableOpacity onPress={handleSelectPhoto}>
          <NewAccountIcon size={180} />
        </TouchableOpacity>
      }
      <View style={GlobalStyle.bottom_buttons} >
        {image ?
          <>
            <StyledText>Tap Upload another picture</StyledText>
            <Text style={GlobalStyle.err_msg}></Text>
            <StyledButton label="CONFIRM" onPressIn={handleConfirmPicture}/>
          </> :
          <>
            <View style={GlobalStyle.row_center}>
              <View style={GlobalStyle.hr} />
                <StyledText style={{marginHorizontal: 5, marginVertical: 15,fontSize: 15}}>OR</StyledText>
              <View style={GlobalStyle.hr} />
            </View>
            <StyledButton secondary label="SKIP" onPressIn={handleSkip} />
          </>
        }
      </View>
		</View>
	)
}

// onPressIn={()=>setShowOpt(true)} 



const styles = StyleSheet.create({

  image:{
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 50,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
	fontSize: 25,
	textAlign: 'center'
  },
  text:{
	fontSize: 20,
	textAlign: 'center',
  }
});
