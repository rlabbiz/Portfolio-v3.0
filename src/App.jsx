import './App.css';
import { useEffect, useState } from 'react';


function App() {

  console.log('App component render');

  const [count, setCount] = useState(0);
  
  const handleIncress = () => {
    setCount( prev => prev + 1);
  }

  const handleDecress = () => {
    setCount( prev => prev - 1);
  }

  useEffect(() => {
    console.log('useEffect');
  }), [count];

  return (
    <div className="App">
      <button onClick={handleDecress}>-</button>
      <span>{count}</span>
      <button onClick={handleIncress}>+</button>
    </div>
  );
}

export default App;
