import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContex = createContext(null )

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const[user , setUser] =useState(null)

    const creatUser = (email , password )=>{
        return createUserWithEmailAndPassword(auth, email , password)
    }

    const singIn = (email , password) =>{
       return signInWithEmailAndPassword(auth , email , password)
    }

    const authInfo = {
        user,
        creatUser,
        singIn
    }


    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;