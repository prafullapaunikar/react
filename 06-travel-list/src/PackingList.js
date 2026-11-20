import { useState } from "react";
import Item from "./Item";
export default function PackingList({
  items,
  onDeleteItem,
  onPackedItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") {
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description),
    );
  }
  if (sortBy === "packed") {
    sortedItems = [...items].sort((a, b) => a.packed - b.packed);
  }

  if (sortBy === "quantity") {
    sortedItems = [...items].sort((a, b) => a.quantity - b.quantity);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onPackedItem={onPackedItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
          <option value="quantity">Sort by Quantity</option>
        </select>
        <button onClick={() => setSortBy("input")}>Clear Sortby</button>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
