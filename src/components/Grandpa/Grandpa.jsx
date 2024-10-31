import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Parents from "../Parents/Parents";
import Uncle from "../Uncle/Uncle";

export const ThemeContext = createContext()
export const MoneyContext = createContext(0)

const Grandpa = () => {
    const [money,setMoney]=useState(200)
    let ring = 'diamond';
    return (
        <div className="flex space-x-6 text-2xl  border-2 border-red-400">
            <h2>Money { money}</h2>
            <MoneyContext.Provider value={[money,setMoney]}>
            <ThemeContext.Provider value={'Diamond'}>
            <Uncle></Uncle>
            <Aunty>
                <h2>Aunty Family</h2>
                </Aunty> 
            <Parents ring={ring}></Parents>
            </ThemeContext.Provider>
            </MoneyContext.Provider> 
        </div>
    );
};

export default Grandpa;