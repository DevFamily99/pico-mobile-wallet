import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SvgXml } from 'react-native-svg'

interface CircleGraphProps{
	thickness?: number
	percentage?: number
	quantity?: string
}
export default function CircleGraph({ thickness=10, percentage=20, quantity='123'}:CircleGraphProps) {
	const svgMarkup=`
	<svg viewBox="-2 -3 37 30" >
		<defs>
			<linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="0%" style="stop-color:#D83A0C;stop-opacity:1" />
			<stop offset="100%" style="stop-color:#F25D10;stop-opacity:1" />
			</linearGradient>
		</defs>
		<path
			d="M0 20
			a 15.9155 15.9155 0 0 1 31.831 0
			a 15.9155 15.9155 0 0 1 -31.831 0"
			fill="none"
			stroke-linecap="round"
			stroke="#F0F5F9"
			stroke-width="${thickness }"
			stroke-dasharray="50, 100"
		/>
		<path
			d="M0 20
			a 15.9155 15.9155 0 0 1 31.831 0
			a 15.9155 15.9155 0 0 1 -31.831 0"

			fill="none"
			stroke-linecap="round"
			stroke="url(#grad2)"
			stroke-width="${thickness }"
			stroke-dasharray="${percentage*0.5 }, 100"
		/>
		<text x="16" y="20" text-anchor="middle" fill="black" font-size="3px"
			 stroke-width="0px" dy=".1em">Daily Faucet</text>
		<text x="16" y="27" text-anchor="middle" fill="black" font-size="5px"
			 stroke-width="0px" dy=".1em">${quantity}</text>
	</svg>
	`
	return (
		<View style={styles.graph}>
			<SvgXml xml={svgMarkup} width="100%" height={"100%"} />
		</View>
	)
	
}

const styles = StyleSheet.create({
  graph: {
    width: '100%',
    height: 270,
	paddingHorizontal: 50,
	justifyContent: 'center',
	alignItems: 'center',
  }
});