import React, {useState} from 'react'

function StringHook() {
    const [name, setName] = useState("Scott")

    const changeName = () =>{
      setName("Scott Desatnick")
    }
  return (
    <div className="container">
        <h1>Name: {name}</h1>
        <button className="btn btn-primary"
                onClick={() => changeName()}
        >Change Name</button>
    </div>
  )
}

export default StringHook