import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  render() {
    return (
      <>
      element;
        <h3>Count value is : {this.state.counter} </h3>
        <button onClick={() => this.increment()}>Click Here</button>
        <br />
        <br />
        <button onClick={() => this.decrement()}>Click Here</button>
      </>
    );
  }
}


const element = React.createElement('h1',{className:"Muhammad"},"I am trying to learn react as much a possible i really hope I learn it and be a master at it now and forever more")
export default Counter;