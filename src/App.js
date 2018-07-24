import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      seconds: 0,
      timeSplits: []
    }
  }

  secondCount = () => {
    let currentSeconds = this.state.seconds
    this.setState({
      seconds: currentSeconds + 1
    })
  }

  startTimer = () => {
    this.timer = setInterval(this.secondCount, 1000)
  }


  render() {
    return (
      <div className="App">
        <Timer seconds={this.state.seconds} startTimer={this.startTimer}/>
      </div>
    );
  }
}

export default App;
