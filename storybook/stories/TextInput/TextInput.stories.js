import { storiesOf } from '@storybook/react-native';
import React from 'react';
import StyledInput from '../../../components/StyledInput';
import CenterView from '../CenterView';

storiesOf('TextInput', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Search', () => (
		<StyledInput defaultText="Search" inputType = "search" />
  ))
  .add('Password', () => (
		<StyledInput defaultText="Password" inputType = "password" />
  ))
  .add('Balance', () => (
		<StyledInput defaultText="Balance" inputType = "balance" />
  ))
  .add('Default', () => (
		<StyledInput defaultText="" inputType = "default" />
  ))
  .add('Default Multiline', () => (
		<StyledInput defaultText="Your Message" inputType = "default" multiline = {true} numberOfLines = {4} />
  ))
  ;
