/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";
import useAxiosPub from "../../Hooks/useAxiosPub";


export const MyAuthContext = createContext(null)
const AuthProvider = ({children}) => {
        const axiosPublic=useAxiosPub()
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
                  
                  const userInfo = {email:currentUser.email}
                  axiosPublic.post('/jwt', userInfo)
                  .then(res=> {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                  })
                } else {
                    setUser(null)
                    localStorage.removeItem('access-token')
                    Swal.fire({
                        
                        position: "top-end",
                        icon: "success",
                        title: "User is logged out",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                setLoading(false)
              });
              return ()=>{
               return unsubscribe()
            }
        },[axiosPublic])
        
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