import React from 'react';

class ClassComponent extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      counter:0,
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.increment.bind(this)
  }

  increment = () => {
    this.setState({counter:this.state.counter + 1})
  }

  decrement = () => {
    this.setState({counter:this.state.counter - 1})
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>Add</button>
        <button onClick={this.decrement}>Sub</button>
      </div>
    );
  }
}

export default ClassComponent;