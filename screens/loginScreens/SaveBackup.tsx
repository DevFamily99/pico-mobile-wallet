import React from 'react'
import { View, Text } from '../../components/Themed'
import StyledButton from '../../components/StyledButton'
import { LoginStackScreenProps } from '../../types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import StyledInput from '../../components/StyledInput'
import StyledCheckbox from '../../components/StyledCheckbox'
import { StyledText } from '../../components/StyledText'
import GlobalStyle from '../../constants/GlobalStyle'
import ContactsIcon from '../../components/icons/ContactsIcon'

export default function SaveBackup({navigation, route}: LoginStackScreenProps<'SaveBackup'>) {
	return (
		<View style={styles.container}>
			<StyledText style={{}}>Save a backup of your Wallet, protected by your Password.</StyledText>
			<ContactsIcon size={180} />
			<View style={GlobalStyle.bottom_buttons}>
				<StyledButton label="SAVE BACKUP" onPress={()=>navigation.navigate('SaveBackupCloud', {name: route.params.name})} />
				<View style={GlobalStyle.row_center}>
					<View style={GlobalStyle.hr} />
					<StyledText style={{marginHorizontal: 5, marginVertical: 15}}>OR</StyledText>
					<View style={GlobalStyle.hr} />
				</View>
				<StyledButton secondary label="SKIP" onPress={()=>navigation.navigate('Success', {name: route.params.name})} />
				<StyledText style={{fontSize: 15}}>Not recommended</StyledText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 50,
  },
  title:{
	fontSize: 35,
	textAlign: 'center'
  },
  text:{
	fontSize: 20,
	textAlign: 'center',
  }
});
