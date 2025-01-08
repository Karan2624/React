import { useState } from "react";

// const Users = [
//     { name: "Alice" , age: 25} ,
//     { name: "Bob" , age: 30} ,
//     { name: "Charlie" , age: 35} ,
//     { name: "Angles" , age: 45} ,
// ];

// export const DericedState = () => {
//     return (
//         <div className="main-div">
//             <h1>Users List</h1>
//             <ul> 
//                 {
//                     Users.map((curElem,index) => {
//                         return (
//                             <li key={index} >
//                                 <h3>Name : {curElem.name}</h3>
//                                 <p>Age : {curElem.age}</p>
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

export const DerivedState = () => {
    const [users,setUsers] = useState([
        { name: "Alice" , age: 25} ,
        { name: "Bob" , age: 30} ,
        { name: "Charlie" , age: 35} ,
        { name: "Angles" , age: 45} ,
    ]);

    // derivedState
    const userCount = users.length;
    const averageAge = users.reduce((accum,curElem) => accum + curElem.age,0)/userCount;

    return (
        <div className="main-div">
            <h1>Users List</h1>
                <ul>
                    {
                        users.map((curElem,index) => {
                            return (
                                <li key={index}>
                                    <h3>Name : {curElem.name}</h3>
                                    <p>Age : {curElem.age}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <p>Total Users : {userCount}</p>
                <p>Average age : {averageAge}</p>
              
        </div>
    )
}