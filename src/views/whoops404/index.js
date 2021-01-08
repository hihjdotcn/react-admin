import React from 'react'

class Whoops404 extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    const pathname = window.location.hash.substr(1)
    return (
      <div className="whoose-404">
        <h1>Resource not found at '{pathname}'</h1>
      </div>
    )
  }
}

export default Whoops404