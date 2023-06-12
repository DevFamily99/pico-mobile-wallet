import React from 'react';
import {View} from '../../components/Themed';
import GlobalStyle from '../../constants/GlobalStyle';
import {ScrollView} from 'react-native';
import FAQelement from '../../components/FAQelement';

export default function FAQ() {
  return (
    <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
      <View style={[GlobalStyle.container_padding]}>
        <FAQelement question={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum?`}
          answer={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum?`} />
        <FAQelement question={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum?`}
          answer={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum?`} />
        <FAQelement question={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum?`}
          answer={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum?`} />
        <FAQelement question={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum?`}
          answer={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum?`} />
        <FAQelement question={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum?`}
          answer={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum?`} />
        <FAQelement question={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum?`}
          answer={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum?`} />
      </View>
    </ScrollView>
  );
}
