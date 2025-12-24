import { useState } from "react";

const API = "http://localhost:5000/api/expenses";

export default function ExpenseForm({ fetchExpenses }) {
  const [form, setForm] = useState({ title: "", amount: "", category: "" });
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    setMsg("Expense added successfully!");
    setForm({ title: "", amount: "", category: "" });
    fetchExpenses();
  };

  return (
    <>
      <form onSubmit={submit}>
        <input placeholder="Title" value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Amount" type="number" value={form.amount}
          onChange={e => setForm({ ...form, amount: e.target.value })} />
        <input placeholder="Category" value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })} />
        <button className="add">Add Expense</button>
      </form>
      {msg && <p className="success">{msg}</p>}
    </>
  );
}
