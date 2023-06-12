import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '../../components/Themed';
import StyledButton from '../../components/StyledButton';
import {LoginStackScreenProps} from '../../types';
import GlobalStyle from '../../constants/GlobalStyle';
import {StyledText} from '../../components/StyledText';
import SeedWord from '../../components/SeedWord';
import useRecoverAccount from '../../hooks/useRecoverAccount';
import LoadingSpinner from '../../components/General/LoadingSpinner';
import IconButton from '../../components/IconButton';

export default function RestoreSeedPhrase(
    {navigation}: LoginStackScreenProps<'RestoreSeedPhrase'>
) {
  const [showPhrase, setShowPhrase] = useState(false);
  const [phrase, setPhrase] = useState(['', '', '', '', '', '', '', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const {recoverAccount} = useRecoverAccount();

  const handleRecover= () =>{
    setLoading(true);
    recoverAccount(phrase).then((data)=>{
      console.log(data);
      navigation.navigate('AlmostThere', {name: data});
    }).catch((err)=>{
      setErrorMessage(err.message);
      console.log('error: ', err.message);
    }).finally(()=>{
      setLoading(false);
    });
  };
  const handleChangePassword = (id:number, text:string) => {
    const valPhrase = [...phrase];
    valPhrase[id-1] = text;
    setPhrase(valPhrase);
  };

  const renderSeedWord = (start: number, end: number)=>{
    return (
      <View style={GlobalStyle.row_full}>
        {phrase.slice(start, end).map((word, i)=>(
          <SeedWord
            key={i}
            id={i+start+1}
            hidden={!showPhrase}
            editable
            value={phrase[i+start]}
            handleChange={handleChangePassword}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StyledText style={styles.text}>Insert your Seed Phrase</StyledText>
      <View style={styles.wordContainer}>
        {renderSeedWord(0, 3)}
        {renderSeedWord(3, 6)}
        {renderSeedWord(6, 9)}
        {renderSeedWord(9, 12)}
      </View>
      <IconButton
        icon={showPhrase?'eye-off':'eye'}
        size = {30}
        style={{}}
        onPress={()=>setShowPhrase(!showPhrase)}
      />
      {loading &&
        <LoadingSpinner />
      }
      <View
        style={[GlobalStyle.bottom_buttons, {
          paddingHorizontal: 40,
          paddingVertical: 40,
        }]}>
        <Text style={GlobalStyle.err_msg}>{errorMessage}</Text>
        <StyledButton label="RECOVER" onPress={handleRecover} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    paddingHorizontal: 27,
  },
  container: {
    ...GlobalStyle.container_main,
    ...GlobalStyle.align_center,
    paddingHorizontal: 0,
  },
  wordContainer: {
    paddingHorizontal: 50,
  },
});
