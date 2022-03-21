import React, { Component } from 'react'

 class Welcome extends Component {
     constructor(props){
         super(props)
         
         this.name = props.name
         this.skill = props.skill
     }

  render() {

    return (
      <div>
          {this.name} is {this.skill}
      </div>
    )
  }
}

export default Welcome