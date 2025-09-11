import React, { createContext, useEffect, useState } from "react";
import jwtDecode from 'jwt-decode';
import axios from "axios";

// Create the context object
export const AuthContext = createContext();

// Provide component
export const AuthProvider = ({ children }) => {
    // Global user state (decode token payload)
    const [user, setUser] = useState(null);

    // Check localStorage on first load
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                if (decoded.exp * 1000 > Date.now()) {
                    setUser(decoded);
                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
                } else {
                    localStorage.removeItem('token');
                }
            } catch (error) {
                console.error("Invalid token", error);
                localStorage.removeItem('token');
            }
        }
    }, []);

    // Login helper: called after sign-in API success
    const login = (token) => {
        localStorage.setItem('token', token);
        const decoded= jwtDecode(token);
        setUser(decoded);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    };

    // Logout helper: remove token & clear state
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        delete axios.defaults.headers.common["Authorization"]
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            { children }
        </AuthContext.Provider>
    );
}