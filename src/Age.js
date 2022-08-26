import React from "react";
export class Age extends React.Component {
    render() {

        return (
            this.props.age < 18 ? <p> You are very young</p> : <p>Your age is {this.props.age}</p>
        )
    }
}