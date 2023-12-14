type Expense = {
  amount: string;
  name: string;
  user_id: string;
};

type Group = {
  id: string;
  admin_id: string;
  expenses: Expense[];
  name: string;
  users_ids: string[];
  url?: string;
};

type User = {
  phone?: string;
  id: string;
  name: string;
  url?: string;
  groups_ids?: string[];
};

export { User, Group, Expense };
