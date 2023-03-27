import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import MenuItem from '../Components/MenuItem'
import { DataStore } from 'aws-amplify'
import { Dish } from '../models'
import { useRestaurantContex } from '../Contexts/RestaurantContext'
import MenuItemTwo from '../Components/MenuItemTwo'
import { NewResButton } from './Dashboard'
import { useNavigate } from 'react-router-dom'


const Menu = () => {

  const { restaurant } = useRestaurantContex();
  const navigate = useNavigate();

  const [dishes, setDishes] = useState()

  useEffect(() => {
    if(restaurant){
      DataStore.query(Dish, (d)=>d.restaurantID.eq(restaurant?.id)).then(setDishes)
    }
  }, [restaurant?.id])
  

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
        <NewResButton onClick={()=>navigate('/add-menu', { replace: true })}><p color='#fff'>+ Add Dish</p></NewResButton>
      </div>
    <ComponentWrapper>
      {dishes?.map(dishItem => <MenuItem key={dishItem?.id} data={dishItem}/>)}
    </ComponentWrapper>
    </>
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
  gap: 1.5rem;
  /* justify-content: space-between; */
  align-items: flex-start;
  overflow: auto;
  scrollbar-width: none;

  ::-webkit-scrollbar {
        display: none;
    }
`