import React from "react"

export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.jpg" : "star-empty.png"
    console.log(starIcon + props.isFilled)
    return (
        <img 
            src={`../images/${starIcon}`} 
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}