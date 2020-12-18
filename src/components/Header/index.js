import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.activeLasers = this.activeLasers.bind(this)
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  activeLasers () {
    console.log(this)
  }

  render() {
    return (
      <div>
        <h1>Hello, World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.activeLasers}>
          Activate Lasers
        </button>
      </div>
    )
  }
}

export default Clock