
import './App.css';
import React from "react";

class App extends React.Component{

  state = {
    text: "Dean",
    counter: 0,
  }

  increase = () => {
    this.setState ({
      counter: this.state.counter + 1
    })

  }

  decrease = () => {
    this.setState ({
      counter: this.state.counter - 1
    })

  }

  sayHello = greetings => {
    alert(greetings + this.state.text) 
  }


  render(){
    return(
      <div className='Counter'>
        <h2>Dean's Counter Value: {this.state.counter}</h2>
        <div>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
        </div>
        <div>
          <button onClick={() => this.sayHello('Good Evening ')}>SayHello</button>
        </div>
      </div>
    )
  }
}

export default App; 