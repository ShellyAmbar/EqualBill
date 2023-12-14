import React, { useEffect, useState } from 'react';
import { Box } from '@equalbill/components/controllers/box/box';
import styles from './select-contacts-view.styles';
import { FlatList, Image } from 'react-native';
import * as Contacts from 'expo-contacts';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import { GlobalColors } from '@equalbill/styles/global-colors';
import CheckBoxFactory from '@equalbill/components/factories/check-box-factory/check-box-factory';
const SelectContactsView = () => {
  const [contacts, setContacts] = useState([]);
  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    console.log('status', status);

    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [
          Contacts.Fields.PhoneNumbers,
          Contacts.Fields.Image,
          Contacts.Fields.FirstName,
          Contacts.Fields.LastName,
        ],
      });

      if (data.length > 0) {
        setContacts(data);
      }
    }
  };
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <Box style={styles.container}>
      <FlatList
        style={{ width: '100%', height: '100%' }}
        contentContainerStyle={{ width: '100%' }}
        data={contacts}
        renderItem={({ item, index }: { item: Contacts.Contact; index: number }) => (
          <Box
            style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginBottom: 20 }}
          >
            <CheckBoxFactory type="circular" />
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                borderColor: GlobalColors.Border,
                borderWidth: 1,
                marginEnd: 10,
              }}
              source={item.image ? { uri: item.image.uri } : require('assets/images/person.png')}
            />
            <Box style={{ flexDirection: 'column', width: '100%' }}>
              <TextFactory
                style={{ color: GlobalColors.TextColors.primary }}
                type="h3"
              >{`${item.firstName} ${item.lastName}`}</TextFactory>
              <TextFactory
                style={{ color: GlobalColors.TextColors.primary }}
                type="h3"
              >{`${item.phoneNumbers[0].number}`}</TextFactory>
            </Box>
          </Box>
        )}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </Box>
  );
};

export default SelectContactsView;
