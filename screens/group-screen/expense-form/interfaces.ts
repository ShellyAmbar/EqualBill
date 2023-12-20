import { Expense } from '@equalbill/stores/user/interfaces';

type ExpenseFormProps = {
  expense?: Expense;
  onConfirm: (expense: Expense) => void;
  titleText: string;
  buttonText: string;
};
export default ExpenseFormProps;
