import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {StyledText} from './StyledText';
import {SeedWordProps} from './Themed';

export default function SeedWord(props: SeedWordProps) {
  if (props.covered) {
    return(
      <View style={styles.inputWordCovered}>
      </View>
    )
  }
  return (
    <View style={styles.inputWordView}>
      <LinearGradient colors={[Colors.light.gradient_start, Colors.light.gradient_middle]} style={styles.idContainer}>
        <StyledText style={{color: 'white', fontSize: 15}}>{props.id}</StyledText>
      </LinearGradient>
      <TextInput style = {[styles.inputWord, props.style ]} 
        maxLength={8}
        value={props.value}
        placeholder={props.placeholder} 
        editable={props.editable!=null?props.editable:true} 
        secureTextEntry={props.hidden}
        onChangeText={text=>props.handleChange?props.handleChange(props.id?props.id:-1, text?text:''):undefined}/> 
    </View>
  )
}

const styles = StyleSheet.create({
  inputWordCovered:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCEAE1',
    color: "black",
    width: 90,
    height: 50,
    margin: 5,
    borderRadius: 5,
  },
  inputWordView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: Colors.light.gradient_start,
    borderWidth: 2,
    color: "black",
    width: 100,
    height: 50,
    margin: 5,
    borderRadius: 5,
  },
  inputWord:{
    color:'black',
    fontSize: 15,
    padding: 2,
    width: 60,
  },
  idContainer:{
    backgroundColor: 'orange',
    justifyContent: 'center',
    width: 25,
    height: '100%',
    fontSize: 15,
    marginRight: 5	
  }
});
