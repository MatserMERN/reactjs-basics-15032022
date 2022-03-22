import React from 'react'

function NameListFour() {
    const persons = [
        {
            id:1,
            name: "Scott",
            age: 45,
            skill: 'ReactJS'
        },
        {
            id:2,
            name: "Adam",
            age: 43,
            skill: 'Angular'
        },
        {
            id:3,
            name: "Tuan",
            age: 41,
            skill: 'VueJS'
        },
        {
            id:4,
            name: "Uma",
            age: 39,
            skill: 'JavaScript'
        },
    ]

  return (
      <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Skill</th>
                </tr>
            </thead>
            <tbody>
                {
                    persons.map(person => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.skill}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
  )
}

export default NameListFour