import { Expense } from '@equalbill/stores/user/interfaces';
import React, { useState } from 'react';

const useExpenseForm = (expense: Expense) => {
  const [expenseToEdit, setExpenseToEdit] = useState<Expense>(expense);

  return {
    expenseToEdit,
    setExpenseToEdit,
  };
};

export default useExpenseForm;
