import React from "react";
import { useState } from "react";

function Counter() {
  const [step,setStep]=useState(1)
  const [count,setCount]=useState(0)

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={()=> setStep(c=>c-1)}>-</button>
        <span>Steps: {step}</span>
        <button onClick={()=> setStep(c=>c+1)}>+</button>
      </div>
      <div>
        <button onClick={()=> setCount(c=>c-step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={()=> setCount(c=>c+step)}>+</button>
      </div>
      <div>
       <p> {date.toDateString()}</p>
      </div>
    </>
  );
}

export default Counter;
