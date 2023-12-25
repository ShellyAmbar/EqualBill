import { useEffect, useState } from 'react';
import { UseGroupScreenProps, VisiblePopup } from './interfaces';
import { Expense, Group, User } from '@equalbill/stores/user/interfaces';

const useGroupScreen = ({ groupItem }: UseGroupScreenProps) => {
  const [group, setGroup] = useState<Group>(groupItem);
  const [currentVisiblePopup, setCurrentVisiblePopup] = useState(VisiblePopup.NONE);

  const [selectedUser, setSelectedUser] = useState<User | null>(group.users?.length > 0 ? group.users[0] : null);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expenseToEdit, setExpenseToEdit] = useState<Expense>();
  useEffect(() => {
    const userExpenses = group.expenses?.filter(expense => expense.user_id === selectedUser?.id);

    setExpenses(userExpenses);
  }, [selectedUser]);

  const deleteExpense = (expenseToDelete: Expense) => {
    const groupExpensesFiltered = group.expenses?.filter(expense => expense.id !== expenseToDelete.id);
    group.expenses = [...groupExpensesFiltered];
    setGroup(group);
    const userExpenses = groupExpensesFiltered?.filter(expense => expense.user_id === selectedUser?.id);
    setExpenses(userExpenses);
  };
  const updateExpense = (expense: Expense) => {
    const expenseToEditIndex = group.expenses?.findIndex(expense => expense.id === expense.id);
    group.expenses[expenseToEditIndex] = expense;
    setGroup(group);
  };
  const addExpense = (expense: Expense) => {
    expense.id = (group.expenses.length - 1).toString();
    const updateList = [...group.expenses, expense];
    group.expenses = [...updateList];
    setGroup(group);
    const userExpenses = updateList?.filter(expense => expense.user_id === selectedUser?.id);
    setExpenses(userExpenses);
  };

  return {
    currentVisiblePopup,
    setCurrentVisiblePopup,
    selectedUser,
    setSelectedUser,
    expenses,
    expenseToEdit,
    setExpenseToEdit,
    deleteExpense,
    updateExpense,
    addExpense,
    group,
    setGroup,
  };
};

export default useGroupScreen;
