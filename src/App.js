import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer'
import SplitListContainer from './components/SplitListContainer'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      seconds: 0,
      timeSplits: [],
      highlightedSplitValue: null
    }
  }

  secondCount = () => {
    let currentSeconds = this.state.seconds
    this.setState({
      seconds: currentSeconds + 1
    })
  }

  onTimerClick = () => {
    if (this.state.seconds === 0) {
      return this.startTimer()
    } else {
      return this.recordSplit()
    }
  }

  startTimer = () => {
    this.timer = setInterval(this.secondCount, 1000)
  }

  recordSplit = () => {
    let currentTimeSplits = this.state.timeSplits.splice(0)
    let currentSeconds = this.state.seconds
    this.setState({
      timeSplits: [...currentTimeSplits, currentSeconds]
    })
  }

  highlightSplit = (split) => {
    console.log("in highlightSplit, split: ", split)
    this.setState({
      highlightedSplitValue: split
    }, console.log(this.state.highlightedSplitValue))
  }


  render() {
    return (
      <div className="App">
        <Timer seconds={this.state.seconds} onTimerClick={this.onTimerClick}/>
        <SplitListContainer timeSplits={this.state.timeSplits} highlightSplit={this.highlightSplit} highlightedSplitValue={this.state.highlightedSplitValue} />
      </div>
    );
  }
}

export default App;
