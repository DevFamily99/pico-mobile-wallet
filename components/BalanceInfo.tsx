import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, AccountActionItemProps, BalanceInfoProps } from './Themed';

export default function BalanceInfo(props: BalanceInfoProps) {

	function formatBalance() {
		return props.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	return (
		<View style={styles.container}>
			<Text style={styles.username}>{props.label}</Text>
			<View style={styles.balanceContainer}>
				<Text style={styles.balance}>{formatBalance()}</Text>
			</View>
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
  },
  userIcon:{
	textAlign: 'center',
	width: 30,
  },
  username:{
	marginHorizontal: 5,
	fontSize: 25,
  },
  balance:{
	fontSize: 20,
	fontWeight: 'bold',
  },
  balanceContainer:{
	flexDirection: "row",
	flex: 1,
	width: "auto",
	justifyContent: 'flex-end'
  },
  iconButton:{
	width: 40,
	height: 40,
	marginRight: 5
  }
});

