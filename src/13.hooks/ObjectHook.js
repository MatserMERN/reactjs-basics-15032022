import React, {useState} from 'react'

function ObjectHook() {
    const [user, setUser] = useState({firstName: '', lastName: ''})
  return (
    <div className="container">
        <h1>User Form</h1>
        <form>
            <label>Firstname</label>
            <input type="text" 
                   className="form-control w-50"
                   value={user.firstName}
                   onChange={(event) =>setUser({...user, firstName: event.target.value})}
            />
            <br />
            <label>LastName</label>
            <input type="text" 
                   className="form-control w-50"
                   value={user.lastName}
                   onChange={(event) =>setUser({...user, lastName: event.target.value})}
            />  
            <br />
            <h2> FirstName : {user.firstName}</h2>    <br />     
            <h2> Lastname : {user.lastName}</h2>         
        </form>
    </div>
  )
}

export default ObjectHook