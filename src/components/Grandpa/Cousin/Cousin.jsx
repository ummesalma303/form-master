// import PropTypes from 'prop-types';

import { useContext } from "react";
import { ThemeContext } from "../Grandpa";
import Friend from "../../Friend/Friend";

const Cousin = ({name}) => {
    const ring = useContext(ThemeContext);
    // const theme = useContext(ThemeContext);
    // console.log(ring)
    return (
        <div className='border-2 border-purple-400 p-4 space-x-4'>
            <h4>{name} </h4>
            <h4>{name} </h4>
            <p>has:{ring}</p>
            <h2>{ring && <Friend></Friend>}</h2>
            <h2>{name ==='rubaiya'&& <Friend></Friend>}</h2>
        </div>
    );
};

// Cousin.propTypes = {
    
// };

export default Cousin;