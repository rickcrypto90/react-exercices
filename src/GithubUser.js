import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser(props){
 const {user} = useGithubUser(props.username)
return(
    <div>{Object.entries(user).map(user =>
        <tr>
            <td>{user[0]}</td>
            <td>{user[1]}</td>
        </tr>
        )}
        <br /><br />
        </div>
)

}