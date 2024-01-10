import React from 'react';

import { VerificationCodeProps } from './interfaces';
import Styles from './verification-code-screen.styles';
import { Box } from '@equalbill/components/controllers/box/box';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import Header from '@equalbill/components/header/header';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';

const VerificationCodeScreen = ({ hanfleOnPress }: VerificationCodeProps) => {
  return (
    <Box style={Styles.screen}>
      <Spacer size={24} />
      <Header />

      <Spacer size={32} />

      <Box style={Styles.centered}>
        <TextFactory style={Styles.title}>{'title'}</TextFactory>
      </Box>
      <Spacer size={12} />
      <Box style={Styles.centered}>
        <TextFactory style={Styles.subTitle}>{'subtitle'}</TextFactory>
      </Box>
      <Spacer size={32} />

      <Spacer size={31} />

      <Spacer size={24} />

      <Spacer size={40} />
    </Box>
  );
};

export default VerificationCodeScreen;
