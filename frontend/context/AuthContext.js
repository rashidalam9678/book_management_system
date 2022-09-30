import { createContext, useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const[token, setToken]= useState("")
    const [user, setUser]= useState({
        id:"",
        email:"",
        first_name:"",
        last_name:""
    })
    console.log("I am the token ", token)

    return (
        <AuthContext.Provider
            value={{
                token,
                setToken,
                user, 
                setUser,
                

            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export function useAuthContext() {
    return useContext(AuthContext);
}