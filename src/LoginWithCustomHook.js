import React from 'react';
import { useLogin } from "./useLogin";

export function LoginWithCustomHook(){
    const {data, inputHandler} = useLogin();
    return (
        <div>
        <br />
       <fieldset>
       <legend>Login with hooks</legend>
            <label htmlFor="username">Username</label>
            <input name="username" onChange={inputHandler} value={data.username}/> 
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input name="password" onChange={inputHandler} value={data.password} type='password' />
            <p> {data.username} {data.password}</p>
       </fieldset>
    </div>
)
}