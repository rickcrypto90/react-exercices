import React from "react";
export class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: parseInt(this.props.count)
        }
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + parseInt(this.props.increment)
                }
            })
        }, this.props.interval)
    }
    render() {
        return (
            <h1>Seconds: {this.state.count}</h1>
        )
    }
}