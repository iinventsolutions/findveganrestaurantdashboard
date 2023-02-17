import React, { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify' 
import { Restaurant, Dish } from '../models/index';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { NewResButton } from './Dashboard';
// import { API } from 'aws-amplify';
// import * as queries from '../graphql/queries';

const Settings = () => {

  const [restaurant, setRestaurant] = useState([])
  const [tryDishes, setTryDishes] = useState()

  const navigate = useNavigate();

  
  const fetchRestaurants = async () =>{
    try {
        const results = await DataStore.query(Restaurant);
        setRestaurant(results)
    } catch (error) {
        console.log(error)
    }
    
  }


  // const allRes = async() => { 
  //   const allRestaurants = await API.graphql({ query: queries.listDishes });
  //   console.log("All Restaurants: ",allRestaurants.data.listDishes.items); 
  //   setTryDishes(allRestaurants.data.listDishes.items)
  //  }

  


  useEffect(() => {
      fetchRestaurants()
      // allRes()
      // console.log("Home Stack state: ", index);
  }, [])


  return (
    <div>
        <p>Settings</p>
          <p>Restaurants</p>
          {restaurant.map(restaurant => (
              <p key={restaurant.id}>{restaurant.name}</p>
          ))}
          <br/>
          {/* {tryDishes?.map(dish => (
              <p>{dish.name}</p>
          ))} */}



      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} direction='column'>
        <Grid item style={{backgroundColor: 'blue'}} xs={8}>
          <p>xs=8</p>
        </Grid>
        <Grid style={{backgroundColor: 'red'}} item xs={4}>
          <p>xs=4</p>
        </Grid>
        <Grid style={{backgroundColor: 'yellow'}} item xs={4}>
          <p>xs=4</p>
        </Grid>
        <Grid style={{backgroundColor: 'black'}} item xs={8}>
          <p>xs=8</p>
        </Grid>
      </Grid>
    </Box>
    <NewResButton onClick={()=>navigate('/add-restaurant', { replace: true })}>
      <p>New restaurant</p>
    </NewResButton>
    <NewResButton onClick={()=>navigate('/add-menu', { replace: true })}>
      <p>Add Menu</p>
    </NewResButton>
    </div>
  )
}

export default Settings