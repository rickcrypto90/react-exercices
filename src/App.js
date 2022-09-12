import React from "react";
import { Hello } from './Hello';
import { Welcome } from "./Welcome";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Login } from "./Login";
import { LoginUncontrolled } from "./LoginUncontrolled";
import { TodoList } from "./TodoList";
import { Container } from "./Container";
import { LanguageContext } from './LanguageContext'
import { DisplayLanguage } from "./DisplayLanguage";
import {Sum} from "./Sum";
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: false,
        language: "en" }
        this.onLogin = this.onLogin.bind(this);
        this.OnLanguageChange = this.OnLanguageChange.bind(this);
    }

    onLogin(e) {
        e.preventDefault();
        this.setState({
            login: true
        });
    }
    OnLanguageChange(event) {
        this.setState({
            language: event.target.value
        })
    }
    render() {
        return (
            
            <Container title="My react app">
            <LanguageContext.Provider value={this.state.language}>
                <div>
                    <select value={this.state.language} onChange={this.OnLanguageChange}>
                        <option value={'en'}>English</option>
                        <option value={'it'}>Italiano</option>
                    </select>
                    <DisplayLanguage/>
                </div>
                
            </LanguageContext.Provider>
            <br /><br />
                <Hello />
                <Welcome name="John" age="17" />
                <Counter count="0" increment="1" interval="1000" />
                <ClickCounter />
                <ClickTracker />
                <InteractiveWelcome />
                <Login onLogin={this.onLogin} login={this.state.login} />
                <br />
                <LoginUncontrolled />
                <TodoList render= {(array, func) => array.map((item) => <li key={item}> {item} <button value={item}onClick={func}>Rimuovi li</button></li>)}  />
                <Sum/>
            </Container>)}}