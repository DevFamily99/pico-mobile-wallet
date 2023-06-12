import * as React from 'react';
import GlobalStyle from '../constants/GlobalStyle';
import { Text, TextProps } from './Themed';

export function StyledText(props: TextProps) {
  return <Text {...props} style={[GlobalStyle.default_text, props.style]} />;
}
