import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  return (
    <ComponentWrapper>
        <h4>Overview</h4>

        <div></div>

        <HeaderSearch>
            <input placeholder="Search Restaurant" />
            <SearchIcon />
        </HeaderSearch>

        <Profile>
            <Avatar sx={{ width: 32, height: 32 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <p>Lawrence Darko</p>
        </Profile>
    </ComponentWrapper>
  )
}

export default Navbar

const ComponentWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    /* border: 1px solid red; */
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    /* position: fixed; */
    /* margin-left: auto; */

    >h4{
        font-size: 30px;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
    }
`
const HeaderSearch = styled.div`
    display: flex;
    opacity: 1;
    border-radius: 30px;
    background-color: #E7E7E7;
    text-align: left;
    padding: 5px 15px;
    color: gray;
    /* justify-content: space-around; */
    height: 30px;
    /* border: 1px solid gray; */

    >input {
        background-color: transparent;
        outline: none;
        color: gray;
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