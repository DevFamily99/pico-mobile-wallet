import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import UserPicture from '../General/UserPicture';
import { StyledText } from '../StyledText';

interface ChatPreviewProps {
    pictureSrc?: string
    username?: string
    lastMessage?: string
    timeAgo?: string
    onPress?: (user: string) => void
}
export default function ChatPreview({
    pictureSrc = '',
    username = '',
    lastMessage,
    timeAgo,
    onPress = () => { },
}: ChatPreviewProps) {
    return (
        <TouchableOpacity className='w-full py-2' onPress={() => onPress(username)}>
            <View className='flex flex-row w-full'>
                <UserPicture src={pictureSrc} />
                <View className='w-full flex flex-col items-start pl-3'>
                    <StyledText className='font-bold text-left'>{lastMessage}</StyledText>
                    <View className='flex flex-row'>
                        <StyledText className='text-sm'>{username}, </StyledText>
                        <StyledText className='text-sm'>{timeAgo}</StyledText>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}