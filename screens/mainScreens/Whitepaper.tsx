import React from 'react';
import {View} from '../../components/Themed';
import {StyledText} from '../../components/StyledText';
import GlobalStyle from '../../constants/GlobalStyle';
import {ScrollView} from 'react-native';
import {MainTabScreenProps} from '../../types';

export default function Whitepaper({navigation}: MainTabScreenProps<'Whitepaper'>) {
  return (
    <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
      <View style={[GlobalStyle.container_padding]}>
        <StyledText style={{textAlign: 'left'}}>{`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum. 
      `}</StyledText>
      </View>
    </ScrollView>
  );
}
