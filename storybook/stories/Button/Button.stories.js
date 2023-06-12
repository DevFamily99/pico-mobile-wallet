import { storiesOf } from '@storybook/react-native';
import React from 'react';
import StyledButton from '../../../components/StyledButton';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Primary', () => (
		<StyledButton label="Let's Get Started!" onPress={()=>{console.log("default button")}} />
  ))
  .add('Disabled', () => (
		<StyledButton label="Let's Get Started!" onPress={()=>{console.log("disabled button")}} disabled/>
  ))
  .add('Secondary', () => (
		<StyledButton label="Claim" onPress={()=>{console.log("secondary button")}} secondary />
  ));
