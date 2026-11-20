export default function BillInput({ bill, onSetBill, children }) {
  return (
    <div>
      {children}
      <input
        type="number"
        value={bill}
        onChange={(e) => onSetBill(parseFloat(e.target.value))}
      />
    </div>
  );
}
