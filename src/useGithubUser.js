import useSWR from "swr";

export function useGithubUser(username) {
        const shouldFetch = username !==null
        const fetcher = url=> fetch(url).then(response => {if(response.ok){ return response.json() } else{throw new Error('There was an error')}}) 
        const {data, error, isLoading = !data&&!error } = useSWR(shouldFetch ? `https://api.github.com/users/${username}`: null, fetcher)
        return {
                data,
                error,
                isLoading
            }
        
        
        }
