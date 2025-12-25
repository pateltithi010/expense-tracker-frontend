import { useState } from "react";

export default function ItemForm({ fetchItems }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const addItem = async () => {
    await fetch("https://expense-tracker-backend-1-gxic.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, amount }),
    });

    setTitle("");
    setAmount("");
    fetchItems();
  };

  return (
    <>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </>
  );
}
