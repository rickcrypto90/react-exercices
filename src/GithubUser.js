import React, {useEffect} from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}){
    const {data, error, isLoading} = useGithubUser(username)


    return(
        <div>

            {isLoading && <div>Loading..</div>}
            
            {error && <h3>User not found</h3>}
            
            {data && <div>
                <div>{Object.entries(data).map(user =>
        <tr>
            <td>{user[0]}</td>
            <td>{user[1]}</td>
        </tr>
        )}
        <br /><br />
        </div>
            </div>}
        </div>
    )
}
