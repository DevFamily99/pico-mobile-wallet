import { FontAwesome } from 'react-native-vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { View, Text } from './Themed';
import { AddressBookItemProps } from './Themed';

export default function AddressBookItem(props: AddressBookItemProps) {

	const shortAddress=()=>{
		const length = props.address.length;
		const shortAddress = props.address.substring(0,6)+'...'+
							props.address.substring(length-4, length);
		return shortAddress;
	}

	return (
		<View style={styles.container}>
			<FontAwesome name='user-circle' size={30} style={styles.userIcon} color={Colors.light.gradient_start}/>
			<Text style={styles.username}>{props.username}</Text>
			<View style={{flex: 1}}>
				<Text style={styles.address}>{shortAddress()}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
	width: '100%',
	height: 55,
	flexDirection: "row",
	alignItems: 'center',
	paddingLeft: 5,
	paddingRight: 15
  },
  userIcon:{
	textAlign: 'center',
	width: 30,
  },
  username:{
	marginHorizontal: 5,
	fontSize: 18,
	fontWeight: 'bold',
  },
  address:{
	width: '100%',
	fontSize: 18,
	textAlign: 'right'
  }
});

