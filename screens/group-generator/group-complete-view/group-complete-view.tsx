import React from 'react';
import { Box } from '@equalbill/components/controllers/box/box';
import GroupCompleteViewProps from './interfaces';
import Styles from './group-complete-view.styles';
import HorizontalUsersSlider from '@equalbill/components/horizontal-users-slider/horizontal-users-slider';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';

const GroupCompleteView = ({ group }: GroupCompleteViewProps) => {
  return (
    <Box scroll style={Styles.container} contentContainerStyle={Styles.content}>
      <TextFactory>{'Participents:'}</TextFactory>
      <HorizontalUsersSlider data={group.users} />
      <Spacer size={16} />
    </Box>
  );
};

export default GroupCompleteView;
