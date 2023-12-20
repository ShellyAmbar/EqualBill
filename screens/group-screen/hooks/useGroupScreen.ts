import { useEffect, useState } from 'react';
import { UseGroupScreenProps, VisiblePopup } from './interfaces';
import { Expense, Group, User } from '@equalbill/stores/user/interfaces';

const useGroupScreen = ({ groupItem }: UseGroupScreenProps) => {
  const [group, setGroup] = useState<Group>(groupItem);
  const [currentVisiblePopup, setCurrentVisiblePopup] = useState(VisiblePopup.NONE);
  const [groupUsers, setGroupUsers] = useState<User[]>([
    {
      name: 'shelly',
      id: 'e0IXzxgcTGfNu6YIfmc7Wwjw9HG3',
      phone: '54354534544',
      url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg',
    },
    {
      name: 'shelly1',
      id: '32AX9v4gJLNSeLGd6nGdTrvMaEe2',
      phone: '54354534544',
      url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg',
    },
  ]);
  const [selectedUser, setSelectedUser] = useState<User>(groupUsers[0]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expenseToEdit, setExpenseToEdit] = useState<Expense>();
  useEffect(() => {
    const userExpenses = group.expenses?.filter(expense => expense.user_id === selectedUser.id);

    setExpenses(userExpenses);
    console.log('userExpenses', userExpenses);
  }, [selectedUser]);

  const deleteExpense = (expenseToDelete: Expense) => {
    const groupExpensesFiltered = group.expenses?.filter(expense => expense.id !== expenseToDelete.id);
    group.expenses = [...groupExpensesFiltered];
    setGroup(group);
    const userExpenses = groupExpensesFiltered?.filter(expense => expense.user_id === selectedUser.id);
    setExpenses(userExpenses);
  };
  const updateExpense = (expense: Expense) => {
    const expenseToEditIndex = group.expenses?.findIndex(expense => expense.id === expense.id);
    group.expenses[expenseToEditIndex] = expense;
    setGroup(group);
  };
  const addExpense = (expense: Expense) => {
    const updateList = [...group.expenses, expense];
    group.expenses = [...updateList];
    setGroup(group);
    const userExpenses = updateList?.filter(expense => expense.user_id === selectedUser.id);
    setExpenses(userExpenses);
  };

  return {
    currentVisiblePopup,
    setCurrentVisiblePopup,
    groupUsers,
    setGroupUsers,
    selectedUser,
    setSelectedUser,
    expenses,
    expenseToEdit,
    setExpenseToEdit,
    deleteExpense,
    updateExpense,
    addExpense,
  };
};

export default useGroupScreen;
