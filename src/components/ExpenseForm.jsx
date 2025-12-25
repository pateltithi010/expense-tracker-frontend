import { useEffect, useState } from "react";

export default function ExpenseForm({ fetchExpenses, editExpense, setEditExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editExpense) {
      setTitle(editExpense.title);
      setAmount(editExpense.amount);
      setCategory(editExpense.category);
    }
  }, [editExpense]);

  const submitExpense = async () => {
    if (editExpense) {
      // UPDATE
      await fetch(
        `https://expense-tracker-backend-1-gxic.onrender.com/api/expenses/${editExpense._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, amount, category }),
        }
      );
      setEditExpense(null);
    } else {
      // CREATE
      await fetch(
        "https://expense-tracker-backend-1-gxic.onrender.com/api/expenses",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, amount, category }),
        }
      );
    }

    setTitle("");
    setAmount("");
    setCategory("");
    fetchExpenses();
  };

  return (
    <div>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Other</option>
      </select>

      <button onClick={submitExpense}>
        {editExpense ? "Update Expense" : "Add Expense"}
      </button>
    </div>
  );
}
