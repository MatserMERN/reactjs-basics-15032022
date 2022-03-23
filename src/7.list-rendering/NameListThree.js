import React from 'react'

function NameListThree() {
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
    // const nameList = persons.map(person => {
    //     return <ul key={person.id}>
    //                 <li>{person.id}</li>
    //                 <li>{person.name}</li>
    //                 <li>{person.age}</li>
    //                 <li>{person.skill}</li>
    //             </ul>
    // })

    const nameList = persons.map(person => (
        <ul key={person.id}>
            <li>{person.id}</li>
            <li>{person.name}</li>
            <li>{person.age}</li>
            <li>{person.skill}</li>
        </ul>
    ))
  return (
      <div className="container">
          {nameList}
      </div>
  )
}

export default NameListThree