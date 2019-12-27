import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        count: 0
    };
  }
  handleIncreaseCount = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };
  handleDecreaseCount = () => {
    if(this.state.count > 0){
        this.setState(state => ({
        count: state.count - 1
        }));
    }
  };
  handleReset = () => {
    this.setState(state => ({
      count: 0
    }));
  };

  render() {
    return (
        <>    
            <div>
            <p className="count"> Counter: {this.state.count} </p>
            </div>
            <button className="dec" onClick={this.handleDecreaseCount}>-</button>
            <button className="res" onClick={this.handleReset}>Reset</button>
            <button className="inc" onClick={this.handleIncreaseCount}>+</button>
        </>
    );
  }
}
export default Counter;