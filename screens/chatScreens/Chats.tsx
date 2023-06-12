import React, { useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import ChatPreview from '../../components/Chats/ChatPreview';
import UserPicture from '../../components/General/UserPicture';
import SearchUserInput from '../../components/General/SearchUserInput';
import { H1 } from '../../components/H1';
import { ChatStackPramList } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ChatsPageProps = NativeStackScreenProps<ChatStackPramList, 'Chats'>;
export default function Chats({ route, navigation }: ChatsPageProps) {
    const [username, setUsername] = useState('');

    const goToChatPage = (chatUser: string) => {
        navigation.navigate('Chat', {
            chatUser,
        });
    };
    const data = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: "5" },
        { id: '6' },
        { id: '7' },
        { id: '8' },
        { id: '9' },
        { id: '10' },
        { id: '11' },
    ]
    return (
        <View className='flex-1 flex-col bg-white ' >
            <H1 className='pl-3 bg-main-color py-4 rounded' lightColor='white'>
                Pico Talk
            </H1>
            <View>
                <FlatList horizontal data={data}
                    className='py-3 max-w-md'
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <View className='px-2'>
                            <UserPicture size='small' />
                        </View>
                    }
                />
            </View>
            <SearchUserInput
                value={username}
                onChange={setUsername}
            />
            <View className='flex-1 flex-col items-start justify-start space-y-5 pl-1'>
                <ChatPreview
                    lastMessage='This messaging app is great!'
                    username='Bob'
                    timeAgo='5 minutes ago'
                    onPress={() => goToChatPage('Bob')}
                />
                <ChatPreview
                    lastMessage='This messaging app is great!'
                    username='Alice'
                    timeAgo='5 minutes ago'
                    onPress={() => goToChatPage('Alice')}
                />
            </View>
        </View>
    );
}