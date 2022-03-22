import React from 'react'

function NameList() {
    const names = ["Scott", "Adam", "Tuan"]
  return (
    <div className="container">
        <ul>
            <li>{names[0]}</li>
            <li>{names[1]}</li>
            <li>{names[2]}</li>
        </ul>
    </div>
  )
}

export default NameList