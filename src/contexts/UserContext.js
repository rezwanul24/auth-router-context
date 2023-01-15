import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const UserContext = ({children}) => {
    const [user, setUser] = useState({displayName: 'Aakash'});
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const  signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignin = () => {
       return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        return signOut(auth);

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
            console.log('auth state change', currentUser);
        })

        return ()=> {
            unsubscribe();
        }
    },[])
    const authInfo = {user, loading, createUser, signIn, logOut, googleSignin};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;