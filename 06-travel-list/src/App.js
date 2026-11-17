import { useState } from "react";

export default function App() {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items")) || [];

  const [items, setItems] = useState(itemsFromLocalStorage);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    localStorage.setItem("items", JSON.stringify([...items, item]));
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    localStorage.setItem(
      "items",
      JSON.stringify(items.filter((item) => item.id !== id)),
    );
  }

  function handlePackedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
    localStorage.setItem(
      "items",
      JSON.stringify(
        items.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item,
        ),
      ),
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackedItem={handlePackedItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away🧳</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What to pack for your 😎 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onPackedItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onPackedItem={onPackedItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onPackedItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={(e) => onPackedItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have 0 items on your list, and you already packed 0 (0%)</em>
    </footer>
  );
}
