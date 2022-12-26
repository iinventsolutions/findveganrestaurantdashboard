import React from 'react'
import styled from 'styled-components'
import SwapVertIcon from '@mui/icons-material/SwapVert';

const Dashboard = () => {
  return (
    <ComponentWrapper>
      <Header>
        <p>Top Orders</p>
        <Sort>
          <SwapVertIcon />
          <p>sort by</p>
        </Sort>
      </Header>
    </ComponentWrapper>
  )
}

export default Dashboard

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-right: 110px;
`

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;


  > p {
    font-weight: 500;
    margin-left: 50px;
  }
`
const Sort = styled.div`
  display: flex;
  width: 80px;
  height: 25px;
  border-radius: 8px;
  border: 1px solid #E7E7E7;
  opacity: 0.8;
  /* background-color: #E7E7E7; */
`