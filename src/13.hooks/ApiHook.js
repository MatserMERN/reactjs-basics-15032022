import React, {useState, useEffect} from 'react'

function ApiHook() {
    const [students, setStudents] = useState([])

    // fetch("http://localhost:3001/api/students")
    //     .then(response => response.json())
    //     .then(data => setStudents(data))

    useEffect(() => {
        console.log('use effect is called due to state changes')
        fetch("http://localhost:3001/api/students")
        .then(response => response.json())
        .then(data => setStudents(data))
    },[])
    
  return (
    <div className="container">
        <h1>Student List</h1>
        <table className="table">
               <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
               </thead>
               <tbody>
                    {
                        students.map(student => (
                            <tr key={student._id}>
                                <td>{student._id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.city}</td>
                            </tr>
                        ))
                    }
               </tbody>
        </table>
    </div>
  )
}

export default ApiHook