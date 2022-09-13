import React, { useState, useEffect } from "react";

export function GithubUser(props){
    const [user,setUser] = useState("")
let fetching = fetch(`https://api.github.com/users/${props.username}`).then(res=> res.json()).then(res=> setUser(res));


return(
    <div>{Object.entries(user).map(user =>
        <tr>
            <td>{user[0]}</td>
            <td>{user[1]}</td>
        </tr>
        )}</div>
)

}