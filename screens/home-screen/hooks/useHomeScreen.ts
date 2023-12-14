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
            amount: '423',
            name: 'trsa',
            user_id: 'e0IXzxgcTGfNu6YIfmc7Wwjw9HG3',
          },
        ],
        name: '3333',
        users_ids: ['e0IXzxgcTGfNu6YIfmc7Wwjw9HG3', '32AX9v4gJLNSeLGd6nGdTrvMaEe2'],
      },
      {
        id: '6SZL8Q0l4DzkOOtRbn3R',
        admin_id: 'e0IXzxgcTGfNu6YIfmc7Wwjw9HG3',
        expenses: [
          {
            amount: '423',
            name: 'trsa',
            user_id: 'e0IXzxgcTGfNu6YIfmc7Wwjw9HG3',
          },
        ],
        name: '4444',
        users_ids: ['e0IXzxgcTGfNu6YIfmc7Wwjw9HG3', '32AX9v4gJLNSeLGd6nGdTrvMaEe2'],
      },
      {
        id: '6SZL8Q0l4DzkOOtRbn4R',
        admin_id: 'e0IXzxgcTGfNu6YIfmc7Wwjw9HG3',
        expenses: [
          {
            amount: '423',
            name: 'trsa',
            user_id: 'e0IXzxgcTGfNu6YIfmc7Wwjw9HG3',
          },
        ],
        name: '5555',
        users_ids: ['e0IXzxgcTGfNu6YIfmc7Wwjw9HG3', '32AX9v4gJLNSeLGd6nGdTrvMaEe2'],
      },
      {
        id: '6SZL8Q0l4DzkOOtRbn5R',
        admin_id: 'e0IXzxgcTGfNu6YIfmc7Wwjw9HG3',
        expenses: [
          {
            amount: '423',
            name: 'trsa',
            user_id: 'e0IXzxgcTGfNu6YIfmc7Wwjw9HG3',
          },
        ],
        name: '6666',
        users_ids: ['e0IXzxgcTGfNu6YIfmc7Wwjw9HG3', '32AX9v4gJLNSeLGd6nGdTrvMaEe2'],
      },
    ]);
  }, []);
  return {
    userGroups,
  };
};

export default useHomeScreen;
