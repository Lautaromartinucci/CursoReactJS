import React,{useState} from 'react'

const ItemCount = () => {
  const [counter, setCounter, ] = useState(1);
 
  const increase = () => {
    if (counter < 5) { 
    setCounter(count => count + 1);
    }
  };
 
  const decrease = () => {
    if (counter > 1) {
      setCounter(count => count - 1);
    }
  };
 
  const reset = () =>{
    setCounter(1)
  }
 
  return (
    <div className="counter">
      <h1>contador</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default ItemCount