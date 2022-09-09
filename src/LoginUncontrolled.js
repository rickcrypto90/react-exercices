import React from "react";

export class LoginUncontrolled extends React.Component {
    constructor(props) {
        super(props);
        this.usernameU = React.createRef()
        this.passwordU = React.createRef()
        this.checkboxU = React.createRef()
        this.handleInput = this.handleInput.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleInput(event) {
        event.preventDefault();
        const { usernameU, passwordU, checkboxU } = this;
        const isEnabled = (usernameU.current.value.length > 0 && passwordU.current.value.length > 0);
        document.querySelector(".submit").disabled =isEnabled;
        document.querySelector(".loginUncontrolled").innerHTML = `Username:${usernameU.current.value} Password:${passwordU.current.value} Remember:${checkboxU.current.value}`;

    }
    handleReset(e) {
        e.preventDefault();
        const { usernameU, passwordU, checkboxU } = this
        usernameU.current.value = passwordU.current.value = checkboxU.current.value = ""
        document.querySelector(".loginUncontrolled").innerHTML = `Username:${usernameU.current.value} Password:${passwordU.current.value} Remember:${checkboxU.current.value}`;

        
    }
    render() {
        return (
            <div className="login">
                <div className="form-group">

                    <fieldset>
                        <legend>Form Uncontrolled</legend>
                        <form>
                            <label>Username</label>
                            <input type="text" ref={this.usernameU} onChange={this.handleInput} /><br /><br />
                            <label>Password</label>
                            <input type="password" ref={this.passwordU} onChange={this.handleInput} /><br /><br />
                            <label>Remember me?</label>
                            <input type="checkbox" ref={this.checkboxU} onChange={this.handleInput} /><br /><br />
                            <input className="submit" type="submit" disabled/><br /><br />
                            <p className="loginUncontrolled"></p>
                            <button onClick={this.handleReset}>Reset</button>


                        </form>
                    </fieldset>
                </div>
            </div>
        )
    }
}