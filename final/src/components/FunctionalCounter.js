import { useState } from "react";
function FunctionalCounter() {
  const [counter, setCounter] = useState(0);
  const increment =() => {
    setCounter(counter + 1)
  }
  return (
    <div>
      This is my special counter App
      <div>Counter value: {counter}</div>
      <button onClick={increment}>Tap Me Now</button>
    </div>
  );
}
export default FunctionalCounter;
