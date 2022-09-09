import React from "react";

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "",
            items: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleInput(e) {
        this.setState({ input: e.target.value })
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({
            items: [...prevState.items, this.state.input],
            input: ""
        }))
        
    }

    handleReset(e) {
        e.preventDefault();
        this.setState({
            items: [],
            input: ""
        })
    }




    render() {
        const list = this.state.items.map(item => <li>{item}</li>)
        return (
            <div>
                <ul>
                    {list}
                </ul>
                <input type="text" onChange={this.handleInput} value={this.state.input}/>
                <button onClick={this.handleClick}>CLiccami</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}