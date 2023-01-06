import React from 'react'
import styled from 'styled-components'
import AppsIcon from '@mui/icons-material/Apps';
import DescriptionIcon from '@mui/icons-material/Description';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <ComponentWrapper>
      <Logo>
        <img src='/images/logo.png'/>
      </Logo>

      <MenuWrapper>
        <Link to="/">
          <MenuItem>
              <AppsIcon style={{color: '#fff'}} />
              <p>Dashboard</p>
          </MenuItem>
        </Link>
        
        <Link to='/menu'>
          <MenuItem>
            <DescriptionIcon style={{color: '#fff'}} />
            <p>Menu</p>
          </MenuItem>
        </Link>

        <Link to='/order-list'>
          <MenuItem>
            <AppsIcon style={{color: '#fff'}} />
            <p>Order List</p>
          </MenuItem>
        </Link>

        {/* <MenuItem>
          <AppsIcon style={{color: '#fff'}} />
          <p>Order detail</p>
        </MenuItem> */}
        <Link to='/reviews'>
          <MenuItem>
            <RateReviewIcon style={{color: '#fff'}} />
            <p>Reviews</p>
          </MenuItem>
        </Link>

        <Link to='/reports'>
          <MenuItem>
            <AssessmentIcon style={{color: '#fff'}} />
            <p>Reports</p>
          </MenuItem>
        </Link>

        {/* <Link to='/reports'>
          <MenuItem>
            <ReceiptLongOutlinedIcon style={{color: '#fff'}} />
            <p>Invoice</p>
          </MenuItem>
        </Link> */}

        <Link to='/settings'>
          <MenuItem>
            <SettingsIcon style={{color: '#fff'}} />
            <p>Settings</p>
          </MenuItem>
        </Link>

        <img src='/images/upgrade.png' />

      </MenuWrapper>
    </ComponentWrapper>
  )
}

export default Sidebar

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
const Logo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 80%;
  /* border: 1px solid red; */
  margin-top: 20px;

  >img:nth-last-child(1){
    margin-top: 80px;
  }

  > a {
    text-decoration: none;
  }

  > img {
    width: 80%;
    height: 180px;
  }
`
const MenuItem = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  /* opacity: 0.8; */
  /* border: 1px solid red; */

  >p {
    margin-left: 20px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    color: #fff;
  }
`