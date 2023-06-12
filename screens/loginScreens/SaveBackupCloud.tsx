import React, { useState } from 'react'
import { View, Text } from '../../components/Themed'
import StyledButton from '../../components/StyledButton'
import { LoginStackScreenProps } from '../../types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import StyledInput from '../../components/StyledInput'
import StyledCheckbox from '../../components/StyledCheckbox'
import { StyledText } from '../../components/StyledText'
import GlobalStyle from '../../constants/GlobalStyle'
import CloudIcon from '../../components/icons/CloudIcon'

export default function SaveBackupCloud({navigation, route}: LoginStackScreenProps<'SaveBackupCloud'>) {
	const [saved, setSaved] = useState(false);

	return (
		<View style={styles.container}>
			<StyledText style={{}}>Tap the icon to save a backup. Remember to save it in separate locations.</StyledText>
			<CloudIcon size={180} />
			<View style={GlobalStyle.bottom_buttons}>
				<StyledCheckbox label="I have saved my backup and password in separate locations" value={saved} onValueChange={()=>setSaved(!saved)}  />
				{saved?
					<StyledButton label="DONE" onPress={()=>navigation.navigate('Success', {name: route.params.name})} />
				:
					<></>
				}
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
