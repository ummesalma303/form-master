import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null)
    const nameEmail=useRef(null)
    useEffect(()=> {
    nameRef.current.focus()
    },[])
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(nameEmail.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-slate-300 border-2 space-y-3 p-5">
                <input ref={nameRef} type="text" name="name" /><br />
                <input ref={nameEmail} type="email" name="email" /> <br />
                <input type="password" name="pass" /><br />
                <input className="bg-white py-2 px-4 rounded-md" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;