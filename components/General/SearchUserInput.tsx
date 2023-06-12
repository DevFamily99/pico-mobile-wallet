import { TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import StyledInput from '../StyledInput';
import Icon from 'react-native-easy-icon';
import Colors from '../../constants/Colors';

interface SearchUserInputProps {
    onPressQR?: VoidFunction
    onSearch?: VoidFunction
    value: string
    onChange: (v: any) => void
}
export default function SearchUserInput({
    onPressQR,
    value,
    onChange,
    onSearch,
}: SearchUserInputProps) {
    return (
        <View className='px-1'>
            <TouchableOpacity
                className='absolute top-7 left-2 z-10'
                onPress={onPressQR}>
                <Image source={require('../../assets/images/qrIcon.png')} />
            </TouchableOpacity>
            <StyledInput
                inputType="search"
                defaultText="Search Chat"
                numberOfLines={1}
                containerStyle={{
                    marginVertical: 15,
                    paddingLeft: 30,
                    paddingRight: 30,
                }}
                value={value}
                handleChange={(text) => onChange(text)}
            />
            <TouchableOpacity
                className='absolute top-6 right-2 z-10'
                onPress={onSearch}>
                <Icon
                    type="feather"
                    name="search"
                    color={Colors.light.gradient_start}
                    size={30}
                />
            </TouchableOpacity>
        </View>
    );
}