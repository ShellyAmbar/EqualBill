import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Contacts from 'expo-contacts';
import { Contact } from 'expo-contacts';
import { User } from '@equalbill/stores/user/interfaces';
const useGroupParticipants = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContacts, setSelectedContacts] = useState<User[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);

  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    console.log('status', status);

    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Image, Contacts.Fields.FirstName, Contacts.Fields.LastName],
      });

      if (data.length > 0) {
        setContacts(data);
        setFilteredContacts(data);
      }
    }
  };
  useEffect(() => {
    getContacts();
  }, []);

  return {
    contacts,
    selectedContacts,
    setSelectedContacts,
    filteredContacts,
    setFilteredContacts,
  };
};

export default useGroupParticipants;
