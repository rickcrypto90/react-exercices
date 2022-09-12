import React, { useState } from "react";

export function Login(props) {

    const [data, setdata] = useState({ username: '', password: '', remember: false })

    function inputHandler(e) {
        setdata(prev => {
            const { name, type, value, checked } = e.target
            return { ...prev, [name]: type === 'checkbox' ? checked : value }
        })

    }

    function loginHandler(e) {
        e.preventDefault()
        props.onLogin(data);
    }

    function resetHandler(e) {
        e.preventDefault();
        setdata({ username: '', password: '', remember: false, login: false })
    }




    return (
        <div className="login">
            <div className="data-group">
                <fieldset>
                    <legend>Form Controlled</legend>
                    <data>
                        <label htmlFor="username">Username</label>

                        <input name="username" onChange={inputHandler} value={data.username} /> <br /><br />
                        <label htmlFor="password">Password</label>
                        <input name="password" onChange={inputHandler} value={data.password} type='password' /> <br /><br />
                        <label htmlFor="remember">Remember me?</label>
                        <input name="remember" onChange={inputHandler} checked={data.remember} type='checkbox' /><br /><br />
                        {!data.username || !data.password
                            ? <button disabled>Invia</button>
                            : <button onClick={loginHandler}>Invia</button>}
                        <p>Username:{data.username} Password:{data.password} Remember:{data.remember.toString()}</p>
                        <br /><br />
                        <button onClick={resetHandler}>Reset</button>
                    </data>
                </fieldset>
            </div>
        </div>
    )
}