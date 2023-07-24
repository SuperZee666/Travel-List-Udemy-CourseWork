export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding Items to your List 👊</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage =
    numItems > 0 ? ((numPacked / numItems) * 100).toFixed(2) : 0;

  return (
    <footer className="stats">
      <em>
        {percentage === "100.00"
          ? "You are Ready to Go 💪 🚀"
          : `${percentage}% packed. You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}% packed)`}
      </em>
    </footer>
  );
}
