export default function ExpenseItem({ expense }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h4>{expense.title}</h4>
      <p>₹ {expense.amount}</p>
      <small>Category: {expense.category}</small>
    </div>
  );
}
