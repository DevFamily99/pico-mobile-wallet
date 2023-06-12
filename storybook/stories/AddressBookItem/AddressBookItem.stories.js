import { storiesOf } from '@storybook/react-native';
import React from 'react';
import AddressBookItem from '../../../components/AddressBookItem';
import CenterView from '../CenterView';

storiesOf('AddressBookItem', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
	<AddressBookItem username='Account 1' address='0x32C6038e04A9bE51Fe4feeAF30E0cE3847434EEf'/>
  ));