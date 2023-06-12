import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import SeedWord from '../../components/SeedWord';
import StyledButton from '../../components/StyledButton';
import { StyledText } from '../../components/StyledText';
import { View, Text } from '../../components/Themed'
import GlobalStyle from '../../constants/GlobalStyle';
import { LoginStackScreenProps } from '../../types';
const bip39 = require('@medardm/react-native-bip39');

export default function SeedReveal({navigation}: LoginStackScreenProps<'SeedReveal'>) {
	const [phrase, setPhrase] = useState(['', '', '', '', '', '', '', '', '', '', '', '']);

	useEffect(() => {
		generateSeeds();
	}, []);

	const generateSeeds =  async () => {
		let mnemonic = await bip39.generateMnemonic(128);
		console.log(mnemonic);
		setPhrase(mnemonic.split(' '));
	};

	return (
		<View style={GlobalStyle.container_padding}>
			<StyledText style={styles.text}>Please do not lose this Seed Phrase.
			We recommend taking a screenshot.</StyledText>
			<View >
				<View style={GlobalStyle.row_full}>
					{ phrase.slice(0,3).map((word, i)=>{
						return <SeedWord key={i} id={i+1} value={word} editable={false} />
					})}
				</View>
				<View style={GlobalStyle.row_full}>
					{ phrase.slice(3,6).map((word, i)=>{
						return <SeedWord key={i} id={i+4} value={word} editable={false} />
					})}
				</View>
				<View style={GlobalStyle.row_full}>
					{ phrase.slice(6,9).map((word, i)=>{
						return <SeedWord key={i} id={i+7} value={word} editable={false} />
					})}
				</View>
				<View style={GlobalStyle.row_full}>
					{ phrase.slice(9,12).map((word, i)=>{
						return <SeedWord key={i} id={i+10} value={word} editable={false} />
					})}
				</View>
			</View>
			<View style={[GlobalStyle.bottom_buttons, {paddingHorizontal: 27}]}>
				<View >
				</View>
				<StyledButton label="GOT IT!" onPress={()=>navigation.navigate('SeedVerify', {phrase: phrase})} />
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