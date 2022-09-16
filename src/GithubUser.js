import React, {useEffect} from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}){
 const {user, getUser} = useGithubUser(username)
 useEffect(() => {
    getUser()
 }, [user])
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