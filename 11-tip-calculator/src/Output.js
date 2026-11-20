export default function Output({ billAmount, tip }) {
  const totalAmount = billAmount ? billAmount + tip : 0;
  return (
    <div>
      <h3>
        This bill amount is: ${totalAmount}(${billAmount} + ${tip} tip)
      </h3>
    </div>
  );
}
