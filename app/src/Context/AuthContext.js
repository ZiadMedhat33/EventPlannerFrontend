import React, { createContext, useState, useEffect } from 'react';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") || "");
    useEffect(() => {
        if(accessToken) {
            localStorage.setItem("accessToken", accessToken);
        }else{
            localStorage.removeItem("accessToken");
        }
    }, [accessToken]);
    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
};