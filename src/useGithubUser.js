import { useState } from "react"

export function useGithubUser(username) {
        const [user, setUser] = useState("")
        
                function getUser() {
                fetch(`https://api.github.com/users/${username}`).then(res => {
                        if (res.ok) { return res.json() }
                        throw new Error('Something went wrong')
                }).then(res => setUser(res)).catch(error => console.log(error))}
        
        return { user, getUser }

}