import React from 'react'

function NameListTwo() {
    const names = ["Scott", "Adam", "Tuan", "Adam"]
    const customers = ["Scott", "Adam", "Tuan", "Adam"]
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    const customersList = customers.map((name, index) => <h2 key={index}>{name}</h2>)
    return (
        <React.Fragment>
            {nameList}
            {customersList}
        </React.Fragment>
    )
}

export default NameListTwo