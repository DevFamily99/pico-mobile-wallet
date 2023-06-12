import React from 'react'
import { Modal, ModalProps, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';
import IconButton from './IconButton';
import { StyledModalProps, View } from './Themed'

export default function StyledModal( props: StyledModalProps) {
	return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.visible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
			    <IconButton icon="close"  parentStyle={styles.close} size={30} onPress={props.changeShowModal} />
		  	{props.children}
          </View>
        </View>
      </Modal>
	)
}
const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
	borderWidth: 2,
	borderColor: Colors.light.gradient_start,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContainer:{
	...GlobalStyle.align_center,
	height: '100%',
	backgroundColor: 'rgba(0,0,0,0.5)',
	justifyContent: 'center'
  },
  close:{
	position: 'absolute',
	right: 0,
  padding:5
  }
});
