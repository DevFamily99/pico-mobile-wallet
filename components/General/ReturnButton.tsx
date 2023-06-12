import React from 'react';
import {StyleSheet, TouchableOpacityProps} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-easy-icon';
import Colors from '../../constants/Colors';

export default function ReturnButton(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Icon
        type="ionicon"
        name="ios-arrow-back"
        color={Colors.light.gradient_start}
        size={40}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
});
