import { useState } from "react";
// import App from "./App";
import Item from "./Item"; // Assuming the Item component is imported here

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input"); // Set a default value for sorting options

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);

  // Corrected the onChange handler to use setSortBy instead of handleSortBy
  const handleSortBy = (value) => {
    setSortBy(value);
  };

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            item={item}
          />
        ))}
      </ul>

      <div className="actions">
        {/* Make sure the class name matches the CSS */}
        <select value={sortBy} onChange={(e) => handleSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={onClearList}>Reset</button>{" "}
        {/* Corrected label to "Reset" */}
      </div>
    </div>
  );
}
