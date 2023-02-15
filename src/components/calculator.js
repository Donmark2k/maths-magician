import React from 'react';
import calculate from '../logic/calculate';
// import operate from '../logic/operate';

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      total: 0,
      next: '',
      operation: '',
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  } 

  onClickHandler(event) {
    const targetValue = event.target.value;
    this.setState((state) => calculate({
      next: state.next,
      total: state.total,
      operation: state.operation,
    }, targetValue));
  }
render () {
  const { total, operation, next } = this.state;
return (
<div className="calculator">
    <div className="display">
      0
    </div>
    <button type="button" className="clear">AC</button>
    <button type="button" className="plus-minus">+/-</button>
    <button type="button" className="percent">%</button>
    <button type="button" className="divide operator">&#247;</button>
    <button type="button" className="number">7</button>
    <button type="button" className="number">8</button>
    <button type="button" className="number">9</button>
    <button type="button" className="multiply operator">*</button>
    <button type="button" className="number">4</button>
    <button type="button" className="number">5</button>
    <button type="button" className="number">6</button>
    <button type="button" className="minus operator">-</button>
    <button type="button" className="number">1</button>
    <button type="button" className="number">2</button>
    <button type="button" className="number">3</button>
    <button type="button" className="plus operator">+</button>
    <button type="button" className="number zero">0</button>
    <button type="button" className="period">.</button>
    <button type="button" className="equal operator">=</button>

  </div>
)
}

}


export default Calculator;
