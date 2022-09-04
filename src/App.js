import React from "react";
import { Hello } from './Hello';
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name="John" age="17" />
                <Counter count="0" increment="1" interval="1000"/>

            </div>)
    }
}