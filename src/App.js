import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
//let count= 0;
//count=7;
const [count , setCount] = useState(0);
const increment =() =>{
setCount(count+1);}

const decrease =() =>{
  setCount(count-1);}




  return (
    <div className="App">
      <h1>Counter App</h1>
     <h5>{count}</h5>
     <button onClick={increment}>add</button>
     <button onClick={decrease}>Minus</button>
    </div>
  );
}
export default App;
