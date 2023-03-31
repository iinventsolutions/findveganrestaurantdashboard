import React, { createContext, useContext, useState, useEffect } from "react";
import { Auth, Hub } from "aws-amplify";
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    // const navigate = useNavigate();

    const [user, setUser] = useState(undefined)

    // This is how i send the verification email
    const [verificationEmail, setVerificationEmail] = useState()

    const sub = user?.attributes?.sub

    

    const checkUser = async() => { 
        try {
          const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true})
          setUser(authUser)
        //   navigate(`/`, {replace: true})
          console.log('Auth user is: ',user)
        } catch (error) {
          setUser(null)
          console.log('Auth user error is: ',error)
        }
      }
    
      useEffect(() => {
        console.log("Hey")
        checkUser();
      }, [])

      useEffect(() => {
        console.log("TRACKING USER", user)
      }, [user])
      

      useEffect(() => {
        const listener = (data) =>{ 
          if(data.payload.event === 'signIn' || data.payload.event === 'signOut'){
            checkUser();
          }
        }
    
        const subscription = Hub.listen('auth', listener);
        return () => subscription.unsubscribe();
      }, [])


    return (
        <AuthContext.Provider 
          value={{user, 
                  verificationEmail, 
                  setVerificationEmail
                  }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContex = () => useContext(AuthContext)