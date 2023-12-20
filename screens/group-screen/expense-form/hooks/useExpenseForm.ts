import { Expense } from '@equalbill/stores/user/interfaces';
import React, { useState } from 'react';

const useExpenseForm = (expense?: Expense) => {
  const [expenseToEdit, setExpenseToEdit] = useState<Expense>(
    expense ? expense : { id: '0', name: '', amount: '', user_id: 'e0IXzxgcTGfNu6YIfmc7Wwjw9HG3' },
  );

  return {
    expenseToEdit,
    setExpenseToEdit,
  };
};

export default useExpenseForm;
