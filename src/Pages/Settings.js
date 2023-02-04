import React, { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify' 
import { Restaurant, Dish } from '../models/index'
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';

const Settings = () => {

  const [restaurant, setRestaurant] = useState([])
  const [tryDishes, setTryDishes] = useState()

  
  const fetchRestaurants = async () =>{
    try {
        const results = await DataStore.query(Restaurant);
        setRestaurant(results)
    } catch (error) {
        console(error)
    }
    
  }


  const allRes = async() => { 
    const allRestaurants = await API.graphql({ query: queries.listDishes });
    console.log("All Restaurants: ",allRestaurants.data.listDishes.items); 
    setTryDishes(allRestaurants.data.listDishes.items)
   }

  


  useEffect(() => {
      fetchRestaurants()
      allRes()
      // console.log("Home Stack state: ", index);
  }, [])


  return (
    <div>
        <p>Settings</p>
          <p>Restaurants</p>
          {restaurant.map(restaurant => (
              <p>{restaurant.name}</p>
          ))}
          <br/>
          {/* {tryDishes?.map(dish => (
              <p>{dish.name}</p>
          ))} */}
    </div>
  )
}

export default Settings