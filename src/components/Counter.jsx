// 1. Contador Simples (Simple Counter)

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Incrementa o contador
  const increment = () => setCount(count + 1);

  // Decrementa o contador, garantindo que não fique menor que zero
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <div class="flex flex-col gap-5 mt-5">
        <h1 class="max-md:text-5xl">1 . Simple Counter</h1>
      </div>
      <div class="flex flex-col gap-5">
        <h1 class="text-10xl">Counter: {count}</h1>
        <div class="button-group" style={{margin:"20px"}}>
          <button style={{marginRight:"10px"}} onClick={increment}>Add +</button>
          <button onClick={decrement}>Substract -</button>
        </div>
      </div>
    </div>  
  );
};

export default Counter;
