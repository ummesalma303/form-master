// import PropTypes from 'prop-types';

import { useContext } from "react";
import { ThemeContext } from "../Grandpa";

const Cousin = () => {
    const ring = useContext(ThemeContext);
    // const theme = useContext(ThemeContext);
    // console.log(ring)
    return (
        <div className='border-2 border-purple-400 p-4 space-x-4'>
            <h4> Rubaiya</h4>
            <h4> suraiya </h4>
            <p>has:{ ring}</p>
        </div>
    );
};

// Cousin.propTypes = {
    
// };

export default Cousin;