// import { prototype } from 'postcss/lib/previous-map';
import PropTypes from 'prop-types';
import useInput from '../../Hooks/UseInputState';

const ReusableForm = ({ title, handleSubmit, submitButton = 'update' }) => {
    const password=useInput()
    const handleLocalSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            pass: password.value
        }
        handleSubmit(data)
    }
    return (
        <div>
            <h2 className='my-3'>{title} </h2>
             <form onSubmit={handleLocalSubmit} className="bg-slate-300 border-2 space-y-3 p-5">
                <input type="text" name="name" /><br />
                <input type="email" name="email" /> <br />
                <input {...password} type="password" name="pass" /><br />
                <input className="bg-white py-2 px-4 rounded-md" type="submit" value={submitButton} />
            </form>
        </div>
    );
};

ReusableForm.propTypes = {
    title: PropTypes.string.isRequired,
    submitButton: PropTypes.string,
    handleSubmit:PropTypes.func.isRequired
};

export default ReusableForm;