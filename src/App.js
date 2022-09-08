import React from "react";
import { Hello } from './Hello';
import { Welcome } from "./Welcome";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Counter } from "./Counter";
import {ClickCounter } from "./ClickCounter";
import {ClickTracker } from "./ClickTracker";
import { Login } from "./Login";
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: false}
        this.onLogin= this.onLogin.bind(this);}

        onLogin(e){
            e.preventDefault();
            this.setState({
                login: true});
        }
    render() {
        return (
            <div>
                <Hello />
                <Welcome name="John" age="17" />
                <Counter count="0" increment="1" interval="1000"/>
                <ClickCounter/>
                <ClickTracker/>
                <InteractiveWelcome/>
                <Login onLogin={this.onLogin} login={this.state.login}/>
                
                

            </div>)
    }
}