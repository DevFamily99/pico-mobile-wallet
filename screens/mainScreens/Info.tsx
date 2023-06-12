import React from 'react';
import {StyledText} from '../../components/StyledText';
import GlobalStyle from '../../constants/GlobalStyle';

export default function Info() {
  return (
    <>
      <StyledText style={GlobalStyle.h2}>INFO</StyledText>
      <StyledText style={{textAlign: 'left', fontSize: 15, paddingTop: 10}}>
        {`Just one quick thing to note,
Pico is a decentralized system in which we vote in representatives to run the infrastructure and manage the system,
called block producers

Block producers  are rewarded to operate and maintain the system      

You must vote on a block producer to earn rewards from savings

You can vote directly or choose someone you trust to manage your vote called vote delegation!

Voting or delegating can be changed anytime.

For more info, check the FAQ or Whitepaper.`}
      </StyledText>
    </>
  );
}
