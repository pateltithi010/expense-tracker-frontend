export default function ExpenseList({ expenses }) {
  return (
    <ul>
      {expenses.map((exp) => (
        <li key={exp._id}>
          {exp.title} - ₹{exp.amount}
        </li>
      ))}
    </ul>
  );
}
