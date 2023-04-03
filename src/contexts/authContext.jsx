import { createContext, useState, useEffect, useContext } from "react";
import axios from "../api/axios";

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}
export default function AuthContextProvider({ children }){
    const [loading, setLoading] = useState(false)
    const [auth, setAuth] = useState({})

    function register(email, password){
        return axios.post("/u", {
            email,
            password
        })
    }

    function login(email, password){
        return axios.post("/u/login", {
            email,
            password
        }, {
            headers: {
                "Content-Type": "Application/json",
            },
            withCredentials: true
        })
    }

    const value = {
        register,
        login,
        auth,
        setAuth
    }
    return <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
}