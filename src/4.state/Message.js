import React, { Component } from 'react'
import MessageOne from './MessageOne'

export class Message extends Component {
    constructor(){
        super()

        this.state = {
            name: 'Scott',
            message: 'Welcome Scott',
            data : []
        }
    }

    subscribe(){
        this.setState({
            message : 'Thank you for subscribing'
        })
    }
  render() {
    return (
      <div className="container">
          <h1>{this.state.message}</h1>
          <button className="btn btn-primary"
                  onClick={() => this.subscribe()}
          >Subscribe</button>
          <MessageOne name={this.state.name}/>
      </div>
    )
  }
}

export default Message