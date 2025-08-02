import { createContext, useContext, useState } from "react";

const SortContext = createContext()

export const useSort = () => useContext(SortContext)

export const SortProvider = ({children}) => { 
    const [selectedSort, setSelectedSort] = useState(0)
    return (
        <SortContext.Provider value={{selectedSort,setSelectedSort}} >
            {children}
        </SortContext.Provider>
    )
 }