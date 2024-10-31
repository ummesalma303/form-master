import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Parents from "../Parents/Parents";
import Uncle from "../Uncle/Uncle";

export const ThemeContext = createContext()

const Grandpa = () => {
    let ring = 'diamond'
    return (
        // <div className="flex space-x-6 text-2xl  border-2 border-red-400">
            <ThemeContext.Provider value={'Diamond'}>
            <Uncle></Uncle>
            <Aunty></Aunty> 
            <Parents ring={ring}></Parents>
            </ThemeContext.Provider>
        // </div>
    );
};

export default Grandpa;