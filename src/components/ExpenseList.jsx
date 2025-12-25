import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, fetchExpenses, setEditExpense }) {
  return (
    <div>
      {expenses.map(exp => (
        <ExpenseItem
          key={exp._id}
          expense={exp}
          fetchExpenses={fetchExpenses}
          setEditExpense={setEditExpense}
        />
      ))}
    </div>
  );
}
