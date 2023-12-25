import React from 'react';
import { Box } from '@equalbill/components/controllers/box/box';
import GroupCompleteViewProps from './interfaces';
import Styles from './group-complete-view.styles';
import HorizontalUsersSlider from '@equalbill/components/horizontal-users-slider/horizontal-users-slider';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import GroupMedia from '../group-media/group-media';

const GroupCompleteView = ({ group }: GroupCompleteViewProps) => {
  return (
    <Box scroll style={Styles.container} contentContainerStyle={Styles.content}>
      <TextFactory style={Styles.title} type="h4">
        {'Group Name: '}
      </TextFactory>
      <TextFactory style={Styles.subTitle} type="h6">
        {group.name}
      </TextFactory>
      <Spacer size={16} />
      <TextFactory style={Styles.title} type="h4">
        {'Group Description: '}
      </TextFactory>
      <TextFactory style={Styles.subTitle} type="h6">
        {group.description}
      </TextFactory>
      <Spacer size={16} />
      <TextFactory style={Styles.title} type="h4">
        {'Group Image:'}
      </TextFactory>
      <Spacer size={16} />
      <GroupMedia imageUri={group.url} isEditable={false} />
      <Spacer size={16} />
      <TextFactory style={Styles.title} type="h4">
        {'Participents:'}
      </TextFactory>

      <HorizontalUsersSlider data={group.users} />
      <Spacer size={120} />
    </Box>
  );
};

export default GroupCompleteView;
