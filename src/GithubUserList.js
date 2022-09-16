import { useState } from "react"
import { ShowGithubUser } from "./ShowGithubUser"
import { Link, Outlet } from "react-router-dom"

export function GithubUserList(){
    const [usersList, setUsersList] = useState([])

    const [username, setUsername] = useState('')
    function inputChange(event){
        setUsername(()=>{return event.target.value})
    }

    function userListPush(){
        setUsersList((prev)=>{return [...prev, username]})
        setUsername(()=>{return ''})
    }


    return(
        <div>
            <input name={'username'} onChange={inputChange} value={username}/>
            <button onClick={userListPush}>Add user</button>
            {usersList.map(item => {
                return (<li key={item}><Link to={`/users/${item}`}>{item}</Link></li>)
            })}
            <Outlet></Outlet>
        </div>
    )
}