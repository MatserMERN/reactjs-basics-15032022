import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button Clicked - From Function')
    }
  return (
    <div className="container">
        <h1>Event Handling</h1>
        <button className="btn btn-primary" onClick={clickHandler}>Function Click</button>
    </div>
  )
}

export default FunctionClick