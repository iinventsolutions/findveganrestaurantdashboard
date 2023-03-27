import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DataStore, Storage } from 'aws-amplify' 
import { Restaurant, Dish } from '../models/index';
import {Grid, Paper} from '@mui/material';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { NewResButton } from './Dashboard';
// import { API } from 'aws-amplify';
// import * as queries from '../graphql/queries';

const Settings = () => {

  const [restaurant, setRestaurant] = useState([])
  const [tryDishes, setTryDishes] = useState()
  const [imageLink, setImageLink] = useState()

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

  const getImage = async() => {  
    const file = await Storage.get("Law.jpg", {
      level: "public"
    });
    console.log("the image: ",file)
    setImageLink(file)
   }
  


  useEffect(() => {
      fetchRestaurants()
      // getImage()
  }, [])

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      await Storage.put(file.name, file, {
        contentType: "image/png", // contentType is optional
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  



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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction='row' >
        <Grid item xs={8} sm={3}>
          <Paper style={{height: '200px', width: '300px'}}>xs=8</Paper>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Paper style={{height: '200px', width: '300px'}}>xs=4</Paper>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Paper style={{height: '200px', width: '300px'}}>xs=4</Paper>
        </Grid>
        <Grid item xs={8} sm={3}>
          <Paper style={{height: '200px', width: '300px'}}>xs=8</Paper>
        </Grid>
      </Grid>
    </Box>
    <NewResButton onClick={()=>navigate('/add-restaurant', { replace: true })}>
      <p>New restaurant</p>
    </NewResButton>
    <NewResButton onClick={()=>navigate('/add-menu', { replace: true })}>
      <p>Add Menu</p>
    </NewResButton>
    <input type='file' onChange={onChange}/>
    <img src={`${imageLink}`} height={250} width={350}/>
    <div onClick={getImage}>Get image</div>
    </div>
  )
}

export default Settings

const Try = styled.div`
  display: flex;
  height: 200px;
  width: 100px;
`