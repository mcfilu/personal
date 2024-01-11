'use client'
import { useState, useContext, createContext } from "react";

export const menuContext = createContext();

function Context({children})  {
    const [menuVisibility, setMenu] = useState(false);
    return (
        <menuContext.Provider value={{menuVisibility, setMenu}}>
            {children}
        </menuContext.Provider>
    )
}


export default Context