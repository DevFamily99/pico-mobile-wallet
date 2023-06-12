import { storiesOf } from '@storybook/react-native';
import React from 'react';
import AccountActionItem from '../../../components/AccountActionItem';
import CenterView from '../CenterView';

storiesOf('AccountActionItem', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Add', () => (
    <>
      <AccountActionItem username='Account 1'  balance='123456789' action="add" onPress={()=>console.log("add")}/>
      <AccountActionItem username='Account 2'  balance='123456789' action="add" onPress={()=>console.log("add")}/>
      <AccountActionItem username='Account 3'  balance='123456789' action="add" onPress={()=>console.log("add")}/>
    </>
  ))
  .add('Vote', () => (
	  <AccountActionItem username='Account 1'  balance='123456789' action="vote"/>
  ))
  .add('Swap', () => (
	  <AccountActionItem username='Account 1'  balance='123456789' action="swap"/>
  ))
  .add('Print', () => (
	  <AccountActionItem username='Account 1'  balance='123456789' action="print"/>
  ));