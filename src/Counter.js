import React from "react";
import { CounterDisplay } from "./CounterDisplay";
export class Counter extends React.Component {
    state = {
        count: 0
    }
    componentDidMount() {
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