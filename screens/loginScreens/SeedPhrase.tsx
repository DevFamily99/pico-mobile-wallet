import React from 'react'
import { StyleSheet } from 'react-native';
import SeedWord from '../../components/SeedWord';
import StyledButton from '../../components/StyledButton';
import StyledInput from '../../components/StyledInput';
import { StyledText } from '../../components/StyledText';
import { View, Text } from '../../components/Themed'
import Colors from '../../constants/Colors';
import GlobalStyle from '../../constants/GlobalStyle';
import { LoginStackScreenProps } from '../../types';

export default function SeedPhrase({navigation}: LoginStackScreenProps<'SeedPhrase'>) {
	const phrase = ['word1','word2','word3','word4','word5','word6','word7','word8','word9','word10','word11','word12'];

	return (
		<View style={GlobalStyle.container_padding}>
			<StyledText style={styles.text}>This is your secret Seed Phrase. It makes it easy to restore and backup your account.</StyledText>
			<View >
				<View style={GlobalStyle.row_space}>
					{ phrase.slice(0,3).map((word, i)=>{
						return <SeedWord key={i} covered />
					})}
				</View>
				<View style={GlobalStyle.row_space}>
					{ phrase.slice(3,6).map((word, i)=>{
						return <SeedWord key={i} covered/>
					})}
				</View>
				<View style={GlobalStyle.row_space}>
					{ phrase.slice(6,9).map((word, i)=>{
						return <SeedWord key={i} covered/>
					})}
				</View>
				<View style={GlobalStyle.row_space}>
					{ phrase.slice(9,12).map((word, i)=>{
						return <SeedWord key={i} covered/>
					})}
				</View>
			</View>
			<View style={[GlobalStyle.bottom_buttons, {paddingHorizontal: 27}]}>
				<View >
					<Text style={[GlobalStyle.bold, {color: Colors.light.gradient_start}]}>WARNING:</Text>
					<Text style={[GlobalStyle.align_left, {fontSize: 17}]}>
					Do not give access or share your Seed Phrase. Anybody with your Seed Phrase can access your PICO.
					</Text>
				</View>
				<StyledButton label="REVEAL" onPress={()=>navigation.navigate('SeedReveal')} />
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
  text:{
	  fontSize: 17,
	  paddingHorizontal: 27
  }
});