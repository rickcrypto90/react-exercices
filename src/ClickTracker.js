import React from "react";
export class ClickTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        this.setState({ count: e.target.value });
    }
    render() {
        return (
            <div>
                <p>Last pressed: {this.state.count}</p>
                <button value="1" onClick={this.handleClick}>click me</button>
                <button value="2" onClick={this.handleClick}>click me</button>
                <button value="3" onClick={this.handleClick}>click me</button>
            </div>)
        
    }
}