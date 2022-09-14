import { useState } from "react"

export function useLogin(){
    const [data, setdata] = useState({ username: '', password: '', remember: false })

    function inputHandler(e) {
        setdata(prev => {
            const { name, type, value, checked } = e.target
            return { ...prev, [name]: type === 'checkbox' ? checked : value }
        })

    }

   return {data, inputHandler}
}