import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(){
        super()

        this.state = {

        }

        console.log('Constructor of LifeCycleA is called')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of LifeCycleA is called')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of LifeCycleA is called')
    }

  render() {
    console.log('render of LifeCycleA is called')

    return (
      <div>
          <h1>LifeCycleA</h1>
          <LifeCycleB />
      </div>
      
    )
  }
}

export default LifeCycleA