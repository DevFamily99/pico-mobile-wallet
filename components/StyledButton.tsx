import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, ButtonProps, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function StyledButton(props: ButtonProps) {
	let textColor = props.secondary? Colors.light.gradient_start : "white";
	if(props.disabled) textColor = Colors.light.disabled;

	if (props.gray) {
		return(
			<TouchableOpacity {...props} style={[{width: '100%'}, styles.gray, props.style]} activeOpacity={0.4} onPress={props.onPress} disabled={props.disabled} >
				<Text style={[{ color: textColor}, styles.label,props.labelStyle]}>
					{props.label}
				</Text>
			</TouchableOpacity>
		)
	}

	if (props.secondary || props.disabled) {
		return(
			<TouchableOpacity {...props} style={[{width: '100%',}, props.style]} activeOpacity={0.7} onPress={props.onPress} disabled={props.disabled} >
				<LinearGradient colors={[Colors.light.gradient_start, Colors.light.gradient_middle]} style={[props.noborder? styles.secondary_no_border : styles.secondary, props.gradientStyle]}>
					<View style={styles.secondaryFill}>
						<Text style={[ styles.label, { color: textColor}]}>
							{props.label}
						</Text>
					</View>
				</LinearGradient>
			</TouchableOpacity>
		)
		
	}else{
		return(
			<TouchableOpacity {...props} style={[{width: '100%'}, props.style]} activeOpacity={0.4} onPress={props.onPress} >
				<LinearGradient colors={[Colors.light.gradient_start, Colors.light.gradient_middle]} style={styles.primary}>
					<Text style={[{ color: textColor}, styles.label]}>
						{props.label}
					</Text>
				</LinearGradient>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
  primary: {
	alignItems: 'center',
	justifyContent: 'center',
	paddingHorizontal: 20,
	paddingVertical: 15,
	borderWidth: 0,
	borderRadius: 10,
	height: 60,
	width: '100%',
  },
  gray: {
	alignItems: 'center',
	justifyContent: 'center',
	paddingHorizontal: 20,
	paddingVertical: 15,
	borderWidth: 0,
	borderRadius: 10,
	backgroundColor: 'gray',
	height: 60,
	width: '100%',
  },
  label:{
	fontSize: 20,
	fontWeight: 'bold',
	color: 'white'
  },
  secondary:{
	paddingHorizontal: 3,
	paddingVertical: 3,
	borderRadius: 10,
	height: 60,
	width: '100%',
  },
	secondary_no_border: {
		borderRadius: 10,
		height: 60,
		width: '100%',
	},
  secondaryFill:{
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	paddingHorizontal: 17,
	height: '100%',
	backgroundColor: 'white',
	borderRadius: 7,
  },
});