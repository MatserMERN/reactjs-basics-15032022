import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(){
        super()

        this.state = {
            parentName: 'parent'
        }

        this.callParent = this.callParent.bind(this)
    }

    callParent(childName){
        alert(`Calling ${this.state.parentName} from ${childName} `)
    }

  render() {
    return (
      <div className="container">
          <Child callParent={this.callParent}/>
      </div>
    )
  }
}

export default Parent