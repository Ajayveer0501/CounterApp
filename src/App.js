import './App.css';
import React, {useState} from "react"


function App() {
  const [count, setCount]=useState(0)
const increment=()=>{
setCount((prevVal)=>(
   prevVal+1
))
}
const decrement=()=>{
  setCount((prevVal)=>(
     prevVal-1
  ))
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

    </div>
  );
}

export default App;
