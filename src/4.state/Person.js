import React, { Component } from 'react'

export class Person extends Component {
    constructor() {
      super()
    
      this.state = {
         name: 'Scott',
         city: 'Boston',
         isAdmin : true
      }
    }
  render() {
      const {name, city, isAdmin} = this.state
    return (
      <div className="container">
          <h1>{name} is from {city} </h1>
          <h1>{isAdmin ? "He is an Admin" : "He is not an admin"}</h1>
      </div>
    )
  }
}

export default Person