import React, { Component } from 'react'

export class WelcomeOne extends Component {

  render() {
      let {name, skill} = this.props
    return (
      <div>
          <h1>{name} is {skill}</h1>
      </div>
    )
  }
}

export default WelcomeOne