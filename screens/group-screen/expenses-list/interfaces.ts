import { Expense } from '@equalbill/stores/user/interfaces';

type ExpensesListProps = {
  data: Expense[];
  onDeleteExpense: (expense: Expense) => void;
  onEditExpense: (expense: Expense) => void;
};
export default ExpensesListProps;
