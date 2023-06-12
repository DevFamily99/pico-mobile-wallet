import React, {useState} from 'react'
import { StyleSheet } from 'react-native';
import SeedWord from '../../components/SeedWord';
import StyledButton from '../../components/StyledButton';
import StyledInput from '../../components/StyledInput';
import { StyledText } from '../../components/StyledText';
import { View, Text } from '../../components/Themed'
import GlobalStyle from '../../constants/GlobalStyle';
import { LoginStackScreenProps } from '../../types';

export default function SeedVerify({navigation, route}: LoginStackScreenProps<'SeedVerify'>) {
	const phrase = route.params.phrase;
	const [checkPhrase, setCheckPhrase] = useState(['', '', '', '', '', '', '', '', '', '', '', '']);
	const [errMsg, setErrMsg] = useState('');
	const editable = [2,4,9];

	const handleChangePassword = (id:number, text:string) => {
		let valPhrase = [...checkPhrase];
		valPhrase[id-1] = text;
		setCheckPhrase(valPhrase);
	}

	const handleClick = () => {
		setErrMsg('');
		let map:boolean = true;
		editable.map((index) => {
			if(phrase[index] != checkPhrase[index]){
				map = false;
			};
		})
		if(map) {
			navigation.navigate('SelectName', {phrase: phrase});
		}
		else
			setErrMsg("The seed phrase doesn't match. Please check again.");
	}

	return (
		<View style={GlobalStyle.container_padding}>
			<StyledText style={styles.text}>Let’s check your seed phrase backup!
				Please fill in the missing seedwords to verify your backup.</StyledText>
			<View >
				<View style={GlobalStyle.row_full}>
					{ phrase.slice(0,3).map((word, i)=>{
						const arrInd = i
						if(editable.includes(arrInd)) return <SeedWord key={i} id={arrInd+1} value={checkPhrase[arrInd]} handleChange={handleChangePassword}/>
						return <SeedWord key={i} id={arrInd+1} value={word} editable={false} hidden />
					})}
				</View>
				<View style={GlobalStyle.row_full}>
					{ phrase.slice(3,6).map((word, i)=>{
						const arrInd = i+3
						if(editable.includes(arrInd)) return <SeedWord key={i} id={arrInd+1} value={checkPhrase[arrInd]} handleChange={handleChangePassword} />
						return <SeedWord key={i} id={arrInd+1} value={word} editable={false} hidden />
					})}
				</View>
				<View style={GlobalStyle.row_full}>
					{ phrase.slice(6,9).map((word, i)=>{
						const arrInd = i+6
						if(editable.includes(arrInd)) return <SeedWord key={i} id={arrInd+1} value={checkPhrase[arrInd]} handleChange={handleChangePassword} />
						return <SeedWord key={i} id={arrInd+1} value={word} editable={false} hidden />
					})}
				</View>
				<View style={GlobalStyle.row_full}>
					{ phrase.slice(9,12).map((word, i)=>{
						const arrInd = i+9
						if(editable.includes(arrInd)) return <SeedWord key={i} id={arrInd+1} value={checkPhrase[arrInd]} handleChange={handleChangePassword} />
						return <SeedWord key={i} id={arrInd+1} value={word} editable={false} hidden />
					})}
				</View>
			</View>
			<View style={[GlobalStyle.bottom_buttons, {paddingHorizontal: 27}]}>
				<Text style={GlobalStyle.err_msg}>{errMsg}</Text>
				<StyledButton label="NEXT STEP" onPress={handleClick} />
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