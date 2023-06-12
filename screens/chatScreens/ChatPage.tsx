import { ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import GlobalStyle from '../../constants/GlobalStyle';
import { H1 } from '../../components/H1';
import ChatMessage from '../../components/Chats/ChatMessage';
import StyledInput from '../../components/StyledInput';
import { StyledText } from '../../components/StyledText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ChatStackPramList } from '../../types';
import { Icon } from '@rneui/base';

type ChatPageProps = NativeStackScreenProps<ChatStackPramList, 'Chat'>;

export default function ChatPage({
    navigation,
    route,
}: ChatPageProps) {
    const { chatUser } = route.params;
    const [message, setMessage] = useState('');
    const [url] = useState('');

    const startServer = () => {
        console.log('start server');
    };
    return (
        <View className='flex-1 flex-col bg-white'>
            <ScrollView className='w-full'>
                <View className='w-full h-5/6 pr-4'>
                    <ChatMessage ownMessage>
                        Some message
                    </ChatMessage>
                    <ChatMessage>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Assumenda fugit itaque alias. Expedita voluptas, repellendus quas quibusdam illum consectetur
                        similique enim a,
                        doloribus soluta nobis voluptates impedit voluptatibus vitae tempora?
                    </ChatMessage>
                    <ChatMessage>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Assumenda fugit itaque alias. Expedita voluptas, repellendus quas quibusdam illum consectetur
                        similique enim a,
                        doloribus soluta nobis voluptates impedit voluptatibus vitae tempora?
                    </ChatMessage>
                </View>
            </ScrollView>
            <View className='flex flex-row w-full justify-center items-center fixed '>
                <View className='w-8/12'>
                    <StyledInput
                        className='w-10'
                        inputType="default"
                        defaultText="Send a message"
                        numberOfLines={1}
                        containerStyle={{
                            marginVertical: 15,
                        }}
                        value={message}
                        handleChange={(text) => setMessage(text)}
                    />
                </View>
                <TouchableOpacity className='w-3/12 bg-primary rounded-md h-12 ml-3 flex justify-center items-center'
                    onPress={startServer}>
                    <StyledText className='text-white'>
                        <Icon name='send' type='Ionicons' size={40} color={'#D83A0C'} />
                    </StyledText>
                </TouchableOpacity>
            </View>
        </View>
    );
}