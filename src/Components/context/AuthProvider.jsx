/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const MyAuthContext = createContext(null)
const AuthProvider = ({children}) => {
        
        const [user, setUser]= useState(null)
        const [loading, setLoading]=useState(true)
        const createAccount = (email, password)=>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
        }
        const signInUser = (email, password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
        }

        const updateUserProfile=(name, photo)=>{
           return updateProfile(auth.currentUser, {
                displayName:name , photoURL:photo 
              })
        }
        
        useEffect(()=>{
           const unsubscribe=  onAuthStateChanged(auth, (currentUser) => {
               
                if (currentUser) {
                  setUser(currentUser)
                  setLoading(false)
                } else {
                  alert('user is not available')
                }
              });
              return ()=>{
               return unsubscribe()
            }
        },[])
        
        const signOutUser = ()=>{
            return signOut(auth)
        }
    
    const information={
        user,
        createAccount,
        signInUser,
        signOutUser,
        setUser,
        loading,
        updateUserProfile
    }
    return (
        <MyAuthContext.Provider value={information}>
            {children}
        </MyAuthContext.Provider>
    );
};

export default AuthProvider;