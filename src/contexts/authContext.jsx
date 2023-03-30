import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";


const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}
export default function AuthContextProvider({ children }){
    const [loading, setLoading] = useState(false)
    function register(email, password){
        axios.post("http://localhost:8000/api/u/", {
            email,
            password
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }


    const value = {
        register
    }
    return <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
}