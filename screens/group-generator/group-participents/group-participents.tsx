import React, { forwardRef, useImperativeHandle } from 'react';
import Styles from './group-participents.styles';
import { Box } from '@equalbill/components/controllers/box/box';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import SearchBar from '@equalbill/components/search-bar/search-bar';
import useGroupParticipants from './hooks/useGroupParticipants';
import { FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';
import ContactItem from './contact-item/contact-item';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import HorizontalUsersSlider from '@equalbill/components/horizontal-users-slider/horizontal-users-slider';
import { User } from '@equalbill/stores/user/interfaces';
import GroupParticipentsProps from './interfaces';
const GroupParticipents = forwardRef(({ groupSelectedContacts, onGroupSelectedContactsChanged }: GroupParticipentsProps, ref) => {
  const { contacts, setSelectedContacts, selectedContacts, filteredContacts, setFilteredContacts } = useGroupParticipants({ groupSelectedContacts });

  useImperativeHandle(ref, () => ({
    getParticipents() {
      return {
        selectedContacts,
      };
    },
  }));

  const updateSelectedContacts = ({ contact, isAdd }: { contact: User; isAdd: boolean }) => {
    if (isAdd) {
      if (!selectedContacts?.find(item => item.id === contact.id)) {
        setSelectedContacts(selected => {
          onGroupSelectedContactsChanged && onGroupSelectedContactsChanged([...selected, contact]);
          return [...selected, contact];
        });
      }
    } else {
      if (selectedContacts?.find(item => item.id === contact.id)) {
        setSelectedContacts(selected => {
          const filteredList = selected.filter(item => item.id !== contact.id);
          onGroupSelectedContactsChanged && onGroupSelectedContactsChanged([...filteredList]);
          return [...filteredList];
        });
      }
    }
  };
  return (
    <Box style={Styles.container}>
      <TextFactory>{"Select the group's members:"}</TextFactory>
      <Spacer size={16} />
      <SearchBar
        onPressDelete={() => {
          setFilteredContacts(contacts);
        }}
        onPressSearch={searchTerm => {
          console.log('searchTerm', searchTerm);
          const filteredList = contacts.filter(item => {
            const isIncluded =
              item.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) || item.lastName?.toLowerCase().includes(searchTerm.toLowerCase());
            return isIncluded ? item : null;
          });
          console.log(filteredList);

          setFilteredContacts([...filteredList]);
        }}
      />

      {selectedContacts?.length > 0 && <Spacer size={16} />}
      <HorizontalUsersSlider
        onPressDeleteItem={item => {
          updateSelectedContacts({ contact: item, isAdd: false });
        }}
        style={{ width: '100%' }}
        data={selectedContacts}
      />
      <Spacer size={24} />
      <Box style={Styles.list}>
        <FlatList
          style={Styles.list}
          contentContainerStyle={Styles.list_content}
          data={filteredContacts}
          renderItem={({ item, index }: { item: Contacts.Contact; index: number }) => (
            <ContactItem
              selectedIds={selectedContacts.map(contact => contact.id)}
              key={item.id}
              contact={item}
              onSelect={(contact: Contacts.Contact) => {
                console.log(contact.firstName);
                updateSelectedContacts({
                  contact: {
                    id: contact.id,
                    name: contact.firstName ?? '' + ' ' + contact.lastName ?? '',
                    phone: contact.phoneNumbers ? contact.phoneNumbers[0].number : '',
                    url: contact.image?.uri
                      ? contact.image.uri
                      : 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg',
                  },
                  isAdd: true,
                });
              }}
              onDisSelect={(contact: Contacts.Contact) => {
                console.log(contact.firstName);
                updateSelectedContacts({
                  contact: {
                    id: contact.id,
                    name: contact.firstName ?? '' + ' ' + contact.lastName ?? '',
                    phone: contact.phoneNumbers ? contact.phoneNumbers[0].number : '',
                    url: contact.image?.uri
                      ? contact.image.uri
                      : 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg',
                  },
                  isAdd: false,
                });
              }}
            />
          )}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </Box>
    </Box>
  );
});

export default GroupParticipents;
