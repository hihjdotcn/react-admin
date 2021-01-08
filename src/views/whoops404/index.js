import React from 'react'

const pathname = ({location}) => {
  return location.pathname
}

class Whoops404 extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    // const pathname = (this.props.) => {
    //   return location.pathname
    // }
    return (
      <div className="whoose-404">
        <h1>Resource not found at '{pathname}'</h1>
      </div>
    )
  }
}

export default Whoops404