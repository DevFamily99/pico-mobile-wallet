import * as React from 'react';
import { Text, TextProps } from './Themed';

export function H1(props: TextProps) {
    return <Text {...props} className='text-4xl font-bold' />;
}