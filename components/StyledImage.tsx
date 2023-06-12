import React from 'react';
import { View,StyleSheet, Image, Dimensions } from 'react-native';
import { ImageProps,} from '../components/Themed';
import Colors from '../constants/Colors';

export default function StyledImage(props: ImageProps) {
  const roundContainer = {
      width: props.size || 200,
      height: props.size || 200,
      borderRadius: props.size || 100,
      borderColor: Colors.light.gradient_start,
      borderWidth: 2,
      overflow: 'hidden'
    }

  const imageContainer={
      width: props.size || 200,
      height: props.size || 200,
    }

  return (
    <View style={[props.round? roundContainer : imageContainer, props.style]}>
      <Image {...props}
        style={[ styles.image ]} 
        source = {props.source}
        />
    </View>
  );
  
}

const styles = StyleSheet.create(
  {

    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    }
});