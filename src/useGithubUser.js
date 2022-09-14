import { useState, useEffect } from "react"

export function useGithubUser(username){
    const [user,setUser] = useState("")
    useEffect(() => { 
            fetch(`https://api.github.com/users/${username}`).then(res=> res.json()).then(res=> setUser(res))})
            return  {user}
    
    }
