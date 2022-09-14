import { useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUserList(){
    const [usersList, setUsersList] = useState([])

    const [username, setUsername] = useState('')
    function inputChange(event){
        setUsername(()=>{return event.target.value})
    }

    function userListPush(){
        setUsersList((prev)=>{return [username]})
        setUsername(()=>{return ''})
    }


    return(
        <div>
            <input name={'username'} onChange={inputChange} value={username}/>
            <button onClick={userListPush}>Add user</button>
            {usersList.map(item => {
                return (<GithubUser username={item} />)
            })}
        </div>
    )
}