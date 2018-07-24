import React from 'react'

class Timer extends React.Component {
  render() {
    return (
      <div onClick={this.props.startTimer}>{this.props.seconds}</div>
    )
  }
}

export default Timer
