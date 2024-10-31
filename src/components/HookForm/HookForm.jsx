// import { useState } from "react";

import useInput from "../../Hooks/UseInputState";

const HookForm = () => {
    // const[name,setName]=useInput('rojoni')
    // const [name,setName]=useState()
    const emailState = useInput('rojoni')
    const pssStore = useInput('')
    // console.log(emailState)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(emailState.value)
    }

    // const handleName = (e) => {
    //     setName(e.target.value)
    // }
    return (
        <div>
             <form onSubmit={handleSubmit} className="bg-slate-300 border-2 space-y-3 p-5">
                {/* <input value={name} onChange={setName} type="text" name="name" /><br /> */}
                <input {...emailState} type="email" name="email" /> <br />
                <input {...pssStore} type="password" name="pass" /><br />
                <input className="bg-white py-2 px-4 rounded-md" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;