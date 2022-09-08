import React from "react";

export class Login extends React.Component {

    constructor(props) {
        const {login, onLogin} = props;
        super(props);
        this.state = {
            username: "",
            password: "",
            remember: false,
            login: login


        }
         
        this.handleInput = this.handleInput.bind(this);
        this.onLogin = onLogin;
    }
    handleInput(e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
        })
    }
    
    componentWillReceiveProps(nextProps){
       this.setState({login: nextProps.login})
    }


    render() {
        const disabled = (this.state.username && this.state.password) ? false : true
        return (
            <div className="login">
                <div className="form-group">
                    <label>Username</label>
                    <form>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleInput} /><br />
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleInput} /><br />
                        <label>Remember me?</label>
                        <input type="checkbox" name="remember" value={this.state.remember} onChange={this.handleInput} /><br /><br />
                        <input type="submit" disabled={disabled} onClick={this.onLogin}/><br /><br />
                        <p>{JSON.stringify(this.state)}</p>
                     
                    </form>
                </div>
            </div>
        )
    }
}