import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext(){
    return useContext(AppContext)
}

export default function AppContextProvider({ children }){
    const [createChange, setCreateChange] = useState(false)

    const values = {
        createChange,
        setCreateChange
    }

    return <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
}