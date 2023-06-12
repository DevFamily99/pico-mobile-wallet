import { FontAwesome } from 'react-native-vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, AccountActionItemProps } from './Themed';
import IconButton from './IconButton';
import PicoWalletIcon from './PicoWalletIcon';
import Colors from '../constants/Colors';
import Icon from './icons/Icon';

export default function AccountActionItem(props: AccountActionItemProps) {

	function renderAction() {
		const icons={
			add: 'plus',
			vote: 'vote',
			exchange: 'exchange',
			print: 'print',
		}
		return 	<IconButton icon={icons[props.action] as  React.ComponentProps<typeof FontAwesome>['name'] } 
							size={40} style={styles.iconButton} onPress={props.onPress}/>
	}

	function formatBalance() {
		return props.balance?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	const shortAddress=()=>{
		const length = props.address?.length || 4;
		const shortAddress = props.address?.substring(0,6)+'...'+
							props.address?.substring(length-4, length);
		return shortAddress;
	}

	return (
		<View style={styles.container}>
			<Icon name='account' size={30} style={styles.userIcon} color={Colors.light.gradient_start}/>
			<Text style={styles.username}>{props.username}</Text>
			<View style={styles.balanceContainer}>
				{props.action==='add'? 
					<Text style={styles.balance}>{shortAddress()}</Text>
				:
				<>
					<Icon name='pico' size={20} color={Colors.light.text}/>
					<Text style={styles.balance}>{formatBalance()}</Text>
				</>
				}
			</View>
			{renderAction()}
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
	borderWidth: 3,
	width: '100%',
	height: 55,
	borderColor: 'rgba(255,255,255,0.5)',
	flexDirection: "row",
	alignItems: 'center',
	marginBottom: 10
  },
  userIcon:{
	textAlign: 'center',
	width: 30,
  },
  username:{
	marginHorizontal: 5,
	marginLeft: 8,
	fontSize: 18,
	fontWeight: 'bold',
  },
  balance:{
	fontSize: 18,
	paddingLeft: 5
  },
  balanceContainer:{
	flexDirection: "row",
	flex: 1,
	width: "auto",
	paddingHorizontal: 10,
	justifyContent: 'center'
  },
  iconButton:{
	width: 40,
	height: 40,
	marginRight: 5
  }
});

