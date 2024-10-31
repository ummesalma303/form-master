import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import PropTypes from 'prop-types';

const MySelf = ({ring}) => {
    return (
        <div className='border-2 border-purple-400 p-4  space-y-5'>
            <Brother ring={ring}></Brother>
            <Sister></Sister>
        </div>
    );
};

MySelf.propTypes = {
    ring:PropTypes.string.isRequired
};
export default MySelf;