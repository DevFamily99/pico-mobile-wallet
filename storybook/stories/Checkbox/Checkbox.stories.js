// import CheckBox from '@react-native-community/checkbox';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import StyledCheckbox from '../../../components/StyledCheckbox';
import CenterView from '../CenterView';


storiesOf('Checkbox', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
		<StyledCheckbox  label = "Do you agree?"/>
  ))
  .add('Disabled', () => (
		<StyledCheckbox disabled label = "Do you disagree?"/>
  ))
  ;
