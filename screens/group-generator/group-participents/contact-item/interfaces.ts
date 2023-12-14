import * as Contacts from 'expo-contacts';
type ContactItemProps = {
  contact: Contacts.Contact;
  onDisSelect: (contact: Contacts.Contact) => void;
  onSelect: (contact: Contacts.Contact) => void;
  selectedIds: string[];
};

export default ContactItemProps;
