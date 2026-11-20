export default function Stats({ items }) {
  localStorage.setItem("items", JSON.stringify([...items]));
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 📝</em>
      </p>
    );
  }
  const packedItems = items.filter((item) => item.packed).length;
  const packedItemsPecentage = Math.round((packedItems / items.length) * 100);

  return (
    <footer className="stats">
      <em>
        {packedItemsPecentage === 100
          ? "You got everything! ready to go 🚘"
          : `💼 You have ${items.length} items on your list, and you already packed 
          ${packedItems} (${packedItemsPecentage}%)`}
      </em>
    </footer>
  );
}
