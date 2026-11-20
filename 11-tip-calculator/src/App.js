import { useState } from "react";
import BillInput from "./BillInput";
import Tip from "./Tip";
import Output from "./Output";
import Reset from "./Reset";
import "./index.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const tip = bill * ((myTip + friendTip) / 2 / 100);

  function handleReset() {
    setBill(0);
    setMyTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill}>
        <label>How much was the bill? </label>
      </BillInput>
      <br />
      <Tip tip={myTip} onSetTip={setMyTip}>
        <label>What percentage tip would you like to give? </label>
      </Tip>
      <br />
      <Tip tip={friendTip} onSetTip={setFriendTip}>
        <label>What percentage tip would your friend like to give? </label>
      </Tip>
      {bill > 0 && (
        <>
          <Output billAmount={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
