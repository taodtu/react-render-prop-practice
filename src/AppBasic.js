import React, { Component } from 'react';

const App = () => (
 <div>
  <h1>Currency Converter</h1>
  <Amount />
 </div>
);

class Amount extends Component {
 constructor(props) {
  super(props);

  this.state = {
   amount: 0,
  };
 }

 onIncrement = () => {
  this.setState(state => ({ amount: state.amount + 1 }));
 };

 onDecrement = () => {
  this.setState(state => ({ amount: state.amount - 1 }));
 };

 render() {
  return (
   <div>
    <span>US Dollar: {this.state.amount} </span>

    <button type="button" onClick={this.onIncrement}>
     +
        </button>
    <button type="button" onClick={this.onDecrement}>
     -
        </button>
    <Euro amount={this.state.amount} />
    <Pound amount={this.state.amount} />
   </div>
  );
 }
};
const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;

const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

export default App;