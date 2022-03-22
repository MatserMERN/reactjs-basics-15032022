import React from 'react'
import './Styling.css'

function StylesheetOne(props) {
    let className = props.primary? 'primary' : 'secondary'
  return (
    <div className="container">
        <h1 className={`${className} enlarge-text`}>A heading with CSS Styling</h1>
    </div>
  )
}

export default StylesheetOne