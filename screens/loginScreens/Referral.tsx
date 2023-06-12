import React from 'react'
import { View} from '../../components/Themed'
import StyledButton from '../../components/StyledButton'
import { LoginStackScreenProps } from '../../types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import StyledInput from '../../components/StyledInput'
import { StyledText } from '../../components/StyledText'
import GlobalStyle from '../../constants/GlobalStyle'

export default function Referral({navigation}: LoginStackScreenProps<'Referral'>) {
	return (
		<View style={styles.container}>
			<StyledText >A Referral is xxxxxxxxxxxxxxx (add definition here for new users)</StyledText>
        	<View style={GlobalStyle.bottom_buttons}>
				<StyledButton label="ADD REFERRAL" onPress={()=>navigation.navigate('ReferralSearch')} />
				<View style={GlobalStyle.row_center}>
					<View style={GlobalStyle.hr} />
					<StyledText style={{marginHorizontal: 5, marginVertical: 15}}>OR</StyledText>
					<View style={GlobalStyle.hr} />
				</View>
				<StyledButton secondary label="SKIP" onPress={()=>navigation.navigate('SeedPhrase')} />
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
