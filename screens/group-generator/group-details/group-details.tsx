import React from 'react';
import { Box } from '@equalbill/components/controllers/box/box';
import Styles from './group-details.styles';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import ReactiveTextInput from 'rn-reactive-text-input';

const GroupDetails = () => {
  return (
    <Box style={Styles.container}>
      <TextFactory>{"What's the name of the group?"}</TextFactory>
      <ReactiveTextInput textInputStyle={{ paddingVertical: 5 }} placeholder="Group Name" label="" />
    </Box>
  );
};

export default GroupDetails;
