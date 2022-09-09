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
    }
    handleInput(e) {
        this.setState({ input: e.target.value })
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({
            items: [...prevState.items, this.state.input]
        }))
    }




    render() {
        const list = this.state.items.map(item => <li>{item}</li>)
        return (
            <div>
                <ul>
                    {list}
                </ul>
                <input type="text" onChange={this.handleInput} />
                <button onClick={this.handleClick}>CLiccami</button>
            </div>
        )
    }
}