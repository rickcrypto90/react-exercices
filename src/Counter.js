import React from "react";
import { CounterDisplay } from "./CounterDisplay";
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
            <CounterDisplay count={this.state.count} />
        )
    }
}