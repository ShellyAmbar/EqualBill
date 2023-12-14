import { Box } from '@equalbill/components/controllers/box/box';
import React from 'react';
import { CheckBoxProps } from './interfaces';
import Styles from './radio.styles';

const CheckBox = ({ status }: CheckBoxProps): JSX.Element => {
  return (
    <Box style={[Styles.container, status ? Styles.outerActive : Styles.outerDeactivate]}>
      {status && <Box style={Styles.innerActive} />}
    </Box>
  );
};

export default CheckBox;
