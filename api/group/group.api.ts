import { Expense } from '@equalbill/stores/user/interfaces';

const getGroupData = async () => {};

const updateGroupData = async () => {};
const deleteGroup = async () => {};
const addExpenseToGroup = async (groupId: string, expense: Expense) => {};
const deleteExpenseFromGroup = async (groupId: string, expenseId: string) => {};

const editExpenseFromGroup = async (groupId: string, expense: Expense) => {};

export { getGroupData, updateGroupData, deleteGroup, addExpenseToGroup, deleteExpenseFromGroup, editExpenseFromGroup };
