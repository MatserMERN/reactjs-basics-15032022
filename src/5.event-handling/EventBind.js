import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(){
        super()

        this.state = {
            message: 'Hello'
        }
        // 3rd Way 
        this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage(){
    //     console.log(this)
    //     this.setState({
    //         message: 'Thank you'
    //     })
    // }
    // 4th Way
     changeMessage = () =>{
      console.log(this)
      this.setState({
          message: 'Thank you'
      })
  }
  render() {
    return (
      <div className="container">
          <h1>{this.state.message}</h1>
          {/* <button className="btn btn-primary" onClick={this.changeMessage}>Click Me</button> */}

          {/* 1st Way*/}
          {/* <button className="btn btn-primary" onClick={this.changeMessage.bind(this)}>Click Me</button> */}

          {/* 2nd Way*/}
          {/* <button className="btn btn-primary" onClick={() =>this.changeMessage()}>Click Me</button> */}

          {/* 3rd Way*/}
          {/* <button className="btn btn-primary" onClick={this.changeMessage}>Click Me</button> */}

          {/* 4th Way*/}
          <button className="btn btn-primary" onClick={this.changeMessage}>Click Me</button>
      </div>
    )
  }
}

export default EventBind