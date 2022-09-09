import React from "react";

export class Login extends React.Component {

    constructor(props) {
        const { login, onLogin } = props;
        super(props);
        this.state = {
            username: "",
            password: "",
            remember: false,
            login: login


        }
        this.onLogin = onLogin;
        this.initialState = Object.freeze(this.state)
        this.handleInput = this.handleInput.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ login: nextProps.login })
    }
    handleInput(e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
        })
    }

    handleReset(e) {

        for (let stats in this.state) {
            e.preventDefault()
            this.setState({ [stats]: this.initialState[stats] })
        }
    }


    render() {
        const disabled = (this.state.username && this.state.password) ? false : true
        const classButton = this.state.password.length <8 ? "red" : "green"
        return (
            <div className="login">
                <div className="form-group">

                    <fieldset>
                    <legend>Form Controlled</legend>
                        <form>
                            <label>Username</label>
                            <input type="text" name="username" value={this.state.username} onChange={this.handleInput} /><br /> <br />
                            <label>Password</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleInput} /><br /> <br />
                            <label>Remember me?</label>
                            <input type="checkbox" name="remember" value={this.state.remember} onChange={this.handleInput} /><br /><br />
                            <input type="submit" disabled={disabled} onClick={this.onLogin} className= {classButton} /><br /><br />
                            <button onClick={this.handleReset}>Reset</button>
                            <p>State: {JSON.stringify(this.state)}</p>
    
                        </form>
                    </fieldset>
                </div>
            </div>
        )
    }
}