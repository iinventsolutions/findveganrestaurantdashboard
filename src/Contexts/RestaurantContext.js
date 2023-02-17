import React, { createContext, useContext, useState, useEffect } from "react";
import { Restaurant } from "../models";
import { Auth } from "aws-amplify";
import { DataStore } from "aws-amplify";

export const RestaurantContex = createContext();

export const RestaurantContexProvider = ({children}) => { 

    const [user, setUser] = useState()
    const [restaurant, setRestaurant] = useState(null)

    const sub = user?.attributes?.sub
    const restaurantId = restaurant?.id

    useEffect(() => {
        Auth.currentAuthenticatedUser({ bypassCache: true}).then((res)=>setUser(res))
      }, [])

      console.log("Restaurant Owner",user)
      console.log("Restaurant Owner sub",sub)

    useEffect(() => {
        if(!sub){
            return
        }
        DataStore.query(Restaurant, (restaurantObj)=> restaurantObj.sub.eq(sub)).then((restaurants)=>setRestaurant(restaurants[0]))
    }, [sub])

    console.log("My restaurant: ", restaurant)

    return(
        <RestaurantContex.Provider value={{sub, restaurant, restaurantId}}>
            {children}
        </RestaurantContex.Provider>
    )
 }

export const useRestaurantContex = () => useContext(RestaurantContex)
