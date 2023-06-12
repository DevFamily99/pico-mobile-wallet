import React from 'react'
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';
import { StyledText } from './StyledText';
import { FAQelementProps, Text, View } from './Themed'

export default function FAQelement({question, answer}: FAQelementProps) {
	return (
		<View style={styles.mainContainer}>
			<View style={[styles.questionContainer, GlobalStyle.align_left, {flex: 1}]}>
				<View style={styles.vr} ><Text></Text></View>
				<View style={{paddingLeft: 15, alignItems: 'flex-start', alignSelf: 'flex-start'}}>
					<StyledText style={[GlobalStyle.bold, GlobalStyle.text_left]}>{question}</StyledText>
				</View>
			</View>
			<StyledText style={GlobalStyle.text_left}>{answer}</StyledText>
		</View>
	)
}

const styles = StyleSheet.create({
  vr:{
	width:3,
	minHeight: '100%',
	height: '100%',
	backgroundColor: Colors.light.gradient_start
  },
  questionContainer:{
	  flexDirection: 'row',
	  marginLeft: 15,
	  marginBottom:5
  },
  mainContainer:{
	width: '100%',
	alignItems: 'flex-start',
	paddingVertical: 20
  }
});
