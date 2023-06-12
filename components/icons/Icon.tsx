import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import React from 'react'

const IconComponent = createIconSetFromIcoMoon(
	require('../../assets/icons/selection.json'),
	'picowallet',
	'picowallet.ttf'
);

export default function Icon(props:typeof IconComponent.defaultProps) {
	return (
		<IconComponent {...props} />
	)
}
