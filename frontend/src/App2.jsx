import React, { useEffect, useState } from "react";

const App2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect has run");
  }, [count]);

  console.log("rerender has happened");
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default App2;
