import React from 'react'

class SplitListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      highlighted: false
    }
  }

  componentDidMount() {
    if (this.props.highlightedSplitValue) {
      this.setState({
        highlighted: true
      })
    } else {
      this.setState({
        highlighted: false
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.highlightedSplitValue != this.props.highlightedSplitValue) {
      if (this.props.highlightedSplitValue) {
        this.setState({
          highlighted: true
        }, this.toggleHighlightStyle)
      } else {
        this.setState({
          highlighted: false
        }, this.toggleHighlightStyle)
      }
    }
  }

  toggleHighlightStyle = () => {
    if (this.state.highlighted) {
        return "highlighted"
    } else {
      return "not-highlighted"
    }
  }

  render() {
    return (
      <li onClick={() => this.props.highlightSplit(this.props.split)} className={this.toggleHighlightStyle()}>{this.props.split}</li>
    )
  }
}

export default SplitListItem
