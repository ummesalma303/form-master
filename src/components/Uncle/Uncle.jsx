import React from 'react';

import Cousin from '../Grandpa/Cousin/Cousin';

const Uncle = () => {
    return (
        <div className=" text-2xl  border-2 border-red-400">
            <h2>Uncle</h2>
            <Cousin name={'Rubaiya'}></Cousin>
            <Cousin name={'Rubaiya'}></Cousin>

        </div>
    );
};

Uncle.propTypes = {
    
};

export default Uncle;