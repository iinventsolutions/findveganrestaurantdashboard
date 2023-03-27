import React, { createContext, useContext, useState, useEffect } from "react";
import { RestaurantOwner, Order, Restaurant } from "../models";
import { Auth } from "aws-amplify";
import { DataStore, Predicates } from "aws-amplify";

export const RestaurantOwnerContext = createContext();

export const RestaurantOwnerContextProvider = ({children}) => { 

    const [user, setUser] = useState()
    const [restaurantOwner, setRestaurantOwner] = useState()
    const [checkOwnerExistence, setCheckOwnerExistence] = useState(null)

    const sub = user?.attributes?.sub

    // console.log("The sub: ", sub)

    const deleteAModel = async() => { 
        await DataStore.delete(Restaurant, Predicates.ALL);
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
                DataStore.query(RestaurantOwner, (restaurantOwnerObj) => restaurantOwnerObj.sub.eq(sub)).then((restaurantowners)=>setRestaurantOwner(restaurantowners[0]))
            } 
        } catch (error) {
            console.log("Restaurant Owner error",error)
        }
  
    }, [sub])

    const checkExistingUsers = async () => { 
        try {

          const existingRecord = await DataStore.query(RestaurantOwner, (er)=> er.sub.eq(sub));
          if (existingRecord === null || existingRecord === undefined) {
            setCheckOwnerExistence(null);
          } else if (existingRecord.length > 0) {
            setCheckOwnerExistence(false);
            console.log("in the if block ",existingRecord?.length)
          } else {
            console.log('existingRec', existingRecord)
            // setTimeout(() => {
              console.log("in the else block ",existingRecord?.length)
                setCheckOwnerExistence(true);
            //   }, 1000);
          }
        } catch (error) {
          console.log("The error in checking if user is registered is: ", error);
          setCheckOwnerExistence(null);
        }
      };
      
      
    useEffect(() => {
      if(sub){
        checkExistingUsers()
      }
    }, [sub])
    

    return(
        <RestaurantOwnerContext.Provider value={{restaurantOwner, checkOwnerExistence, setCheckOwnerExistence}}>
            {children}
        </RestaurantOwnerContext.Provider>
    )
 }

export const useRestaurantOwnerContext = () => useContext(RestaurantOwnerContext)
