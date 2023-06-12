import * as React from 'react';
import { ColorSchemeName, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chats from '../screens/chatScreens/Chats';
import ChatPage from '../screens/chatScreens/ChatPage';
import { ChatStackPramList } from '../types';
import UserPicture from '../components/General/UserPicture';
import { H1 } from '../components/H1';

const Stack = createNativeStackNavigator<ChatStackPramList>();
export default function ChatNavigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    const headerOptions = {
        headerStyle: {
            backgroundColor: '#F25D10',
            height: 100,
            borderRadius: 100,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerTintColor: '#FFF',
    };

    return (
        <Stack.Navigator
            initialRouteName="Chats">
            <Stack.Screen
                name="ChatsPage"
                component={Chats}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Chat"
                component={ChatPage}
                options={({ route }) => ({
                    ...headerOptions,
                    headerTitle: () => (
                        <View className='flex-1 flex-row items-center space-x-3 py-1'>
                            <UserPicture size='small' />
                            <H1 className='text-3xl' lightColor='white'>{route.params.chatUser}</H1>
                        </View>
                    )
                })}

            />
        </Stack.Navigator>
    );
}