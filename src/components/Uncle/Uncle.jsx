import React from 'react';
import PropTypes from 'prop-types';
import Cousin from '../Grandpa/Cousin/Cousin';

const Uncle = props => {
    return (
        <div className=" text-2xl  border-2 border-red-400">
            <h2>Uncle</h2>
            <Cousin></Cousin>
        </div>
    );
};

Uncle.propTypes = {
    
};

export default Uncle;