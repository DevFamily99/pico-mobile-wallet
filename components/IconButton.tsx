import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors';
import Icon from './icons/Icon';
import { IconButtonProps } from './Themed';

export default function IconButton(props:IconButtonProps) {
	return (
		<TouchableOpacity onPress={props.onPress} style={props.parentStyle} >
			{props.background?
				<LinearGradient colors={[Colors.light.gradient_start, Colors.light.gradient_middle,Colors.light.gradient_end]} 
					style={[styles.container, props.style]}>
						{props.fontAwesome?
							<FontAwesome5 name={props.icon} size={props.size || 40} color={props.color || '#FFF'} />
						:
							<Icon name={props.icon} size={props.size || 40} color={props.color || '#FFF'} />
						}
				</LinearGradient>
			:
				<View style={[styles.container, props.style]}>
						{props.fontAwesome?
							<FontAwesome5 name={props.icon} size={props.size || 40} color={props.color || Colors.light.gradient_start} />
						:
							<Icon name={props.icon} size={props.size || 40} color={props.color || Colors.light.gradient_start}  />
						}
				</View>
			}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
	// width: 60,
	// height: 60,
	borderRadius: 10,
  },
});
