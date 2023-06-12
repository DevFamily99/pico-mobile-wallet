import { storiesOf } from '@storybook/react-native';
import React from 'react';
import IconButton from '../../../components/IconButton';
import CenterView from '../CenterView';

storiesOf('IconButton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
		<IconButton icon='chevron-left' onPress={()=>{console.log("default icon button")}} />
  ))
  .add('With Background', () => (
		<IconButton icon='facebook-f' background onPress={()=>{console.log("icon button with background")}} />
  ))
  .add('Custom color', () => (
		<IconButton icon='eye' color='#4E4EEE' onPress={()=>{}} />
  ))
  ;
