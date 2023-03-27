import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@mui/material/Avatar';
import { useRestaurantOwnerContext } from '../Contexts/RestaurantOwnerContext';
import { useRestaurantContex } from '../Contexts/RestaurantContext';
// import Title from 'antd/es/skeleton/Title';

const Navbar = () => {

    const { restaurantOwner } = useRestaurantOwnerContext();
    const { restaurant } = useRestaurantContex();

    console.log("res owner info: ", restaurantOwner)

  return (
    <ComponentWrapper>
        {/* <div> */}
        <Title>
        {restaurant && <h4>{restaurant.name}</h4>}
        </Title>
            
        {/* </div> */}
        

        <div></div>

        <HeaderSearch>
            <input placeholder="Search Restaurant" />
            <SearchIcon />
        </HeaderSearch>

        <Profile>
            <Avatar sx={{ width: 32, height: 32 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            {restaurantOwner && <p>{restaurantOwner?.username}</p>}
        </Profile>
    </ComponentWrapper>
  )
}

export default Navbar

const ComponentWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    /* border: 1px solid red; */
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    /* position: fixed; */
    /* margin-left: auto; */


`
export const HeaderSearch = styled.div`
    display: flex;
    opacity: 1;
    border-radius: 30px;
    background-color: #F3F3F3;
    text-align: left;
    padding: 5px 15px;
    color: gray;
    /* justify-content: space-around; */
    height: 30px;
    /* border: 1px solid gray; */

    >input {
        background-color: transparent;
        outline: none;
        color: #797D8C;
        text-align: left;
        border: none;
        min-width: 20vw;
    }

`
const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;

    > p {
        margin-left: 20px;

    }
`
const Title = styled.div`
    display: flex;
    height: 100%;
    /* border: 1px solid red; */
    

    >h4{
        font-size: 30px;
        font-family: 'Nunito Sans', sans-serif;
        font-weight: bold;
        /* margin-bottom: 10px; */
        /* padding-top: 0px; */
        /* border: 1px solid red; */
    }
`