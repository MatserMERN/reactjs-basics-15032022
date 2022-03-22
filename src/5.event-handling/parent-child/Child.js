import React from 'react'

function Child(props) {
    console.log(props)
  return (
    <div>
        <h1>Click the button to call Parent method</h1>
        <button className="btn btn-primary"
                onClick={()=>props.callParent('Child')}
        >Call Parent</button>
    </div>
  )
}

export default Child