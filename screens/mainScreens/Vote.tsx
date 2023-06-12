import React, {useState, useEffect} from 'react';
import {View} from '../../components/Themed';
import StyledModal from '../../components/StyledModal';
import {HomeScreenProps} from '../../types';
import {StyleSheet, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AccountActionItem from '../../components/AccountActionItem';
import {StyledText} from '../../components/StyledText';
import GlobalStyle from '../../constants/GlobalStyle';
import StyledImage from '../../components/StyledImage';
import Colors from '../../constants/Colors';
import IconButton from '../../components/IconButton';
import Info from './Info';

export default function Vote({navigation}: HomeScreenProps<'Vote'>) {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    const getLocalStorage = async () => {
      const avatar = await AsyncStorage.getItem('@MySuperStore:avatar');
      if (avatar) {
        setImage(avatar);
      }
    };

    getLocalStorage();
  }, []);

  const changeShowModal = ()=> setShowModal(!showModal);

  return (
    <View style={GlobalStyle.container_main}>
      <StyledModal visible={showModal} changeShowModal={changeShowModal} >
        <Info />
      </StyledModal>
      <View style={styles.topInfoContainer}>
        <View style={styles.hr} />
        <View style={GlobalStyle.row_justify}>
          <StyledImage source = {image ? {uri: image} : {}} defaultText='user picture' size={80} round />
        </View>
        <View style={styles.hr} />
      </View>
      <View style={GlobalStyle.container_padding}>
        <View style={[GlobalStyle.align_center, {paddingTop: 0}]}>
          <View style={styles.vote_head}>
            <StyledText style={GlobalStyle.h2_bold}>Vote for a validator to participate in rewards</StyledText>
            <IconButton icon="info" parentStyle={styles.info} size={30} onPress={changeShowModal} />
          </View>
          <StyledText style={{textAlign: 'left', fontSize: 15, paddingTop: 10}}>
            Note: the more you save, the more you help the system, and the higher your rewards
          </StyledText>
        </View>

        <View style={styles.scrollContainer}>
          <ScrollView >
            <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
            <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
            <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
            <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
            <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
            <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
            <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
            <AccountActionItem action="vote" username={'user1'} balance={'123456789'} />
            <AccountActionItem action="vote" username={'user10'} balance={'123456789'} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    display: 'flex',
    justifyContent: 'center',
  },
  scrollContainer: {
    width: '100%',
    height: '100%',
    marginTop: 10,
    paddingTop: 10,
    marginBottom: 10,
  },
  topInfoContainer: {
    ...GlobalStyle.row_space,
    height: 80,
    width: '100%',
  },
  hr: {
    width: '25%',
    height: 3,
    backgroundColor: Colors.light.gradient_start,
    alignSelf: 'center',
  },
  vote_head: {
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: 20,
  },
});
