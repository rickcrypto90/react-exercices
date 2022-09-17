import { useState, useEffect } from "react"
import useSWR from "swr";

export function useGithubUser(username) {
        const fetcher = url=> fetch(url).then(response => {if(response.ok){ return response.json() } else{throw new Error('There was an error')}}) 
        const {data, error, isLoading = !data&&!error } = useSWR(`https://api.github.com/users/${username}`, fetcher)
        return {
                data,
                error,
                isLoading
            }
        
        
        }
