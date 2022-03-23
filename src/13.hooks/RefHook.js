import React, {useRef} from 'react'

function RefHook() {
    const userName = useRef()

    const focusInput = () => {
       console.log(userName.current.value)
      };
  return (
    <div className="container">
        <br />
        <input type="text" ref={userName} className="form-control w-50" /> <br />
        <button onClick={focusInput} className="btn btn-primary">Focus Input</button>
    </div>
  )
}

export default RefHook