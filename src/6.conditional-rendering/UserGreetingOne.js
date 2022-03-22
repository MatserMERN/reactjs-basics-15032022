import React, { Component } from 'react'

export class UserGreetingOne extends Component {
    constructor(){
        super()

        this.state = {
            isLoggedIn: false
        }
    }
  render() {
    let message;
    if(this.state.isLoggedIn){
        message = <h1>Welcome Scott</h1>
    } else {
        message = <h1>Welcome Guest</h1>
    }
    // return <React.Fragment>
    //             {message}
    //             <h1>It is working</h1>
    //       </React.Fragment>
    return <>
                {message}
                <h1>It is working</h1>
          </>

  }
}

export default UserGreetingOne