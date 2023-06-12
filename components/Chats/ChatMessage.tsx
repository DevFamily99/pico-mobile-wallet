import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';

interface ChatMessageProps {
    children: ReactNode
    ownMessage?: boolean
}
export default function ChatMessage({ children, ownMessage = false }: ChatMessageProps) {
    return (
        <View className={`p-2 ${ownMessage && 'bg-main-color-light'} rounded-lg
         border-main-color border-2 m-2 w-full`}>
            <Text className='text-black flex-1 items-center'>
                {children}
            </Text>
        </View>
    );
}