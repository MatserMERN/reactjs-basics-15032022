import React, {useState} from 'react'

function FunctionCounter() {
    const [count, setCount] = useState(0)

    function incrementCount () {
       setCount(count + 1)
    }

  return (
    <div className="container">
        <h2>Count: {count}</h2>
        <button className="btn btn-primary"
                onClick={() => incrementCount()}
        >Increment Count</button>
    </div>
  )
}

export default FunctionCounter