import { useState, useCallback} from "react";

export function useClickCounter() {
    
        const [value, setValue] = useState(0);
      
        const increment = useCallback( () => {setValue(c => c + 1)}, [value])
        const decrement = useCallback( () => {setValue(c => c - 1)}, [value])
        const reset =  useCallback( () => {setValue(0)}, [value])
      
        return { value, increment, decrement, reset };
    

}