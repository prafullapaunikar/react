export default function Tip({ tip, onSetTip, children }) {
  return (
    <div>
      {children}
      <select
        value={tip}
        onChange={(e) => onSetTip(parseFloat(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">Satisfied (5%)</option>
        <option value="10">Very Satisfied (10%)</option>
        <option value="20">Exceptional (20%)</option>
      </select>
    </div>
  );
}
