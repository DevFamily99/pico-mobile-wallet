import { View, ViewProps } from 'react-native';
import React from 'react';
import StyledImage from '../StyledImage';

interface UserPictureProps extends ViewProps {
    src?: string
    size?: 'default' | 'small'
    className?: string
}

export default function UserPicture({
    src,
    size = 'default',
    className
}: UserPictureProps) {
    return (
        <View className={`flex justify-center ${className}`}>
            <StyledImage
                source={src ? { uri: src } : {}}
                defaultText="user picture"
                size={size == 'default' ? 80 : 60}
                round
            />
        </View>
    );
}