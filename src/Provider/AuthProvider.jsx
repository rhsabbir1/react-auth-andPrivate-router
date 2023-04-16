import React, { createContext } from 'react';

export const AuthContex = createContext(null )

const AuthProvider = ({ children }) => {
    const user = { name: 'sabbir' }
    return (
        <AuthContex.Provider value={user}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;