import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses }) {
  return (
    <div>
      {expenses.length === 0 ? (
        <p>No expenses added</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem key={expense._id} expense={expense} />
        ))
      )}
    </div>
  );
}
