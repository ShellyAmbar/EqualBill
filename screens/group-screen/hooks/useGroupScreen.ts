import { useState } from 'react';
import { VisiblePopup } from './interfaces';
import { User } from '@equalbill/stores/user/interfaces';

const useGroupScreen = () => {
  const [currentVisiblePopup, setCurrentVisiblePopup] = useState(VisiblePopup.NONE);
  const [groupUsers, setGroupUsers] = useState<User[]>([
    {
      name: 'shelly',
      id: '0',
      phone: '54354534544',
      url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg',
    },
    {
      name: 'shelly1',
      id: '1',
      phone: '54354534544',
      url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg',
    },
    {
      name: 'shelly2',
      id: '2',
      phone: '54354534544',
      url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg',
    },
    {
      name: 'shelly3',
      id: '3',
      phone: '54354534544',
      url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg',
    },
    {
      name: 'shelly5',
      id: '4',
      phone: '54354534544',
      url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg',
    },
    {
      name: 'shelly6',
      id: '5',
      phone: '54354534544',
      url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg',
    },
    {
      name: 'shelly7',
      id: '6',
      phone: '54354534544',
      url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg',
    },
    {
      name: 'shelly8',
      id: '7',
      phone: '54354534544',
      url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg',
    },
    {
      name: 'shelly8',
      id: '8',
      phone: '54354534544',
      url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg',
    },
    {
      name: 'shelly9',
      id: '9',
      phone: '54354534544',
      url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg',
    },
  ]);
  const [selectedUser, setSelectedUser] = useState<User>(groupUsers[0]);
  return {
    currentVisiblePopup,
    setCurrentVisiblePopup,
    groupUsers,
    setGroupUsers,
    selectedUser,
    setSelectedUser,
  };
};

export default useGroupScreen;
