import React from 'react'

const Greeting = (props) => {
  let {uniqueId, name, user, callMe, skillSet, isAdmin, children} = props
  return (
    <div>
      <h1>UniqueId: {uniqueId}</h1>
      <h1>Name: {name}</h1>
      <h1>FullName: {user.firstName} {user.lastName}</h1>
      <h1>CallMe:  {callMe()}</h1>
      <h1>Skills:  {skillSet[0]}</h1>
      {children}
    </div>
  )
}

export default Greeting
