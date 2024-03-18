import React, { forwardRef, useImperativeHandle } from 'react';
import { Box } from '@equalbill/components/controllers/box/box';
import Styles from './group-details.styles';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import ReactiveTextInput from 'rn-reactive-text-input';
import useGroupDetailes from './hooks/useGroupDetailes';
import { GroupDetailsProps } from './interfaces';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import { GlobalColors } from '@equalbill/styles/global-colors';

const GroupDetails = forwardRef(({ data, onDataChanged }: GroupDetailsProps, ref) => {
  const { groupDescription, groupName, setGroupName, setGroupDescription } = useGroupDetailes(data);

  useImperativeHandle(ref, () => ({
    getGroupDetailes() {
      return { name: groupName, description: groupDescription };
    },
  }));
  return (
    <Box style={Styles.container}>
      <TextFactory>{"What's the name of the group?"}</TextFactory>
      <ReactiveTextInput
        textInputStyle={Styles.input}
        placeholder="Group name"
        label=""
        defaultValue={groupName}
        onEndEditing={e => {
          setGroupName(e.nativeEvent.text);
          onDataChanged && onDataChanged({ name: e.nativeEvent.text, description: groupDescription });
        }}
      />
      <Spacer size={12} />
      <TextFactory>{"What's the description of the group?"}</TextFactory>
      <ReactiveTextInput
        textInputStyle={Styles.input}
        placeholder="Group description"
        label=""
        defaultValue={groupDescription}
        onEndEditing={e => {
          setGroupDescription(e.nativeEvent.text);
          onDataChanged && onDataChanged({ name: groupName, description: e.nativeEvent.text });
        }}
      />
    </Box>
  );
});

export default GroupDetails;
