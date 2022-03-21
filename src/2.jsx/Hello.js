import React from "react";

// With JSX

// const Hello = () => {
//     return (
//         <div>
//             <h1>Hello Scott</h1>
//         </div>
//     )

// }

// Without JSX

const Hello = () => {

    return React.createElement('div', 
                               {id: 'divId', className: 'divClass'}, 
                               React.createElement('h1', 
                                                   {id: 'h1Id', className: 'h1Class'}, 
                                                   'Hello Scott'))

}                   

export default Hello 