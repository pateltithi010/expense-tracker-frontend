export default function ExpenseItem({ expense, fetchExpenses, setEditExpense }) {
  const deleteExpense = async () => {
    await fetch(
      `https://expense-tracker-backend-1-gxic.onrender.com/api/expenses/${expense._id}`,
      { method: "DELETE" }
    );
    fetchExpenses();
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h4>{expense.title}</h4>
      <p>₹ {expense.amount}</p>
      <small>Category: {expense.category}</small>
      <br />

      <button onClick={() => setEditExpense(expense)}>Edit</button>
      <button onClick={deleteExpense} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
}

