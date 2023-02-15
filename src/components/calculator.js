import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
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

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calculator">
        <div className="display">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
          {' '}
        </div>
        <button onClick={this.onClickHandler} type="button" value="AC" className="clear">AC</button>
        <button onClick={this.onClickHandler} type="button" value="+/-" className="plus-minus">+/-</button>
        <button onClick={this.onClickHandler} type="button" value="%" className="percent">&#x25;</button>
        <button onClick={this.onClickHandler} type="button" value="&#247;" className="divide operator">&#247;</button>
        <button onClick={this.onClickHandler} type="button" value="7" className="number">7</button>
        <button onClick={this.onClickHandler} type="button" value="8" className="number">8</button>
        <button onClick={this.onClickHandler} type="button" value="9" className="number">9</button>
        <button onClick={this.onClickHandler} type="button" value="x" className="multiply operator">&times;</button>
        <button onClick={this.onClickHandler} type="button" value="4" className="number">4</button>
        <button onClick={this.onClickHandler} type="button" value="5" className="number">5</button>
        <button onClick={this.onClickHandler} type="button" value="6" className="number">6</button>
        <button onClick={this.onClickHandler} type="button" value="-" className="minus operator">-</button>
        <button onClick={this.onClickHandler} type="button" value="1" className="number">1</button>
        <button onClick={this.onClickHandler} type="button" value="2" className="number">2</button>
        <button onClick={this.onClickHandler} type="button" value="3" className="number">3</button>
        <button onClick={this.onClickHandler} type="button" value="+" className="plus operator">+</button>
        <button onClick={this.onClickHandler} type="button" value="0" className="number zero">0</button>
        <button onClick={this.onClickHandler} type="button" value="." className="period">.</button>
        <button onClick={this.onClickHandler} type="button" value="=" className="equal operator">=</button>

      </div>
    );
  }
}

export default Calculator;
