import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const initialState = {
    total: 0,
    next: '',
    operation: '',
  };

  // Declaring the useState

  const [state, setState] = useState(initialState);

  // Array destructuring

  const { total, operation, next } = state;

  // This is the click function
  const onClickHandler = (event) => {
    const TargetValue = event.target.value;
    const updateState = calculate(state, TargetValue);
    setState(updateState);
  };

  return (
    <div className="calculatorContainer">
    <h2 className="calculatorH2"> Let's do some maths</h2>
    <div className="calculator">
      <div className="display">
        {total}
        {' '}
        {operation}
        {' '}
        {next}
        {' '}
      </div>
      <button onClick={onClickHandler} type="button" value="AC" className="clear">AC</button>
      <button onClick={onClickHandler} type="button" value="+/-" className="plus-minus">+/-</button>
      <button onClick={onClickHandler} type="button" value="%" className="percent">&#x25;</button>
      <button onClick={onClickHandler} type="button" value="&#247;" className="divide operator">&#247;</button>
      <button onClick={onClickHandler} type="button" value="7" className="number">7</button>
      <button onClick={onClickHandler} type="button" value="8" className="number">8</button>
      <button onClick={onClickHandler} type="button" value="9" className="number">9</button>
      <button onClick={onClickHandler} type="button" value="x" className="multiply operator">&times;</button>
      <button onClick={onClickHandler} type="button" value="4" className="number">4</button>
      <button onClick={onClickHandler} type="button" value="5" className="number">5</button>
      <button onClick={onClickHandler} type="button" value="6" className="number">6</button>
      <button onClick={onClickHandler} type="button" value="-" className="minus operator">-</button>
      <button onClick={onClickHandler} type="button" value="1" className="number">1</button>
      <button onClick={onClickHandler} type="button" value="2" className="number">2</button>
      <button onClick={onClickHandler} type="button" value="3" className="number">3</button>
      <button onClick={onClickHandler} type="button" value="+" className="plus operator">+</button>
      <button onClick={onClickHandler} type="button" value="0" className="number zero">0</button>
      <button onClick={onClickHandler} type="button" value="." className="period">.</button>
      <button onClick={onClickHandler} type="button" value="=" className="equal operator">=</button>
    </div>
    </div>
  );
};

export default Calculator;
