import { useState } from "react"

const useInput = (defaultValue = '') => {
    // console.log(defaultValue);
    const [value, setName] = useState(defaultValue);
   
    const onChange= (e) =>{
        setName(e.target.value)
    }

    // return [name,onChange]
    return {value , onChange}

}

export default useInput