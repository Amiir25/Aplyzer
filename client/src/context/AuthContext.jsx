import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import axios from "axios";

// Create the context object
export const AuthContext = createContext();

// Provide component
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // Helper: set axios Authorization header + state
    const setAuthHeader = (token) => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    }

    // Check localStorage on first load
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                if (decoded.exp * 1000 > Date.now()) {
                    setUser(decoded);
                    setAuthHeader(token);
                } else {
                    localStorage.removeItem('accessToken');
                }
            } catch (err) {
                console.error("Invalid token", err);
                localStorage.removeItem('accessToken');
            }
        }
    }, []);

    // Called after login or refresh
    const login = (token) => {
        localStorage.setItem('accessToken', token);
        const decoded= jwtDecode(token);
        setUser(decoded);
        setAuthHeader(token);
    };

    // Logout helper: remove token & clear state
    const logout = () => {
        localStorage.removeItem('accessToken');
        setUser(null);
        setAuthHeader(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            { children }
        </AuthContext.Provider>
    );
}