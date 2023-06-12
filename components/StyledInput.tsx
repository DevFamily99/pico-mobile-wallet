import {FontAwesome} from 'react-native-vector-icons';
import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {InputProps} from '../components/Themed';
import IconButton from './IconButton';

export default function StyledInput(props: InputProps) {
  switch (props.inputType) {
    case 'default':
      return (
        <View style={[styles.inputSection, props.containerStyle]}>
          <TextInput
            multiline={props.multiline}
            numberOfLines={props.numberOfLines}
            style={[props.style, styles.input]}
            placeholder={props.defaultText}
          />
        </View>
      );
    case "search":
      return (
        <View style={[styles.inputSection, props.containerStyle]}>
          {/* <FontAwesome name={"search"} size={15} style={styles.inputIcon} /> */}
          <TextInput
            multiline = {props.multiline}
            numberOfLines = {props.numberOfLines}
            style = {[props.style, styles.input]}
            placeholder= {props.defaultText}
            value={props.value}
            onChangeText={text => props.handleChange?props.handleChange(text):null}
          /> 
        </View>
      )
    case "password":
      const icon = !props.passwordState ? 'eye-off' : 'eye'; 
 
      return (
        <View style={[props.noborder ? styles.inputSection_no_border:styles.inputSection, props.containerStyle]}>
          <TextInput
            multiline = {props.multiline}
            numberOfLines = {props.numberOfLines}
            style = {[props.style, styles.input]}
            placeholder={props.defaultText}
            secureTextEntry={!props.passwordState}
            value={props.value}
            onChangeText={text => props.handleChange?props.handleChange(text):null}
          /> 
          <IconButton icon={icon}  size = {30} style={styles.inputIcon}  onPress={(e)=>props.onPress?props.onPress(!props.passwordState):null}  />
        </View>
      )
    case "balance":
      return (
        <View style={[styles.inputSection, props.containerStyle]}>
          { <FontAwesome name={"dollar"} size={15} style={styles.inputIcon} /> }
          {/* <PicoWalletIcon  /> */}
          <TextInput multiline = {props.multiline} numberOfLines = {props.numberOfLines} style = {[props.style, styles.input]} placeholder={props.defaultText}/> 
        </View>
      )
    case "word":
      return (
        <View style={styles.inputWordView}>
          <TextInput  style = {[props.style, styles.inputWord]} placeholder={props.defaultText} editable={props.editable!=null?props.editable:true}/> 
        </View>
      )
    default: 
      return (
        <View style={[styles.inputSection, props.containerStyle]}>
          <TextInput 
            multiline = {props.multiline}
            numberOfLines = {props.numberOfLines}
            style = {[props.style, styles.input]}
            placeholder= {props.defaultText}
            value={props.value}
            onChangeText={text => props.handleChange?props.handleChange(text):null}/> 
        </View>
      )
  }
  
}

const styles = StyleSheet.create({
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1.5,
    borderColor: "#D83A0C",
    color: "white",
    borderRadius: 10,
    width: '100%',
  },
  inputSection_no_border: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,0.5)',
      color: "white",
      borderRadius: 10,
      width: '100%'
    },
    inputIcon: 
    {
        padding: 5,
        color: "white",
    },
  input: {
    textAlignVertical: 'top',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "#262524",
    fontSize: 20,
  },
    inputWordView:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FCEAE1',
      color: "black",
      width: 90,
      height: 50,
      margin: 5,
      borderRadius: 5
    },
    inputWord:{
      color:'black',
      fontSize: 15,
      padding: 2,
    }

});