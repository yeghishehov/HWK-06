import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        count: +localStorage.getItem('count') || 0
    };
  }

  handleIncreaseCount = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  handleDecreaseCount = () => {
    this.setState(state => ({
      count: state.count - 1
    }));
  };

  handleReset = () => {
    this.setState(state => ({
      count: 0
    }));
  };

  render() {
    const {count} = this.state;
    localStorage.setItem('count', count)
    return (
        <>    
            <div>
               <p className="count"> Counter: {count} </p>
            </div>
            <button disabled={count <= 0} 
                    onClick={this.handleDecreaseCount}> -
            </button>
            <button disabled={count === 0}
                    onClick={this.handleReset}> Reset
            </button>
            <button onClick={this.handleIncreaseCount}> +              
            </button>
        </>
    );
  }
}
export default Counter;