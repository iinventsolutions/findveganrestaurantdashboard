import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import MenuItem from '../Components/MenuItem'
import { DataStore } from 'aws-amplify'
import { Dish } from '../models'
import { useRestaurantContex } from '../Contexts/RestaurantContext'


const Menu = () => {

  const { restaurant } = useRestaurantContex();

  const [dishes, setDishes] = useState()

  useEffect(() => {
    if(restaurant){
      DataStore.query(Dish, (d)=>d.restaurantID.eq(restaurant?.id)).then(setDishes)
    }
  }, [restaurant?.id])
  

  return (
    <ComponentWrapper>
      {dishes?.map(dishItem => <MenuItem key={dishItem?.id} data={dishItem}/>)}
      {/* <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem /> */}
    </ComponentWrapper>
  )
}

export default Menu

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
  /* border: 1px solid black; */
  padding: 15px 15px;
  gap: 3rem;
  justify-content: space-between;
  overflow: auto;
  scrollbar-width: none;

  ::-webkit-scrollbar {
        display: none;
    }
`