import React from 'react'

class Timer extends React.Component {

  componentDidUpdate(prevProps) {
    console.log(prevProps)
  }
  
  render() {
    return (
      <div onClick={this.props.onTimerClick}>{this.props.seconds}</div>
    )
  }
}

export default Timer
