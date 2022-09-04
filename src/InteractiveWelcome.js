import React from "react";
import { Welcome } from "./Welcome";
export class InteractiveWelcome extends React.Component {
 constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
    render() {
        return (
            <div>
               <form><input type="text" value={this.state.value} onChange={this.handleChange}/></form>
                <Welcome name={this.state.value}/>
            </div>)
        
    }
}