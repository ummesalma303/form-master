import { useContext } from "react";

import { MoneyContext } from "../Grandpa/Grandpa";

const Sister = () => {
    const newMoney = useContext(MoneyContext);
    const [money, setMoney] = newMoney;
    return (
        <div className='border-2 border-purple-400 p-4 flex space-x-4'>
            <h2>Sister</h2>
            <h3>Money: { money}</h3>
        </div>
    );
};

export default Sister;