import React, { useState } from 'react'
import { View, Text} from '../../components/Themed'
import StyledButton from '../../components/StyledButton'
import { LoginStackScreenProps } from '../../types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import StyledInput from '../../components/StyledInput'
import { StyledText } from '../../components/StyledText'
import GlobalStyle from '../../constants/GlobalStyle'

export default function ReferralSearch({navigation}: LoginStackScreenProps<'ReferralSearch'>) {
	const [referralSelected, setReferralSelected] = useState(true);
	const [referralName, setReferralName] = useState('');
	const [errMsg, setErrMsg] = useState('');

	const handleConfirm = async () => {
		setErrMsg("");

		navigation.navigate('SeedPhrase');
	}

	return (
		<View style={styles.container}>
				<StyledText style={{height: 60}} >
				{referralSelected?
					'Here is your referral:'
				:
					'Enter the name of the person who brings you here'
				}
				</StyledText>
			<View>
				<StyledText style={[GlobalStyle.bold, GlobalStyle.highlight ]} >@PICOFRIEND</StyledText>
				<StyledInput defaultText="@picofriend" containerStyle={{marginVertical:10}} value={referralName} handleChange={text=>setReferralName(text)} />
				{referralSelected?
					<StyledText style={[GlobalStyle.small, {textAlign: 'left'}]} >Double check before confirming</StyledText> 
				: <></>}
			</View>
        	<View style={GlobalStyle.bottom_buttons}>
				<View />
				<Text style={GlobalStyle.err_msg}>{errMsg}</Text>
				<StyledButton label="CONFIRM" onPress={handleConfirm} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyle.container_main,
    ...GlobalStyle.align_center,
    paddingHorizontal: 50
  },
});
