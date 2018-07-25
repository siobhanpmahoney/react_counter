import React from 'react'
import SplitListItem from './SplitListItem'

class SplitListContainer extends React.Component {


  render() {
    if (this.props.timeSplits.length > 0) {
      return (
        <ul>
        {this.props.timeSplits.map((split) => {
          return <SplitListItem highlightSplit={this.props.highlightSplit} split={split} key={split} highlightedSplitValue={this.props.highlightedSplitValue == split} />
        })}
      </ul>
)
    }  else {
      return (
        <div>No splits yet!</div>
      )
    }

  }
}

export default SplitListContainer
