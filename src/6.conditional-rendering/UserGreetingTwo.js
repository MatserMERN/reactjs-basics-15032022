import React, { Component } from 'react'

export class UserGreetingTwo extends Component {
    constructor(){
        super()

        this.state = {
            isLoggedIn: true
        }
    }
  render() {
    return (
        this.state.isLoggedIn ? <div><h1>Welcome Scott</h1></div>
                              : <div><h1>Welcome Guest</h1></div>
    )
  }
}

export default UserGreetingTwo