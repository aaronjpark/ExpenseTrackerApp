import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://expense-tracker-app-0304-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
