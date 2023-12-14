import { Image } from 'react-native';
import React, { useEffect } from 'react';
import { Box } from '@equalbill/components/controllers/box/box';
import Styles from './contact-item.styles';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import CheckBoxFactory from '@equalbill/components/factories/check-box-factory/check-box-factory';
import ContactItemProps from './interfaces';
import useContactItem from './hooks/useContactItem';

const ContactItem = ({ contact, onSelect, onDisSelect, selectedIds }: ContactItemProps) => {
  const { isChecked, setIsChecked } = useContactItem();

  useEffect(() => {
    if (!selectedIds.find(id => id === contact.id)) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }, [JSON.stringify(selectedIds)]);

  return (
    <Box style={Styles.item}>
      <CheckBoxFactory
        type="circular"
        status={isChecked}
        onPress={() => {
          setIsChecked(isChecked => {
            if (isChecked) {
              onDisSelect(contact);
            } else {
              onSelect(contact);
            }

            return !isChecked;
          });
        }}
      />
      <Image style={Styles.image} source={contact.image ? { uri: contact.image.uri } : require('assets/images/person.png')} />
      <Box style={Styles.column}>
        <TextFactory style={Styles.title} type="h4">{`${contact.firstName ?? ''} ${contact.lastName ?? ''}`}</TextFactory>

        <TextFactory style={Styles.subtitle} type="h5">{`${contact.phoneNumbers ? contact.phoneNumbers[0].number : ''}`}</TextFactory>
      </Box>
    </Box>
  );
};

export default ContactItem;
