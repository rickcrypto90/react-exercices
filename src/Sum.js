import React from "react";

export function Sum(props) {
    let sum = props.numbers.reduce((acc,item)=> acc + item)
    return(
    <h1>{sum}</h1>
    )
}