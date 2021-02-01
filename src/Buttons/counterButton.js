import React, { useState } from "react";

function CountButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me!</button>
      <button onClick={() => setCount(0)}>Reset counter</button>
    </div>
  );
}

export default CountButton;
