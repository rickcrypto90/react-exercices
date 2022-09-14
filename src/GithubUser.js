import React, {useEffect} from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser(props){
 const {user, getUser} = useGithubUser(props.username)
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