import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5
    };
  }

  incrementCount = () => {

      let new_count = this.state.count+1
      this.setState({
        count: new_count
      });

  };

  render() {
    return (
      <div className="counter">

        <h1>{this.state.count}</h1>

        {<br></br>}

        {<button onClick = {this.incrementCount}>Click</button>}

      </div>
    );
  }
}

export default Counter;
