const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target.name.value);
        // console.log(e.target.pass.value);
        // console.log(e.target.email.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-slate-300 border-2 space-y-3 p-5">
                <input type="text" name="name" /><br />
                <input type="email" name="email" /> <br />
                <input type="password" name="pass" /><br />
                <input className="bg-white py-2 px-4 rounded-md" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;