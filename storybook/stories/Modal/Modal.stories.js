import { storiesOf } from '@storybook/react-native';
import React from 'react';
import StyledModal from '../../../components/StyledModal';
import { StyledText } from '../../../components/StyledText';
import CenterView from '../CenterView';

storiesOf('Modal', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
		<StyledModal >
      <StyledText>Some Text</StyledText>
    </StyledModal>
  ));
