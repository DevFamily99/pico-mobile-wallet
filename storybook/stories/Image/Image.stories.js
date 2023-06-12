import { storiesOf } from '@storybook/react-native';
import React from 'react';
import StyledImage from '../../../components/StyledImage';
import CenterView from '../CenterView';
import images from '../../../assets/images/index';


storiesOf('Image', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Web Image', () => (
		<StyledImage source = {{uri:'https://picsum.photos/200'}} />
  ))
  .add('Assets Image', () => (
		<StyledImage source = {images.main_logo} />
  ))
  ;
