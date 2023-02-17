import React, { createContext, useContext, useState, useEffect } from "react";
import { RestaurantOwner, Order } from "../models";
import { Auth } from "aws-amplify";
import { DataStore, Predicates } from "aws-amplify";

export const RestaurantOwnerContext = createContext();

export const RestaurantOwnerContextProvider = ({children}) => { 

    const [user, setUser] = useState()
    const [restaurantOwner, setRestaurantOwner] = useState()

    const sub = user?.attributes?.sub

    const deleteAModel = async() => { 
        await DataStore.delete(Order, Predicates.ALL);
     }

    useEffect(() => {
        // deleteAModel()
    }, [])
    

    useEffect(() => {
        Auth.currentAuthenticatedUser({ bypassCache: true}).then((res)=>setUser(res))
      }, [])

      console.log(user)

    useEffect(() => {
        try {
            if(sub){
                DataStore.query(RestaurantOwner, (restaurantOwnerObj)=> restaurantOwnerObj.sub.eq(sub)).then((restaurantowners)=>setRestaurantOwner(restaurantowners[0]))
            } 
        } catch (error) {
            console.log("Restaurant Owner error",error)
        }
  
    }, [sub])

    console.log("The Restaurant Owner ",restaurantOwner)

    return(
        <RestaurantOwnerContext.Provider value={{restaurantOwner}}>
            {children}
        </RestaurantOwnerContext.Provider>
    )
 }

export const useRestaurantOwnerContext = () => useContext(RestaurantOwnerContext)
