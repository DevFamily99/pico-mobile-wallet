import React, {useState, useEffect} from 'react';
import {View} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import {HomeScreenProps} from '../../types';
import {ScrollView, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyledText} from '../../components/StyledText';
import AccountActionItem from '../../components/AccountActionItem';
import GlobalStyle from '../../constants/GlobalStyle';
import StyledInput from '../../components/StyledInput';
import StyledImage from '../../components/StyledImage';
import Colors from '../../constants/Colors';
import StyledModal from '../../components/StyledModal';
import AddToAddressBook from './AddToAddressBook';
import TransferForm from './TransferForm';
import TransferConfirm from './TransferConfirm';
import LoadingSpinner from '../../components/General/LoadingSpinner';
import {useUserInfo} from '../../context/UserInfoContext';
import TransferSuccess from './TransferSuccess';
import Icon from 'react-native-easy-icon';
import useTransfer from '../../hooks/useTransfer';

export default function Transfer({navigation}: HomeScreenProps<'Transfer'>) {
  const {sendTransfer} = useTransfer();
  const {name} = useUserInfo();
  const [transferState, setTransferState] = useState<
    'none' | 'form' | 'confirm' | 'success'
  >('none');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [receiver, setRecipient] = useState('');
  // Transfer Form
  const [quantity, setQuantity] = useState('');
  const [memo, setMemo] = useState('');
  const [note, setNote] = useState('');

  const changeShowModal = () => setShowModal(!showModal);

  useEffect(() => {
    // (async () => {
    //   const { status  } = await BarcodeScanner.requestPermissionsAsync();
    //    setHasPermission(status === "granted");
    // })();

    const getLocalStorage = async () => {
      const avatar = await AsyncStorage.getItem('@MySuperStore:avatar');
      if (avatar) {
        setImage(avatar);
      }
    };
    getLocalStorage();
  }, []);

  /*
  const handleBarCodeScanned = async ({type, data}) => {
    setScanned(true);
    console.log(data);

    if (data) {
      setRecipient(data);
      setScanned(false);
      setShowQRCode(false);
    }
  };
  */

  const searchAccount = () => {
    if (receiver === '') return;
    setTransferState('form');
  };

  const transfer = () => {
    setLoading(true);
    sendTransfer(quantity, receiver, memo).then((res)=> {
      setLoading(false);
      setTransferState('success');
    }).catch((err)=>{
      console.log(err);
      setLoading(false);
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (transferState === 'form') {
    return (
      <TransferForm
        receiver={receiver}
        setTransferState={setTransferState}
        setQuantity={setQuantity}
        memo={memo}
        setMemo={setMemo}
        note={note}
        setNote={setNote}
      />
    );
  }
  if (transferState === 'confirm') {
    return (
      <TransferConfirm
        receiver={receiver}
        setTransferState={setTransferState}
        transfer={transfer}
        quantity={quantity}
        memo={memo}
        note={note}
      />
    );
  }
  if (transferState === 'success') {
    return (
      <TransferSuccess
        receiver={receiver}
        setTransferState={setTransferState}
        quantity={quantity}
        memo={memo}
        note={note}
      />
    );
  }
  return (
    <View>
      {showQRCode ? (
        <View style={styles.qrContainer}>
          <TouchableOpacity
            style={styles.back} onPress={() => {
              setScanned(false);
              setShowQRCode(false);
            }}>
            <Image source={require('../../assets/images/backIcon.png')} />
          </TouchableOpacity>
          {/* <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={[StyleSheet.absoluteFill, styles.container]}
          /> */}
          {scanned && (
            <View style={styles.buttonsContainer}>
              <StyledButton
                label={'Tap to Scan Again'}
                onPress={() => setScanned(false)}
              />
            </View>
          )}
        </View>
      ) : (
        <ScrollView>
          <View style={GlobalStyle.container_main}>
            <StyledModal visible={showModal} changeShowModal={changeShowModal}>
              <AddToAddressBook>
                <View style={GlobalStyle.row_space}>
                  <View style={[GlobalStyle.align_center, {width: '50%'}]}>
                    <StyledButton
                      label="CANCEL"
                      secondary
                      onPress={changeShowModal}
                    />
                  </View>
                  <View style={[GlobalStyle.align_center, {width: '45%'}]}>
                    <StyledButton label="SAVE" />
                  </View>
                </View>
              </AddToAddressBook>
            </StyledModal>
            <View style={GlobalStyle.pictureContainer}>
              <View style={GlobalStyle.hr} />
              <View style={GlobalStyle.justify_center}>
                <StyledText style={GlobalStyle.bold}>{name}</StyledText>
                <StyledImage
                  source={image ? {uri: image} : {}}
                  defaultText="user picture"
                  size={80}
                  round
                />
              </View>
              <View style={GlobalStyle.hr} />
            </View>

            <View style={GlobalStyle.container_padding}>
              <View style={[GlobalStyle.align_center, {marginBottom: 15}]}>
                <StyledText style={GlobalStyle.h1_bold}>
                  Add Recipent
                </StyledText>
                <View>
                  <TouchableOpacity
                    style={styles.qr_icon}
                    onPress={() => setShowQRCode(true)}>
                    <Image source={require('../../assets/images/qrIcon.png')} />
                  </TouchableOpacity>
                  <StyledInput
                    inputType="search"
                    defaultText="Search Recipient"
                    numberOfLines={1}
                    containerStyle={{
                      marginVertical: 15,
                      paddingLeft: 30,
                      paddingRight: 30,
                    }}
                    value={receiver}
                    handleChange={(text) => setRecipient(text)}
                  />
                  <TouchableOpacity
                    style={styles.search_icon}
                    onPress={searchAccount}>
                    <Icon
                      type="feather"
                      name="search"
                      color={Colors.light.gradient_start}
                      size={30}
                    />
                  </TouchableOpacity>
                </View>
                <StyledButton
                  label="BETWEEN MY ACCOUNTS"
                  onPress={changeShowModal}
                />
              </View>
              <View style={GlobalStyle.align_left}>
                <StyledText style={GlobalStyle.bold}>Recent</StyledText>
                <AccountActionItem
                  action="add"
                  username="bpname"
                  address={'0x32C6038e04A9bE51Fe4feeAF30E0cE3847434EEf'}
                />
                <AccountActionItem
                  action="add"
                  username="bpname"
                  address={'0x32C6038e04A9bE51Fe4feeAF30E0cE3847434EEf'}
                />
              </View>
              <TouchableOpacity>
                <StyledText style={styles.loadText}>Load More</StyledText>
              </TouchableOpacity>
              <View style={GlobalStyle.align_left}>
                <StyledText style={GlobalStyle.bold}>Address Book</StyledText>
                <AccountActionItem
                  action="add"
                  username="bpname"
                  address={'0x32C6038e04A9bE51Fe4feeAF30E0cE3847434EEf'}
                />
                <AccountActionItem
                  action="add"
                  username="bpname"
                  address={'0x32C6038e04A9bE51Fe4feeAF30E0cE3847434EEf'}
                />
              </View>
              <TouchableOpacity>
                <StyledText style={styles.loadText}>Load More</StyledText>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loadText: {
    fontSize: 15,
    color: Colors.light.gradient_start,
    marginBottom: 10,
  },
  search_icon: {
    position: 'absolute',
    top: 25,
    right: 7,
    zIndex: 1,
  },
  qr_icon: {
    position: 'absolute',
    top: 27,
    left: 7,
    zIndex: 1,
  },
  container: {
    ...GlobalStyle.container_main,
    backgroundColor: 'rgba(0, 0, 0, .0)',
  },
  qrContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
  },
  scanner: {
    // flex: 1,
    width: 400,
    height: 400,
  },
  buttonsContainer: {
    flex: 1,
    width: '100%',
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .0)',
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
  logo: {
    padding: 50,
  },
  back: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
});
