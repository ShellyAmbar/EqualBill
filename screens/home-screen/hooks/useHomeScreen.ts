import React, { useEffect, useState } from 'react';
import { Group } from '@equalbill/stores/user/interfaces';

const useHomeScreen = () => {
  const [userGroups, setUserGroups] = useState<Group[]>([]);

  useEffect(() => {
    setUserGroups([
      {
        id: '5Jf5gsVQCdneOHA1hmGG',
        admin_id: 'e0IXzxgcTGfNu6YIfmc7Wwjw9HG3',
        expenses: [
          {
            id: '0',
            amount: '423',
            name: 'trsa',
            user_id: 'e0IXzxgcTGfNu6YIfmc7Wwjw9HG3',
          },
          {
            id: '1',
            amount: '424',
            name: 'trsaaaaa',
            user_id: 'e0IXzxgcTGfNu6YIfmc7Wwjw9HG3',
          },
          {
            id: '2',
            amount: '423',
            name: 'jhhjkh',
            user_id: '32AX9v4gJLNSeLGd6nGdTrvMaEe2',
          },
          {
            id: '3',
            amount: '4273',
            name: 'kkljl',
            user_id: '32AX9v4gJLNSeLGd6nGdTrvMaEe2',
          },
        ],
        name: '3333',
        description: '',
        users: [
          { id: 'e0IXzxgcTGfNu6YIfmc7Wwjw9HG3', name: 'Shelly', phone: '0536200540', groups_ids: ['5Jf5gsVQCdneOHA1hmGG'] },
          { id: '32AX9v4gJLNSeLGd6nGdTrvMaEe2', name: 'Michael', phone: '0536200540', groups_ids: ['5Jf5gsVQCdneOHA1hmGG'] },
        ],
      },
    ]);
  }, []);
  return {
    userGroups,
  };
};

export default useHomeScreen;
