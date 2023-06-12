'use strict';
import { CommonActions, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Button, Text, View,StyleSheet} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import * as MediaLibrary from '@pontusab/react-native-media-library';
import App from "../App";
import Colors from "../constants/Colors";
import GlobalStyle from "../constants/GlobalStyle";
import { MainTabScreenProps } from "../types";
// import { MainTabScreenProps } from '../../types'
import IconButton from "./IconButton";
import StyledButton from "./StyledButton";
import StyledImage from "./StyledImage";




export default function TopDrawer({navigation}:MainTabScreenProps<'Home'>) {
 const [isModalVisible, setModalVisible] = useState(false);
 const [image, setImage] = useState('');

 useEffect(() => {
  const getLocalStorage = async() => {
    const avatar = await AsyncStorage.getItem("@MySuperStore:avatar");
    if(avatar)
      setImage(avatar);
  } 

  getLocalStorage();
}, []);

  const phrase = ['Whitepaper','Governance','Roadmap','FAQ','Website','discord','telegram','facebook','twitter'];
  // const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const close = () => {
    setModalVisible(!isModalVisible);
  };

  
  var touchY = 0;
  var toucehr = 0;
  return (
    
      
      <View
      style={[{ position: 'absolute', top: 50, left: 150,  zIndex:5 , width:100,height:100,backgroundColor:"transparent"}]}
    >
{/* AAAA I DON"T KNOW WHY NOTHING ELSE WORKS */}

      
      <Modal isVisible={isModalVisible}
      animationIn="slideInDown"
      animationOut="slideOutUp"
        onSwipeComplete={close}
        useNativeDriverForBackdrop
        swipeDirection={['up']}
        style={styles.modal}
        onBackdropPress={close}
      >
        <View style={styles.modalView}>


            <View style={GlobalStyle.row_center}>
                      <View style={styles.topperRow}>
                      <StyledImage source = {image ? {uri:image} : {}} defaultText='user picture' size={40} round />
                      {/* <Text style={{justifyContent: 'flex-start'}}>Hi nickyCage!</Text> */}
                      </View>
                      <View style={styles.topperRow}>
                        <IconButton  style={{  }} background = {false} icon={"cog"} fontAwesome = {true}  size={40}  />
                      </View>
              </View>


        <View style={styles.buttonContainer}>
          <View style={GlobalStyle.row_center}>
            { phrase.slice(0,3).map((word, i)=>{
              return(
                <View key={word}>
                  <View style={styles.topRowStyle}>
                    <IconButton  style={{padding:10  }} background = {true} icon={"circle"} fontAwesome = {true} color ={"transparent"}
                    onPress={() => {setModalVisible(false);navigation.navigate(word as any); ;} }/>
                    <Text>{word}</Text>
                  </View>
                </View>
                ) 
            })}
          </View>
          <View style={GlobalStyle.row_center}>
            { phrase.slice(3,5).map((word, i)=>{
              return(
                <View key={word}>
                  <View style={styles.topRowStyle}>
                    <IconButton  style={{ padding:10 }} background = {true} icon={"circle"} fontAwesome = {true} color ={"transparent"} 
                    onPress={() => navigation.navigate(word as any)}/>
                    <Text>{word}</Text>
                  </View>
                </View>
                ) 
            })}
          </View>
          <View style={GlobalStyle.row_center}>
            { phrase.slice(5,9).map((word, i)=>{
              return(
                <View key={word}>
                  <View style={styles.topRowStyle}>
                    <IconButton  style={{ padding:10  }} background = {true} icon={word as any} fontAwesome = {true} size = {30}
                    onPress={() => navigation.navigate(word as any)}/>
                    {/* <Text>{word}</Text> */}
                  </View>
                </View>
                ) 
            })}
          </View>
        </View>
       
          
        </View>
          {/* <Text>{toucehr}</Text> */}
      </Modal>
      <IconButton style={[{ backgroundColor:"transparent"}]} color = {"transparent"} fontAwesome={true} icon="bars" onPress={()=>setModalVisible(!isModalVisible)} size = {100} />
      </View>

  );
}


const styles = StyleSheet.create({
  modalView: {
  //
   backgroundColor: 'white',
    height: 400,
     borderBottomStartRadius: 20,
     borderBottomEndRadius: 20,
     elevation: 5,

  },
  buttonContainer:
  {
    paddingTop: 40,

  },
  topperRow:
  {
    padding: 10,
    paddingHorizontal: 140 ,

  },
topRowStyle:
{
  // width:"100%",
  //  height:150, 
  paddingVertical: 10,
     paddingHorizontal: 10 ,
     marginHorizontal: 0 ,
     justifyContent: 'center',
  alignItems: 'center',
},

  modal: {
    justifyContent: 'flex-start',
    margin: 0,
  },
});
