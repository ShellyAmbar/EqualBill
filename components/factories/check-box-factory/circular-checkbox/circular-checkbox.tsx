import { Box } from '@equalbill/components/controllers/box/box';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import React from 'react';
import Styles from './circular-checkbox.styles';
import { CircularCheckboxProps } from './interfaces';

const CircularCheckBox = ({ label, status, style, ...props }: CircularCheckboxProps) => {
  return (
    <Box {...props} style={{ ...Styles.container, ...style }}>
      <Box style={[Styles.checkbox, status ? Styles.containerCheck : Styles.containerUnCheck]}>
        {status && <Box style={Styles.inlineContainer} />}
      </Box>

      <TextFactory style={Styles.label}>{label}</TextFactory>
    </Box>
  );
};

export default CircularCheckBox;
