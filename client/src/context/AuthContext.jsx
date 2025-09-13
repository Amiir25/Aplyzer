import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import axios from "axios";

// Create the context object
export const AuthContext = createContext();

// Provide component
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    // Check localStorage on first load
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token && token.split('.').length === 3) {
            setAccessToken(token);
            try {
                const decoded = jwtDecode(token);
                if (decoded.exp * 1000 > Date.now()) {
                    setUser(decoded);
                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
                } else {
                    localStorage.removeItem('accessToken');
                }
            } catch (error) {
                console.error("Invalid token", error);
                localStorage.removeItem('accessToken');
            }
        }
    }, []);

    // Login helper: called after sign-in API success
    const login = (token) => {
        localStorage.setItem('accessToken', token);
        setAccessToken(token);
        const decoded= jwtDecode(token);
        setUser(decoded);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    };

    // Logout helper: remove token & clear state
    const logout = () => {
        localStorage.removeItem('accessToken');
        setUser(null);
        setAccessToken(null);
        delete axios.defaults.headers.common["Authorization"]
    }

    // Axios interceptor to refresh token automatically
    axios.interceptors.response.use((response) => response, async (error) => {
        if (error.response && error.response.status === 401) {
            try {
                const res = await axios.post('http://localhost:3000/auth/refresh', {}, { withCredentials: true });
                const newToken = res.data.accessToken;
                login(newToken);

                error.config.headers['Authorization'] = `Bearer ${newToken}`;
                return axios(error.config); // retry original request
            } catch (refreshError) {
                logout();
            }
        }
        return Promise.reject(error);
    });

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            { children }
        </AuthContext.Provider>
    );
}

// -------------------------------------------------------------------------------------------------------- //

// import React, { createContext, useEffect, useState } from "react";
// import { jwtDecode } from 'jwt-decode';
// import axios from "axios";


// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [accessToken, setAccessToken] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('accessToken');
//     if (token) {
//       setAccessToken(token);
//       const decoded = jwtDecode(token);
//       if (decoded.exp * 1000 > Date.now()) {
//         setUser(decoded);
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       } else {
//         localStorage.removeItem('accessToken');
//       }
//     }
//     setLoading(false);
//   }, []);

//   const login = (token) => {
//     localStorage.setItem('accessToken', token);
//     setAccessToken(token);
//     const decoded = jwtDecode(token);
//     setUser(decoded);
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   };

//   const logout = () => {
//     localStorage.removeItem('accessToken');
//     setUser(null);
//     setAccessToken(null);
//     delete axios.defaults.headers.common['Authorization'];
//   };

//   // Axios interceptor to refresh token automatically
//   axios.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       if (error.response && error.response.status === 401) {
//         try {
//           const res = await axios.post('/auth/refresh', {}, { withCredentials: true });
//           const newToken = res.data.accessToken;
//           login(newToken);
//           error.config.headers['Authorization'] = `Bearer ${newToken}`;
//           return axios(error.config); // retry original request
//         } catch (refreshError) {
//           logout();
//         }
//       }
//       return Promise.reject(error);
//     }
//   );

//   return (
//     <AuthContext.Provider value={{ user, loading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }