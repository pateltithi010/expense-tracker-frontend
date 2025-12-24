const API = "http://localhost:5000/api/expenses";

export default function ExpenseList({ expenses, fetchExpenses }) {

  const deleteExpense = async (id) => {
    if (!window.confirm("Delete this expense?")) return;
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchExpenses();
  };

  return (
    <ul>
      {expenses.map(exp => (
        <li key={exp._id}>
          {exp.title} - ₹{exp.amount} ({exp.category})
          <button className="delete" onClick={() => deleteExpense(exp._id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
