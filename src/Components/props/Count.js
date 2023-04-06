import React from "react"

export default function Count(props) {
    console.log("Count component rendered")
    
    return (
        <div className="counter--count">
            <h1>{props.number}</h1>
        </div>
    )
}

//destructuring function
// export default function Count({number:num,id,name}) {
//     console.log("Count component rendered")
    
//     return (
//         <div className="counter--count">
//             <h1>{num}</h1>
//             <h1>{id}</h1>
//             <h1>{name}</h1>
//         </div>
//     )
// }