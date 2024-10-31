import PropTypes from 'prop-types';
import MySelf from '../MySelf/MySelf';

const Parents = ({ring}) => {
    return (
        <div className="text-2xl  border-2 border-red-400">
            <h2>parents</h2>
            <MySelf ring={ring}></MySelf>
        </div>
    );
};

Parents.propTypes = {
    ring:PropTypes.string.isRequired
};

export default Parents;