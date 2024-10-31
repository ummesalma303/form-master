import { useState } from "react";

const StateForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState('email');
    const [phone, setPhone] = useState();
    const [error, setError] = useState();
    const handleSubmit = (e) => {
        e.preventDefault()
        
    if (phone.length<=6) {
        setError('phone number must be 6 characters or longer');
    } 
        console.log(name,email,phone);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    // if (name.length<=5) {
    //     setName('must writ 5 word')
    // } 

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }


    const handlePhone = (e) => {
        setPhone(e.target.value);
        // console.log(e.target.value);
    }

    return (
        <div>
             <form onSubmit={handleSubmit} className="bg-slate-300 border-2 space-y-3 p-5">
                <input onChange={handleNameChange} type="text" name="name" />
                <br />
                <input value={email} onChange={handleEmail} type="email" name="email" /> <br />
                <input onChange={handlePhone} type="phone" name="phone" /><br />
                <p>{ error}</p>
                <input className="bg-white py-2 px-4 rounded-md" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default StateForm;