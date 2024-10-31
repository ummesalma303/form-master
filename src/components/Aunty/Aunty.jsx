import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MoneyContext } from '../Grandpa/Grandpa';

const Aunty = ({ children }) => {
    const newMoney = useContext(MoneyContext);
    const [money, setMoney] = newMoney;
    return (
        <div>
            {children}
            <h2>aunty</h2>
            <h3>{money}</h3>
            <button onClick={()=>setMoney(money+50)}>Click</button>
        </div>
    );
};

Aunty.propTypes = {
    
};

export default Aunty;