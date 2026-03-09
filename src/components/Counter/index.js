import React, {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => this.setState(prev => ({count: prev.count + 1}))
  onDecrement = () => this.setState(prev => ({count: prev.count - 1}))

  render() {
    const {count} = this.state
    return (
      <div className="counter">
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div className="count">{count}</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
