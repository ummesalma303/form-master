
import PropTypes from 'prop-types';

const Brother = ({ring}) => {
    return (
        <div className='border-2 border-purple-400 p-4'>
            <h2>Brother</h2>
            <p>has: { ring}</p>
        </div>
    );
};

Brother.propTypes = {
    ring:PropTypes.string.isRequired
};
export default Brother;