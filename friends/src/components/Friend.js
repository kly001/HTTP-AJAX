import React from "react"

const Friend = (props) => {
    return (
        <div>
            <h1>{props.friend.name}</h1>
            <p><strong>AGE:</strong> {props.friend.age}</p>
            <p><strong>EMAIL:</strong> {props.friend.email}</p>
        </div>
    )
}
export default Friend