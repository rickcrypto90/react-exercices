import React from "react";

export function Sum(props) {
    let sum = props.numbers.reduce((acc,item)=> acc + item)
    return(
    <h1>{sum}</h1>
    )
}

Sum.defaultProps = {
   numbers : [5,6,7,8,99]
}