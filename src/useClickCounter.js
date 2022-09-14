import { useState} from "react";

export function useClickCounter() {
    
        const [value, setValue] = useState(0);
      
        const increment = () => setValue(c => c + 1);
        const decrement = () => setValue(c => c - 1 );
        const reset = () => setValue(0);
      
        return { value, increment, decrement, reset };
    

}