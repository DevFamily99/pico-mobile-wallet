import Checkbox from 'react-native-check-box';
import React, { useState } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StyledText } from './StyledText';
import { CheckboxProps } from './Themed';

export default function StyledCheckbox(props: CheckboxProps) {

  if(props.disabled){
    return(
      <View style={styles.container}>
          <Checkbox style={styles.checkbox} disabled isChecked={props.value} onClick={props.onValueChange} />
          <Text style={styles.paragraph}>{props.label}</Text>
      </View>)
  } else {
    return (
      <View style={styles.container}>
          <Checkbox
            style={styles.checkbox}
            isChecked={props.value} 
            onClick={props.onValueChange}
            // color={props.value ? '#D83A0C' : undefined}
            />
            <TouchableOpacity onPress={(e)=>props.onValueChange?props.onValueChange(true):{}}>
            <Text  style={styles.paragraph}> {props.label}  </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
    paddingLeft: 10,
    color: '#D83A0C',
    textAlign: 'left'
  },
  checkbox: {
    borderColor: "#D83A0C", 
    borderRadius: 20,
    height: 30,
    width: 30
  }, 
});
