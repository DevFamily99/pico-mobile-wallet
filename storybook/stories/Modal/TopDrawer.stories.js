import { storiesOf } from '@storybook/react-native';
import React from 'react';
import StyledModal from '../../../components/StyledModal';
import TopDrawer from '../../../components/TopDrawer';
import { StyledText } from '../../../components/StyledText';
import CenterView from '../CenterView';

storiesOf('TopDrawer', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
		<TopDrawer />
  ));
